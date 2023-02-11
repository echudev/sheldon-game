import { useGameStore } from "../../store/gameStore";

const Score = () => {
  const { score } = useGameStore();

  return (
    <div className="bg-slate-200 rounded-md flex flex-col items-center justify-center h-full max-h-20 2xl:max-h-36 aspect-4/3 ">
      <div className="text-score text-center text-sm font-bold">Score</div>
      <div className="text-gray-600 text-5xl font-bold">{score}</div>
    </div>
  );
};

export default Score;
