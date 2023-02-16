import { useState, useEffect } from "react";
import { variantsStyles, sizes, winnerStyles } from "../../utils/constants";

interface Props {
  variant?: "rock" | "paper" | "scissors" | "lizard" | "spock" | "unset";
  size?: "normal" | "large";
  hideShadow?: boolean;
}

const GameToken = ({
  variant = "unset",
  size = "normal",
  hideShadow = true,
}: Props) => {
  const [svg, setSvg] = useState<Props["variant"]>("rock");

  useEffect(() => {
    if (variant !== "unset") {
      import(`../../assets/icon-${variant}.svg`).then((module) => {
        setSvg(module.default);
      });
    }
  }, [variant]);

  return (
    <>
      {variant !== "unset" ? (
        <div
          data-testid="gt"
          className={`relative rounded-full
    flex justify-center items-center 
    hover:cursor-pointer transition-all hover:brightness-110 active:translate-y-1
    ${sizes[size].outline}
    ${variantsStyles[variant]}`}
        >
          <div
            className={`absolute -z-10 h-full w-full rounded-full ${
              winnerStyles[variant]
            } ${hideShadow ? "hidden" : ""}`}
          ></div>
          <div
            className={`absolute z-10 bg-white rounded-full shadow-token-inner
      ${sizes[size].inner}`}
          ></div>
          <img
            alt={`${variant}-icon`}
            src={svg}
            className="scale-[40%] z-20 h-full w-full object-contain"
          />
        </div>
      ) : (
        <div
          data-testid="gt"
          className={`relative rounded-full flex justify-center items-center bg-black bg-opacity-20
          ${sizes[size].outline}`}
        ></div>
      )}
    </>
  );
};

export default GameToken;
