import logo from "../../assets/logo.svg";
import Score from "../Score";

const Header = () => {
  return (
    <div className="container flex max-w-3xl mt-12">
      <div className="w-full p-6 flex items-center justify-between mx-10 border-4 rounded-xl border-headerOutline">
        <img
          src={logo}
          alt="logo"
          className="flex max-h-20 md:max-h-full"
        />
        <Score />
      </div>
    </div>
  );
};

export default Header;
