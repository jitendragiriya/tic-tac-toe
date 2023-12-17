import { useGameContext } from "@/context/gameContext";
import React from "react";

const Players = ({ turn }: { turn: boolean }) => {
  const {winner} = useGameContext()
  return (
    <div className="flex items-center justify-between mb-4">
      <p className={`bg-[#fff] rounded-sm shadow-sm uppercase sm:text-xl text-[#ff7722] px-1 ${!turn && !winner.gameOver ? "animate-bounce" :""}`}>
        Player O
      </p>

      <p className={`bg-[#fff] rounded-sm shadow-sm uppercase sm:text-xl text-[#ff7722] px-1 ${turn && !winner.gameOver? "animate-bounce" :""}`}>
        Player X
      </p>
    </div>
  );
};

export default Players;
