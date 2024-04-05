import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full py-4 px-4 bg-neutral-700 flex justify-between items-center">
      <NavLink to="/" className=" text-white text-xl uppercase">
        Asma-Blog
      </NavLink>
      <nav className="">
        <ul className="flex gap-4">
          <li className="uppercase text-white">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "text-blue-500 " : "")}
            >
              home
            </NavLink>
          </li>
          <li className="uppercase text-white">
            <NavLink
              to="/other"
              className={({ isActive }) => (isActive ? "text-blue-500" : "")}
            >
              postblog
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
