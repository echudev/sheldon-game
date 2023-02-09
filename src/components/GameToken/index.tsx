import { useState, useEffect } from "react";

interface Props {
  variant?: "rock" | "paper" | "scissors" | "lizard" | "spock";
  size?: "normal" | "large";
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

interface Sizes {
  normal: {
    outline: string;
    inner: string;
  };
  large: {
    outline: string;
    inner: string;
  };
}

const sizes: Sizes = {
  normal: {
    outline:
      "h-20 w-20 mobile:h-[6.5rem] mobile:w-[6.5rem] desktop:h-32 desktop:w-32",
    inner: "h-16 w-16 mobile:h-20 mobile:w-20 desktop:h-24 desktop:w-24",
  },
  large: {
    outline: "h-36 w-36 mobile:h-56 mobile:w-56 desktop:h-64 desktop:w-64",
    inner: "h-28 w-28 mobile:h-44 mobile:w-44 desktop:h-48 desktop:w-48",
  },
};

const GameToken = ({ variant = "rock", size = "normal" }: Props) => {
  const [svg, setSvg] = useState("rock");

  useEffect(() => {
    import(`../../assets/icon-${variant}.svg`).then((module) => {
      setSvg(module.default);
    });
  }, [variant]);

  return (
    <div
      aria-label="token-outline"
      data-testid="gt"
      className={`relative rounded-full
      flex justify-center items-center 
      hover:cursor-pointer transition-all hover:brightness-110 hover:scale-110 active:translate-y-1
      ${sizes[size as keyof Sizes].outline}
      ${variants[variant as keyof Variants]}`}
    >
      <div
        aria-label="token-inner"
        className={`absolute z-10 bg-white rounded-full shadow-token-inner
        ${sizes[size as keyof Sizes].inner}`}
      ></div>
      <img
        alt={`${variant}-icon`}
        src={svg}
        className="scale-[40%] z-20 h-full w-full object-contain"
      />
    </div>
  );
};

export default GameToken;
