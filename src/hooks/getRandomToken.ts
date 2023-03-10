import { useGameStore } from "../store/gameStore";
import { useEffect, useState } from "react";
import { Variants } from "../utils/types";

export const getRandomToken = () => {
  const waitTime: number = 2000;
  const [houseToken, setHouseToken] = useState<Variants>("unset");
  const { userToken } = useGameStore();
  const variantes: Variants[] = [
    "lizard",
    "spock",
    "rock",
    "scissors",
    "paper",
  ];

  const generateRandom = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const getToken = () =>
    setTimeout(() => {
      setHouseToken(variantes[generateRandom(0, 4)]);
    }, waitTime);

  useEffect(() => {
    // espera que el usuario elija su ficha para generar una ficha random a la casa.
    if (userToken !== "unset") {
      getToken();
    }
  }, []);

  return houseToken;
};
