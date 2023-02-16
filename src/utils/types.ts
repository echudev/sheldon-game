export interface VariantsStyles {
  rock: string;
  paper: string;
  scissors: string;
  lizard: string;
  spock: string;
}

export interface Sizes {
  normal: {
    outline: string;
    inner: string;
  };
  large: {
    outline: string;
    inner: string;
  };
}

export type Variants =
  | "rock"
  | "paper"
  | "scissors"
  | "lizard"
  | "spock"
  | "unset";
