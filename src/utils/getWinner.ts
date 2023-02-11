type Variant = "rock" | "paper" | "scissors" | "lizard" | "spock" | "unset";

type Result = "you win" | "you lose" | "draw";
type Rules = Record<string, Result>;

export const getWinner = (user: Variant, home: Variant): Result => {
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

  return rules[`${user} ${home}`];
};
