import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar font-bold flex justify-between border-b  border-gray-400 px-7 sticky top-0 z-10">
      <div className="navbar-start ">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <Link to="/">
          <img src="logo.png" className="h-10" alt="" />
        </Link>
      </div>
      <div className="navbar-center ">
        <ul className="menu menu-horizontal px-1 text-xl font-normal gap-5">
          <li>
            <NavLink
              to="/games"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-white hover:bg-orange-500 hover:bg-transparent"
                  : " hover:bg-gray-700 hover:text-gray-300"
              }
            >
              Games
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/upcoming"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-white hover:bg-orange-500 hover:bg-transparent"
                  : " hover:bg-gray-700 hover:text-gray-300"
              }
            >
              Upcoming
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/tournament"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-white hover:bg-orange-500 hover:bg-transparent"
                  : " hover:bg-gray-700 hover:text-gray-300"
              }
            >
              Tournament
            </NavLink>
          </li>
        </ul>
      </div>
      <div className=" navbar-end hidden  lg:flex">
        <ul className="menu menu-horizontal px-1 text-xl gap-3 font-normal ">
          <li>
            <NavLink
              to="/login"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-white hover:bg-orange-500 hover:bg-transparent"
                  : " hover:bg-gray-700 hover:text-gray-300"
              }
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/registration"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-white hover:bg-orange-500  hover:bg-transparent"
                  : " hover:bg-gray-700 hover:text-gray-300"
              }
            >
              Registration
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
