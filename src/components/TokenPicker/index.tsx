import pentagon from "../../assets/bg-pentagon.svg";
// import GameToken from "../GameToken";

const TokenPicker = () => {
  return (
    <main className="flex items-start justify-center max-w-3xl mt-2 select-none">
      <div className="relative w-full h-full flex flex-col mt-16 border border-green-500">
        <img
          src={pentagon}
          alt="pentagon"
          className="absolute w-full h-full object-contain"
        />
        <div className="relative">HOla</div>
        <div className="">HOla</div>
        <div className="">HOla</div>
      </div>
    </main>
  );
};

export default TokenPicker;
