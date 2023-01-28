import { useState, useEffect } from "react";

interface Props {
  variant?: "rock" | "paper" | "scissors" | "lizard" | "spock";
}

interface Variants {
  rock: string;
  paper: string;
  scissors: string;
  lizard: string;
  spock: string;
}
const variants: Variants = {
  rock: "bg-gradient-rock shadow-token-rock hover:drop-shadow-hover-rock",
  paper: "bg-gradient-paper shadow-token-paper hover:drop-shadow-hover-paper",
  scissors:
    "bg-gradient-scissors shadow-token-scissors hover:drop-shadow-hover-scissors",
  lizard:
    "bg-gradient-lizard shadow-token-lizard hover:drop-shadow-hover-lizard",
  spock: "bg-gradient-spock shadow-token-spock hover:drop-shadow-hover-spock",
};

const GameToken = ({ variant = "rock" }: Props) => {
  const [svg, setSvg] = useState("rock");

  useEffect(() => {
    import(`../../assets/icon-${variant}.svg`).then((module) => {
      setSvg(module.default);
    });
  }, [variant]);

  return (
    <div
      role="menuitem"
      className={`relative m-5 rounded-full 
      h-20 w-20
      flex justify-center items-center 
      hover:cursor-pointer transition-all hover:brightness-110 hover:scale-110 active:translate-y-1
      ${variants[variant as keyof Variants]}`}
    >
      <div className="absolute h-16 w-16 z-10 bg-white rounded-full shadow-token-inner"></div>
      <img
        alt={`${variant}-icon`}
        src={svg}
        className="scale-50 z-20 h-full w-full object-contain"
      />
    </div>
  );
};

export default GameToken;
