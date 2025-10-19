import React from "react";
import { NavLink } from "react-router";
import userImg from "../../assets/user.png";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between items-center">
        <div className=""></div>
        <div className="nav flex gap-4 text-lg text-accent">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/career">Career</NavLink>
        </div>
        <div className="login-btn flex justify-between items-center">
          <img src={userImg} alt="" />
          <button className="btn btn-primary px-8">Login</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
