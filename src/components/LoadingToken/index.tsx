import GameToken from "../GameToken";
import { useState, useEffect } from "react";

type Variants = "rock" | "paper" | "scissors" | "lizard" | "spock" | "unset";

export const LoadingToken = () => {
  const [variant, setVariant] = useState<Variants>("unset");
  const variants: Variants[] = ["rock", "paper", "scissors", "lizard", "spock"];

  useEffect(() => {
    let i = 0;
    const intervalId = setInterval(() => {
      setVariant(variants[i]);
      i++;
      if (i >= variants.length) {
        i = 0;
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  return <GameToken variant={variant} size="large" />;
};
