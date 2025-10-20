import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userImg from "../../assets/user.png";
import { AuthContext } from "../../provider/AuthContext";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("Sign out successfully");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="flex-1">
          {user && <p className="btn btn-secondary">{user.email}</p>}
        </div>
        <div className="nav mx-auto flex gap-4 text-lg text-accent">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/career">Career</NavLink>
        </div>
        <div className="flex-1 login-btn flex justify-end items-center gap-3">
          <img
            src={user?.photoURL || userImg}
            alt=""
            className="w-10 rounded-full"
          />
          {user ? (
            <button onClick={handleLogOut} className="btn btn-primary px-8">
              Logout
            </button>
          ) : (
            <Link to="/auth/login" className="btn btn-primary px-8">
              Login
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
