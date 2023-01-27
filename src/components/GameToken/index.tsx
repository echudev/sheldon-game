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
  scissors: "bg-gradient-scissors shadow-token-scissors hover:drop-shadow-hover-scissors",
  lizard: "bg-gradient-lizard shadow-token-lizard hover:drop-shadow-hover-lizard",
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
      className={`relative m-5 h-32 w-32 rounded-full flex justify-center items-center 
      hover:cursor-pointer transition-all hover:brightness-110 hover:scale-105 active:translate-y-1
      ${variants[variant as keyof Variants]}`}
    >
      <div className="absolute h-24 w-24 z-10 bg-white rounded-full shadow-token-inner"></div>
      <div className="absolute z-20 text-black">
        <img alt={`${variant}-icon`} src={svg} />
      </div>
    </div>
  );
};

export default GameToken;
