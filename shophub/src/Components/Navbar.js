import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { BsBagFill } from "react-icons/bs";
import { PiDotsNine } from "react-icons/pi";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [data, setData] = useState(false);
  const handleHam = () => {
    setData(!data);
  };
  return (
    <nav className="navRoot">
      <div className="brandSection">
        <PiDotsNine className="brandLogo" />
        <div className="brandName">
          <Link className="brandLink" to={"/"}>
            ShopHub
          </Link>
        </div>
      </div>
      <div className="navLinks">
        <Link className="link" to={"/"}>
          Home
        </Link>
        <Link className="link" to={"/shop"}>
          Shop
        </Link>
        <Link className="link" to={"/#"}>
          Blog
        </Link>
        <Link className="link" to={"/#"}>
          Contact
        </Link>
        <Link className="link" to={"/login"}>
          Login
        </Link>
        <Link className="link" to={"/signup"}>
          Signup
        </Link>
        <Link className="link" to={"/myaccount"}>
          MyAccount
        </Link>
      </div>
      <div className="navCart">
        <Link className="link" to={"/cart"}>
          <BsBagFill />
        </Link>
      </div>

      <div className="navHam" onClick={handleHam}>
        <GiHamburgerMenu />
      </div>
    </nav>
  );
};

export default Navbar;
