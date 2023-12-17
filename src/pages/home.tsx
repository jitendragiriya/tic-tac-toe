"use client";
import TicButton from "@/components/button";
import Players from "@/components/players";
import Score from "@/components/score";
import { WINNING_PATTERNS } from "@/constants";
import { useGameContext } from "@/context/gameContext";
import React from "react";

const TicHome = () => {
  const {
    turn,
    turnCount,
    setTurnCount,
    changeTurn,
    occupied,
    setOccupied,
    winner,
    setWinner,  
  } = useGameContext();

  //my turn
  const myButton = (row: number, col: number) => {
    const isOccupied = occupied[`${row}${col}`];
    if (isOccupied) {
      return;
    }

    occupied[`${row}${col}`] = turn ? "X" : "O";
    changeTurn();
    setOccupied(occupied);
    setTurnCount(turnCount + 1);

    //check winner
    if (turnCount >= 4) {
      WINNING_PATTERNS.forEach((PR, index) => {
        if (
          occupied[WINNING_PATTERNS[index][0]] &&
          occupied[WINNING_PATTERNS[index][1]] &&
          occupied[WINNING_PATTERNS[index][2]]
        ) {
          if (
            occupied[WINNING_PATTERNS[index][0]] ===
              occupied[WINNING_PATTERNS[index][1]] &&
            occupied[WINNING_PATTERNS[index][0]] ===
              occupied[WINNING_PATTERNS[index][2]]
          ) {
            if (occupied[WINNING_PATTERNS[index][2]] === "X")
              setWinner({
                X: winner.X + 1,
                O: winner.O,
                gameOver: true,
                winnerPatter: WINNING_PATTERNS[index],
              });
            else {
              setWinner({
                X: winner.X,
                O: winner.O + 1,
                gameOver: true,
                winnerPatter: WINNING_PATTERNS[index],
              });
            }
          }
        }
      });
    }

    // ["00", "01", "02"],
    // ["10", "11", "12"],
    // ["20", "21", "22"],
    // ["00", "10", "20"],
    // ["01", "11", "21"],
    // ["02", "12", "22"],
    // ["00", "11", "22"],
    // ["02", "11", "20"],
  };

  // reset/ restart the game
  const resetTheGame = () => {
    changeTurn();
    setWinner({ gameOver: false, X: winner.X, O: winner.O, winnerPatter: [] });
    setOccupied({});
  };

  return (
    <>
      <div className="w-fit z-10">
        <Score />
        <Players turn={turn} />
        <div className="p-0.5 sm:p-1 rounded-md flex flex-col items-center justify-center bg-[#fff]">
          {[...Array(3)].map((rw, row) => (
            <div key={row} className="flex">
              {[...Array(3)].map((cl, col) => (
                <TicButton
                  key={col}
                  value={occupied[`${row}${col}`]}
                  row={row}
                  col={col}
                  myTurn={myButton}
                  isWin={
                    winner.gameOver &&
                    winner.winnerPatter.includes(`${row}${col}`)
                  }
                />
              ))}
            </div>
          ))}
        </div>
        <div className="flex justify-end mt-5">
          <button
            className="bg-[#ff7722] rounded-md capitalize text-white px-6 py-1"
            onClick={resetTheGame}
          >
            {winner.gameOver ? "continue" : "Reset"}
          </button>
        </div>
      </div>
    </>
  );
};

export default TicHome;
