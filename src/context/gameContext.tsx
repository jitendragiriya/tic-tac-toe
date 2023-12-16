"use client";
import React, {
  SetStateAction,
  createContext,
  useContext,
  useState,
  Dispatch,
} from "react";

export interface turnData {
  [key: string]: String;
}

enum winnerType {
  X = "X",
  O = "O",
}

interface gameContextType {
  turn: boolean;
  changeTurn: () => void;
  occupied: turnData;
  setOccupied: Dispatch<SetStateAction<turnData>>;
  turnCount: number;
  setTurnCount: Dispatch<SetStateAction<number>>;
  winner: winnerType | String;
  setWinner: Dispatch<SetStateAction<winnerType | String>>;
}

const GameContext = createContext<gameContextType | undefined>(undefined);

const useGameContext = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error("useGameContext must be used within a GameProvider");
  }
  return context;
};

interface Props {
  children: React.ReactNode;
}

const GameProvider: React.FC<Props> = (props) => {
  const [turn, setTurn] = useState<boolean>(false); //player0, palyer1
  const [occupied, setOccupied] = useState<turnData>({});
  const [turnCount, setTurnCount] = useState<number>(0);
  const [winner, setWinner] = useState<winnerType | String>("");

  const changeTurn = () => {
    setTurn(turn ? false : true);
  };

  return (
    <GameContext.Provider
      value={{
        turn,
        changeTurn,
        occupied,
        setOccupied,
        turnCount,
        setTurnCount,
        winner,
        setWinner,
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
};

export { useGameContext, GameProvider };
