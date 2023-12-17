"use client";
import { WINNERS } from "@/constants";
import React, {
  SetStateAction,
  createContext,
  useContext,
  useState,
  Dispatch,
  useEffect,
} from "react";

export interface turnData {
  [key: string]: String;
}

export interface winnerType {
  X: number;
  O: number;
  gameOver: boolean | null;
  winnerPatter: string[];
}

interface gameContextType {
  turn: boolean;
  changeTurn: () => void;
  occupied: turnData;
  setOccupied: Dispatch<SetStateAction<turnData>>;
  turnCount: number;
  setTurnCount: Dispatch<SetStateAction<number>>;
  winner: winnerType;
  setWinner: Dispatch<SetStateAction<winnerType>>;
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
  const [winner, setWinner] = useState<winnerType>({
    X: 0,
    O: 0,
    gameOver: false,
    winnerPatter: [],
  });

  const changeTurn = () => {
    setTurn(turn ? false : true);
  };

  useEffect(() => {
    const wins = localStorage.getItem(WINNERS);
    if (wins) {
      const data = JSON.parse(wins);
      setWinner(data);
    }
  }, []);

  useEffect(() => {
    if (winner.gameOver) {
      localStorage.setItem(
        WINNERS,
        JSON.stringify({ X: winner.X, O: winner.O })
      );
    }
  }, [winner]);

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
