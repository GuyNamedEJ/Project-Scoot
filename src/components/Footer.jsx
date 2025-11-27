import { Link } from "react-router-dom";
import Facebook from '../assets/icons/facebook.svg'
import Instagram from '../assets/icons/instagram.svg'
import Twitter from '../assets/icons/twitter.svg'
import Logo from '../assets/logo-white.svg'
export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center bg-footer h-[438px]">
    <Link className="mb-11"
            onClick={() => {
              setIsExpanded(false);
            }}
            to="/"
          >
            <img
              className="w-[75.5px] md:w-[107px]"
              src={Logo}
              alt="Scoot Logo"
            />
          </Link>
      <ul className="mb-20 font-space text-center text-dim-grey flex gap-6 flex-col text-lg md:flex-row">
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/locations">Locations</Link>
        </li>
        <li>
          <Link to="/careers">Careers</Link>
        </li>

        <li>
          <Link to="/careers">Contact</Link>
        </li>

        <li>
          <Link to="/careers">Media Gallery</Link>
        </li>
      </ul>
      <ul className="flex gap-6 ">
        <li><img src={Facebook} alt="" /></li>
        <li><img src={Twitter} alt="" /></li>
        <li><img src={Instagram} alt="" /></li>
      </ul>
    </footer>
  );
}
