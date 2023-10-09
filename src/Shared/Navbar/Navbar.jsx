import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };


  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li tabIndex={0}>
        <NavLink to="/premium">Premium Services</NavLink>
      </li>
      <li>
        <NavLink to="/career">Career</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 bg-[#BAE1FF]">
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
            {navLinks}
          </ul>
        </div>
        <NavLink to="/" className="btn btn-ghost normal-case text-xl">
          EventPlaza
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end gap-3">
        {user ? (
          <>
          <img className="rounded-full w-10 h-10" src={user.photoURL} alt="" />
            <p>{user.email}</p>
            <button onClick={handleLogOut} className="btn">
              LogOut
            </button>
          </>
        ) : (
          <>
            <Link to="/login">
              <button className="btn">Log in</button>
            </Link>
            <Link to="/register">
              <button className="btn">Register</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
