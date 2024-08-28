import React from "react";
import Logo from "../assets/logo.svg";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <header className=" py-8">
      <div className=" container mx-auto">
        <div className=" flex justify-between">
          <a href="#">
            <img src={Logo} alt="" height={40} width={40} />
          </a>
          <button className="btn btn-sm">
            <Link spy={true} smooth={true} duration={500} to="contact">
              Work with me
            </Link>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
