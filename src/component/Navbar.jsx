import { Button } from "./Button";
import "./Navbar.css";
import { useState } from "react";
// import "day3\public\assets\logo.svg"
import Logo from "../assets/logo";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const navbarList = ["Home", "Quote", "Resturants", "Foods", "Contact"];
  return (
    <>
      <nav>
        <div className="logo">
          {/* <img src={Logo}></img> */}
          <Logo />
          <h3 className="logo-name">GeekFoods</h3>
        </div>
        <div className="options">
          <ul className="list">
            {navbarList.map((e) => (
              <li
                key={e}
                className={`${
                  active === e ? "text-blue" : "text-secondary"
                } hover:text-white text-[18px] font-medium  text-base cursor-pointer`}
                onClick={() => setActive(e)}
              >
                {e}
              </li>
            ))}
          </ul>
        </div>
        <div className="getStarted">
          <button className="text-white bg-blue-700 bg-blue hover:bg-[#1565C0] focus:ring-4 focus:outline-none focus:ring-[#6dafff] font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 ">
            Get Started
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
