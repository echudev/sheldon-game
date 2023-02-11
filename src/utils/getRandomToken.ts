import { useGameStore } from "../store/gameStore";
import { useEffect, useState } from "react";

type Variant = "rock" | "paper" | "scissors" | "lizard" | "spock" | "unset";

export const getRandomToken = () => {
  const [houseToken, setHouseToken] = useState<Variant>("unset");
  const { userToken } = useGameStore();
  const variantes: Variant[] = ["lizard", "spock", "rock", "scissors", "paper"];

  const generateRandom = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  useEffect(() => {
    if (userToken !== "unset") {
      setHouseToken(variantes[generateRandom(0, 4)]);
    }
  }, []);

  return houseToken;
};
