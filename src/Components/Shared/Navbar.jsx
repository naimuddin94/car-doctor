import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);

  const handleLogout = () => {
    logoutUser()
      .then(() => {})
      .catch((err) => {
        console.log(err.message);
      });
  };

  const navItems = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/bookings">Bookings</NavLink>
      </li>
      <li>
        <NavLink to="/services">Services</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
      {!user && (
        <>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/register">Register</NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100 px-5 md:px-8 lg:px-12">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">
          <img src="/assets/logo.svg" alt="" className="w-16" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-5 px-1">{navItems}</ul>
      </div>
      {user && (
        <div className="navbar-end">
          <h3 className="mr-5">{user.email}</h3>
          <a onClick={handleLogout} className="btn">
            Logout
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
