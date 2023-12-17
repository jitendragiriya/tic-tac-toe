import { useGameContext } from "@/context/gameContext";
import React from "react";

const Score = () => {
    const {winner} = useGameContext()
  return (
    <div className="flex items-center justify-between w-full mb-4 text-white font-semibold sm:text-xl">
      <p>{winner.O}</p>
      <p>{winner.X}</p>
    </div>
  );
};

export default Score;
