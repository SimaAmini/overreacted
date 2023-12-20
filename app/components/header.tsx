import Link from "next/link";
import { ToggleTheme } from "./toggle-theme";

const Header = () => {
  return (
    <div className="flex flex-grow justify-between flex-nowrap align-middle">
      <Link href={"/"}>
        <h1
          data-testid="blog-title"
          className="text-2xl font-black text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-warning"
        >
          Overreacted
        </h1>
      </Link>
      <ToggleTheme />
    </div>
  );
};

export default Header;
