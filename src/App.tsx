import { useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

export default function App() {
  const [card, setCard] = useState<[number[], number[], number[]]>([
    [0, 1, 3, 2],
    [2, 1, 0, 4],
    [4, 3, 5, 0],
  ]);
  const [win, setWin] = useState("");
  const [showCard, SetShowCard] = useState(
    new Array(card.length)
      .fill("")
      .map(() => new Array(card[0].length).fill(false))
  );
  const [prevValue, setPrevValue] = useState<number | undefined>();
  const showCardHandler = (rowIndex: any, colIndex: any, e: any) => {
    const newShowCard = [...showCard];
    const PreValue = [...card];
    setPrevValue(PreValue[rowIndex][colIndex]);
    newShowCard[rowIndex][colIndex] = true;
    SetShowCard(newShowCard);
    if (prevValue !== undefined) {
      if (prevValue == card[rowIndex][colIndex]) {
        setWin("You Win");
      } else {
        setInterval(() => {
          window.location.reload();
        }, 500);
      }
    }
  };
  return (
    <>
      <button
        onClick={() => {
          window.location.reload();
        }}
      >
        Reload
      </button>
      {win && <div className={`${win && "Winner"}`}>{win}</div>}
      <div className="container">
        {card.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((col, colIndex) => (
              <button
                key={colIndex}
                className="col"
                value={col}
                onClick={(e: any) => {
                  showCardHandler(rowIndex, colIndex, e);
                }}
              >
                {showCard[rowIndex][colIndex] && col}
              </button>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
