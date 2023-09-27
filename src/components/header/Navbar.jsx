import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo/logo.png";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-red-500 underline active" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/donation"
          className={({ isActive }) =>
            isActive ? "text-red-500 underline active" : ""
          }
        >
          Donation
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/statistics"
          className={({ isActive }) =>
            isActive ? "text-red-500 underline active" : ""
          }
        >
          Statistics
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="flex justify-between items-center px-5 md:px-10 lg:px-16 py-5 fixed w-full z-10">
      <div>
        <Link to="/">
          <img src={logo} alt="logo" className="w-20 lg:w-24" />
        </Link>
      </div>
      <div className="hidden lg:flex">
        <ul className="flex gap-5 px-1">{links}</ul>
      </div>
      <div className="lg:hidden flex">
        <div onClick={() => setToggleMenu(!toggleMenu)}>
          {toggleMenu === true ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>
        <ul
          className={`absolute right-8 bg-yellow-200 rounded-lg p-5 ${
            toggleMenu ? `top-14` : `-top-40`
          } duration-1000 z-10`}
        >
          {links}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
