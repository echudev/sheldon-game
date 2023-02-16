import GameToken from "../GameToken";
import { Link } from "react-router-dom";
import pentagon from "../../assets/bg-pentagon.svg";
import { useGameStore } from "../../store/gameStore";

const TokenPicker = () => {
  const { setUserToken } = useGameStore();
  return (
    <main className="flex flex-col items-center justify-center h-full w-full max-w-3xl my-auto select-none aspect-4/3">
      <h1 className="hidden">Rock Paper Scissors Lizard Spock</h1>
      <div className="relative max-h-52 mobile:max-h-64 desktop:max-h-80 h-full aspect-square">
        <img alt="pentagon" src={pentagon} className="absolute w-full h-full" />
        <Link
          to={`/tokenbattle`}
          onClick={() => setUserToken("scissors")}
          className="absolute top-[-15%] left-[calc(50%-2.5rem)] mobile:left-[calc(50%-3.25rem)] desktop:left-[calc(50%-4rem)]"
        >
          <GameToken variant="scissors" />
        </Link>
        <Link
          to={`/tokenbattle`}
          onClick={() => setUserToken("spock")}
          className="absolute top-[22%] left-[calc(0%-2.5rem)] mobile:left-[calc(0%-3.25rem)] desktop:left-[calc(0%-4rem)]"
        >
          <GameToken variant="spock" />
        </Link>
        <Link
          to={`/tokenbattle`}
          onClick={() => setUserToken("paper")}
          className="absolute top-[22%] left-[calc(100%-2.5rem)] mobile:left-[calc(100%-3.25rem)] desktop:left-[calc(100%-4rem)]"
        >
          <GameToken variant="paper" />
        </Link>
        <Link
          to={`/tokenbattle`}
          onClick={() => setUserToken("lizard")}
          className="absolute bottom-[-15%]  left-[calc(22%-2.5rem)] mobile:left-[calc(22%-3.25rem)] desktop:left-[calc(22%-4rem)]"
        >
          <GameToken variant="lizard" />
        </Link>
        <Link
          to={`/tokenbattle`}
          onClick={() => setUserToken("rock")}
          className="absolute bottom-[-15%] left-[calc(78%-2.5rem)] mobile:left-[calc(78%-3.25rem)] desktop:left-[calc(78%-4rem)]"
        >
          <GameToken variant="rock" />
        </Link>
      </div>
    </main>
  );
};

export default TokenPicker;
