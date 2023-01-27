import logo from "../../assets/logo.svg";
import Score from "../Score";

const Header = () => {
  return (
    <div className="container flex max-w-3xl mt-10 select-none">
      <div className="w-full py-4 px-6 flex items-center justify-between mx-8 border-4 rounded-xl border-headerOutline">
        <img
          src={logo}
          alt="logo"
          className="flex max-h-20 p-2 sm:p-1"
        />
        <Score />
      </div>
    </div>
  );
};

export default Header;
