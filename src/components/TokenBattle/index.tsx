import ButtonPlayAgain from "../ButtonPlayAgain";
import GameToken from "../GameToken";

const TokenBattle = () => {
  type Result = "you win" | "you lose";
  const result: Result = "you lose";

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 justify-items-center content-evenly w-full h-full select-none aspect-4/3">
      <div
        aria-label="user-token"
        className="flex flex-col sm:flex-col-reverse items-center sm:order-1"
      >
        <GameToken variant="scissors" size="large" />
        <p className="m-6 w-full text-center sm:m-10 mobile:text-lg">
          you picked
        </p>
      </div>
      <div
        aria-label="house-token"
        className="flex flex-col sm:flex-col-reverse items-center sm:order-3"
      >
        <GameToken variant="spock" size="large" />
        <p className="m-6 w-full text-center sm:m-10 mobile:text-lg">
          the house picked
        </p>
      </div>
      <div
        aria-label="result"
        className="col-span-2 sm:col-span-1 sm:order-2 self-end mb-10"
      >
        <h2 className="text-center text-6xl mb-4">{result}</h2>
        <ButtonPlayAgain />
      </div>
    </div>
  );
};

export default TokenBattle;
