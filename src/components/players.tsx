import React from "react";

const Players = ({ turn }: { turn: boolean }) => {
  return (
    <div className="flex items-center justify-between mb-4">
      <p className="bg-[#ff7722] rounded-sm shadow-sm uppercase text-xl text-white px-1">
        Player 1
      </p>
      <div className={`bg-[#fff] h-2 w-2 rounded-full rotate-45 duration-300 ${turn ? "ml-14 sm:ml-40":"-ml-14 sm:-ml-40"}`}></div>

      <p className="bg-[#ff7722] rounded-sm shadow-sm uppercase text-xl text-white px-1">
        Player 2
      </p>
    </div>
  );
};

export default Players;
