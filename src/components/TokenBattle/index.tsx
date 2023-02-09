import GameToken from "../GameToken";

const TokenBattle = () => {
  return (
    <div className="flex flex-col w-full max-w-3xl my-auto select-none aspect-4/3 border border-red-500">
      <div
        aria-label="tokens-row-container"
        className="w-full flex justify-around border border-green-400"
      >
        <div className="flex flex-col desktop:flex-col-reverse items-center">
          <GameToken variant="scissors" size="large" />
          <p className="m-6 desktop:m-10 mobile:text-lg">you picked</p>
        </div>
        <div className="flex flex-col desktop:flex-col-reverse  items-center">
          <GameToken variant="spock" size="large" />
          <p className="m-6 desktop:m-10 mobile:text-lg">the house picked</p>
        </div>
      </div>
    </div>
  );
};

export default TokenBattle;
