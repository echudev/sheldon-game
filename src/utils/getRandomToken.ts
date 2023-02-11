export const getRandomToken = () => {
  type Variant = "rock" | "paper" | "scissors" | "lizard" | "spock" | "unset";
  const variantes: Variant[] = ["lizard", "spock", "rock", "scissors", "paper"];

  const generateRandom = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  return variantes[generateRandom(0, 4)];
};
