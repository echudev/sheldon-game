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
    <div className="relative flex sm:items-center justify-center w-full h-full select-none aspect-4/3">
      <div
        aria-label="user-token"
        className="flex flex-col sm:flex-col-reverse items-center mobile:mt-20 sm:mt-0"
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
        className={`flex flex-col items-center transition-width delay-500 absolute bottom-0 sm:relative overflow-hidden mobile:mb-20 mt-32 mx-5
        ${showResult} max-w-[250px] scale-75 mobile:scale-100`}
      >
        <h2 className="text-center text-6xl mb-4 whitespace-nowrap">
          {result}
        </h2>
        <ButtonPlayAgain />
      </div>
      <div
        aria-label="house-token"
        className="flex flex-col sm:flex-col-reverse items-center mobile:mt-20 sm:mt-0"
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
