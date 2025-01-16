import { Link } from "react-router-dom";

const NavBar = () => {
  const lists = <>
    <Link className="mr-10" to={"/"}>Home</Link>
    <Link className="mr-10" to={"/about"}>About</Link>
    <Link className="mr-10" to={"/contact"}>Contact</Link>
  </>

  return (
    <div className="navbar bg-black/10 py-5 text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            {lists}
          </ul>
        </div>
        <p className="pl-5">Homestead</p>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {lists}
        </ul>
      </div>
      <div className="navbar-end space-x-5">
        <Link to={"/login"} className="btn btn-warning">Login</Link>
        <Link to={"/register"} className="btn btn-success">Sign Up</Link>
      </div>
    </div>
  );
};

export default NavBar;