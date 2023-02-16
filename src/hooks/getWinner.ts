import { useEffect } from "react";
import { useGameStore } from "../store/gameStore";
import { Variants } from "../utils/types";

type Result = "you win" | "you lose" | "draw";
type Rules = Record<string, Result>;

export const getWinner = (user: Variants, home: Variants) => {
  const { increaseScore } = useGameStore();

  const rules: Rules = {
    "paper rock": "you win",
    "rock paper": "you lose",
    "scissors paper": "you win",
    "paper scissors": "you lose",
    "lizard paper": "you win",
    "paper lizard": "you lose",
    "paper spock": "you win",
    "spock paper": "you lose",
    "rock lizard": "you win",
    "lizard rock": "you lose",
    "rock scissors": "you win",
    "scissors rock": "you lose",
    "spock rock": "you win",
    "rock spock": "you lose",
    "lizard spock": "you win",
    "spock lizard": "you lose",
    "scissors lizard": "you win",
    "lizard scissors": "you lose",
    "spock scissors": "you win",
    "scissors spock": "you lose",
    "paper paper": "draw",
    "scissors scissors": "draw",
    "spock spock": "draw",
    "rock rock": "draw",
    "lizard lizard": "draw",
  };

  useEffect(() => {
    if (rules[`${user} ${home}`] === "you win") {
      increaseScore(1);
    } else if (rules[`${user} ${home}`] === "you lose") {
      increaseScore(-1);
    } else if (rules[`${user} ${home}`] === "draw") {
      increaseScore(0);
    }
  }, [user, home]);

  return rules[`${user} ${home}`];
};
