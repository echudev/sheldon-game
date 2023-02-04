import GameToken from "../GameToken";
import pentagon from "../../assets/bg-pentagon.svg";

const TokenPicker = () => {
  return (
    <main className="flex flex-col items-center justify-center w-full max-w-3xl my-auto select-none aspect-4/3">
      <div className="relative max-h-52 mobile:max-h-64 desktop:max-h-80 h-full aspect-square">
        <img alt="pentagon" src={pentagon} className="absolute w-full h-full" />
        <div className="absolute top-[-15%] left-[calc(50%-2.5rem)] mobile:left-[calc(50%-3.25rem)] desktop:left-[calc(50%-4rem)]">
          <GameToken variant="scissors" />
        </div>
        <div className="absolute top-[22%] left-[calc(0%-2.5rem)] mobile:left-[calc(0%-3.25rem)] desktop:left-[calc(0%-4rem)]">
          <GameToken variant="spock" />
        </div>
        <div className="absolute top-[22%] left-[calc(100%-2.5rem)] mobile:left-[calc(100%-3.25rem)] desktop:left-[calc(100%-4rem)]">
          <GameToken variant="paper" />
        </div>
        <div className="absolute bottom-[-15%]  left-[calc(25%-2.5rem)] mobile:left-[calc(25%-3.25rem)] desktop:left-[calc(25%-4rem)]">
          <GameToken variant="lizard" />
        </div>
        <div className="absolute bottom-[-15%] left-[calc(75%-2.5rem)] mobile:left-[calc(75%-3.25rem)] desktop:left-[calc(75%-4rem)]">
          <GameToken variant="rock" />
        </div>
      </div>
    </main>
  );
};

export default TokenPicker;
