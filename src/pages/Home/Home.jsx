import BeerBoxOption from "../../components/BeerBoxOption/BeerBoxOption";
import "./Home.css";
import biersammlung from "../../assets/pictures/biersammlung.jpg";
import bierreihe from "../../assets/pictures/bierreihe.jpg";
import { Link } from "react-router-dom";
import { StartPageContext } from "../../Context/Context";
import { useContext } from "react";
import { useEffect } from "react";

const Home = () => {
  // Wir verbinden nun useContext mit StartPageContext(Name frei wählbar)
  const { siteLoaded, setSiteLoaded } = useContext(StartPageContext);

  console.log(siteLoaded);

  useEffect(() => {
    setTimeout(() => setSiteLoaded("-off"), 4580);
    console.log(siteLoaded);
  }, []);

  return (
    <>
      <section className="start-page">
        <div className={`modal-splash-screen${siteLoaded}`}></div>
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
