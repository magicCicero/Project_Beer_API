import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/pictures/Logo.png";

const Header = () => {
  return (
    <>
      <nav>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </nav>
    </>
  );
};

export default Header;
