import { Link } from "react-router-dom";

const ButtonPlayAgain = () => {
  return (
    <Link to={"/tokenpicker"}>
      <button className="w-full min-w-[230px] text-base border-2 rounded-lg text-dark font-bold bg-white py-3 px-10 hover:brightness-125 transition">
        PLAY AGAIN
      </button>
    </Link>
  );
};

export default ButtonPlayAgain;
