import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
import Hamburger from "../assets/icons/hamburger.svg";
import Close from "../assets/icons/close.svg";
import Button from "./Button";

export default function Navbar() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleMenu = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <nav className="relative w-[100%] h-16 pl-8 flex items-center justify-start md:px-[40px] md:py-[22px] md:h-[96px] lg:max-w-[1440px] lg:mx-auto">
      <div className="order-2 md:order-1">
        <div>
          <img
            className="w-[75.5px] md:w-[107px]"
            src={Logo}
            alt="Scoot Logo"
          />
        </div>
      </div>
      <div className="order-1 mr-[99px] md:hidden">
        <button onClick={toggleMenu}>
          <img src={isExpanded ? Close : Hamburger} alt="" />
        </button>
      </div>
      <div
        className={`absolute top-[64px] w-[256px] flex flex-col h-[603px] left-0 bg-[#333A44] flex-col justify-between pl-8 pt-16 text-[#E5ECF4] ease-in-out duration-300 ${
          isExpanded ? "translate-x-[100]" : "-translate-x-full"
        } z-10
      md:static md:flex-row md:order-2 md:translate-x-[0] md:h-[100%] md:items-center md:pt-0 md:w-[100%] md:justify-between md:bg-transparent md:text-[#939CAA] md:ml-[60px] md:pl-0`}
      >
        <ul className="font-space flex gap-6 flex-col text-lg md:flex-row">
          <li>
            <Link
              onClick={() => {
                setIsExpanded(!isExpanded);
              }}
              to="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                setIsExpanded(!isExpanded);
              }}
              to="/locations"
            >
              Locations
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                setIsExpanded(!isExpanded);
              }}
              to="/careers"
            >
              Careers
            </Link>
          </li>
        </ul>
        <Link to='/'>
          <Button
            onClick={() => {
              setIsExpanded(!isExpanded);
            }}
            className="mb-6"
          >
            Get Scootin
          </Button>
        </Link>
      </div>
    </nav>
  );
}
