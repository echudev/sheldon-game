import { useEffect, useState } from "react";
import ButtonPlayAgain from "../ButtonPlayAgain";
import GameToken from "../GameToken";
import { useGameStore } from "../../store/gameStore";
import { getRandomToken } from "../../hooks/getRandomToken";
import { getWinner } from "../../hooks/getWinner";

type ResultWidth = "w-0" | "w-full";

const TokenBattle = () => {
  const [showResult, setShowResult] = useState<ResultWidth>("w-0");
  const { userToken } = useGameStore();
  const houseToken = getRandomToken();
  const result = getWinner(userToken, houseToken);

  useEffect(() => {
    // espera la selección random de la ficha de la casa para mostrar el botón "Play again"
    if (houseToken !== "unset") {
      setShowResult("w-full");
    }
  }, [houseToken]);

  return (
    <div
      className="grid grid-cols-2 grid-rows-2 items-center
                 sm:flex sm:items-center sm:justify-center
                 w-full max-w-4xl h-[350px] mobile:h-full pt-10 sm:pt-0 select-none aspect-4/3"
    >
      <div
        aria-label="user-token"
        className="order-1 h-min flex flex-col sm:flex-col-reverse items-center"
      >
        <GameToken
          variant={userToken}
          size="large"
          hidden={result === "you win" ? "" : "hidden"}
        />
        <p className="m-6 w-full text-center sm:m-10 mobile:text-lg">
          you picked
        </p>
      </div>
      <div
        aria-label="result-container"
        className={`order-3 h-min sm:order-2 col-span-2 flex flex-col items-center transition-width delay-500 overflow-hidden
        ${showResult} scale-75 mobile:scale-100`}
      >
        <h2 className="text-center text-6xl mb-4 whitespace-nowrap">
          {result}
        </h2>
        <ButtonPlayAgain />
      </div>
      <div
        aria-label="house-token"
        className="order-2 h-min sm:order-3 flex flex-col sm:flex-col-reverse items-center"
      >
        <GameToken
          variant={houseToken}
          size="large"
          hidden={result === "you lose" ? "" : "hidden"}
        />
        <p className="m-6 w-full text-center sm:m-10 mobile:text-lg">
          the house picked
        </p>
      </div>
    </div>
  );
};

export default TokenBattle;
