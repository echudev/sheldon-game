import { VariantsStyles, Sizes } from "./types";

export const variantsStyles: VariantsStyles = {
  rock: "bg-gradient-rock shadow-token-rock hover:drop-shadow-hover-rock",
  paper: "bg-gradient-paper shadow-token-paper hover:drop-shadow-hover-paper",
  scissors:
    "bg-gradient-scissors shadow-token-scissors hover:drop-shadow-hover-scissors",
  lizard:
    "bg-gradient-lizard shadow-token-lizard hover:drop-shadow-hover-lizard",
  spock: "bg-gradient-spock shadow-token-spock hover:drop-shadow-hover-spock",
};

export const sizes: Sizes = {
  normal: {
    outline:
      "h-20 w-20 mobile:h-[6.5rem] mobile:w-[6.5rem] desktop:h-32 desktop:w-32",
    inner: "h-16 w-16 mobile:h-20 mobile:w-20 desktop:h-24 desktop:w-24",
  },
  large: {
    outline: "h-36 w-36 sm:h-56 sm:w-56 desktop:h-64 desktop:w-64",
    inner: "h-28 w-28 sm:h-44 sm:w-44 desktop:h-48 desktop:w-48",
  },
};

export const winnerStyles: VariantsStyles = {
  rock: "animate-shine drop-shadow-hover-rock",
  paper: "animate-shine drop-shadow-hover-paper",
  scissors: "animate-shine drop-shadow-hover-scissors",
  lizard: "animate-shine drop-shadow-hover-lizard",
  spock: "animate-shine drop-shadow-hover-spock",
};
