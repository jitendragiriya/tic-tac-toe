import React from "react";

const Players = ({ turn }: { turn: boolean }) => {
  return (
    <div className="flex items-center justify-between mb-4">
      <p className={`bg-[#ff7722] rounded-sm shadow-sm uppercase sm:text-xl text-white px-1 ${turn ? "" :"animate-bounce"}`}>
        Player O
      </p>

      <p className={`bg-[#ff7722] rounded-sm shadow-sm uppercase sm:text-xl text-white px-1 ${turn ? "animate-bounce" :""}`}>
        Player X
      </p>
    </div>
  );
};

export default Players;
