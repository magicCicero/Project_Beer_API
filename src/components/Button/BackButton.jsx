import "./BackButton.css";
import backimg from "../../assets/pictures/Back.png";
import { Link } from "react-router-dom";

const BackButton = () => {
  return (
    <>
      <Link to="/allproducts">
        <div
          className="back-btn-container"
          style={{ backgroundImage: `url(${backimg})` }}
        ></div>
      </Link>
    </>
  );
};

export default BackButton;
