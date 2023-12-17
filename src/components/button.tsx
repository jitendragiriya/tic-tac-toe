import React from "react";

interface buttonType {
  row: number;
  col: number;
  myTurn: (row: number, col: number) => void;
  value: String | null;
  isWin:boolean | null;
}

const TicButton = ({ myTurn, row, col, value, isWin }: buttonType) => { 
 
  return (
    <button
      className={`h-20 w-20 sm:h-28 sm:w-28 m-0.5 sm:m-1  rounded-md shadow-sm uppercase text-6xl sm:text-8xl text-white ${isWin ? "bg-[#168312]" :"bg-[#ff7722]"}`}
      onClick={() => myTurn(row, col)}
      disabled={value ? true : false}
    >
      {value}
    </button>
  );
};

export default TicButton;
