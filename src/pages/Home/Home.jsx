import BeerBoxOption from "../../components/BeerBoxOption/BeerBoxOption";
import "./Home.css";
import biersammlung from "../../assets/pictures/biersammlung.jpg";
import bierreihe from "../../assets/pictures/bierreihe.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section className="start-page">
        <Link to="/allproducts">
          <BeerBoxOption title={"All Beers"} imageUrl={biersammlung} />
        </Link>
        <Link to="/randomproduct">
          <BeerBoxOption title={"Random Beer"} imageUrl={bierreihe} />
        </Link>
      </section>
    </>
  );
};

export default Home;
