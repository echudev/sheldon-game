import ButtonPlayAgain from "../ButtonPlayAgain";
import GameToken from "../GameToken";

const TokenBattle = () => {
  type Result = "you win" | "you lose";
  const result: Result = "you lose";

  return (
    <div className="w-full max-w-3xl my-auto select-none aspect-4/3 border border-green-400 grid grid-cols-2 justify-items-center">
      <div
        aria-label="user-token"
        className="flex flex-col desktop:flex-col-reverse items-center"
      >
        <GameToken variant="scissors" size="large" />
        <p className="m-6 desktop:m-10 mobile:text-lg">you picked</p>
      </div>
      <div
        aria-label="house-token"
        className="flex flex-col desktop:flex-col-reverse  items-center"
      >
        <GameToken variant="spock" size="large" />
        <p className="m-6 desktop:m-10 mobile:text-lg">the house picked</p>
      </div>
      <div aria-label="result" className="border border-red-500 col-span-2">
        <h2 className="text-center text-6xl mb-4">{result}</h2>
        <ButtonPlayAgain />
      </div>
    </div>
  );
};

export default TokenBattle;
