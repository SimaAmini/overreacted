import { ToggleTheme } from "./toggle-theme";

const Header = () => {
  return (
    <div className="flex flex-grow justify-between flex-nowrap align-middle">
      <div>
        <h1 className="text-4xl font-black">Overreacted</h1>
      </div>
      <div>
        <ToggleTheme />
      </div>
    </div>
  );
};

export default Header;
