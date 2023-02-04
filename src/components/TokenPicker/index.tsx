// import GameToken from "../GameToken";
import pentagon from "../../assets/bg-pentagon.svg";

const TokenPicker = () => {
  return (
    <main className="flex flex-col items-center w-full max-w-3xl my-auto select-none border border-red-500 aspect-4/3">
      <img
        alt="pentagon"
        src={pentagon}
        className="relative border h-full border-green-500"
      />
      {/* <div className="relative border border-blue-400">HOla</div>
        <div className="relative border border-yellow-300">HOla</div>
        <div className="relative border border-pink-400">HOla</div> */}
    </main>
  );
};

export default TokenPicker;
