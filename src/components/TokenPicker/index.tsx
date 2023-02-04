import GameToken from "../GameToken";
import pentagon from "../../assets/bg-pentagon.svg";

const TokenPicker = () => {
  return (
    <main className="flex flex-col items-center justify-center w-full max-w-3xl my-auto select-none border border-red-500 aspect-4/3">
      <div className="relative max-h-52 mobile:max-h-96 h-full aspect-square">
        <img alt="pentagon" src={pentagon} className="absolute w-full h-full" />
        <div className="absolute top-[-22%] left-[calc(50%-60px)]">
          <GameToken variant="scissors" />
        </div>
        <div className="absolute top-[15%] left-[calc(0%-55px)]">
          <GameToken variant="spock" />
        </div>
        <div className="absolute top-[15%] left-[calc(100%-65px)]">
          <GameToken variant="paper" />
        </div>
        <div className="absolute bottom-[-25%] mobile:bottom-[-13%] left-[calc(20%-60px)]">
          <GameToken variant="lizard" />
        </div>
        <div className="absolute bottom-[-25%] mobile:bottom-[-13%] left-[calc(80%-60px)]">
          <GameToken variant="rock" />
        </div>
      </div>
    </main>
  );
};

export default TokenPicker;
