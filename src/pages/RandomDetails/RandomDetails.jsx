import Header from "../../components/Header/Header";
import ProductDescription from "../../components/ProductDescription/ProductDescription";
import "./RandomDetails.css";
import { useEffect, useState } from "react";

const RandomDetails = () => {
  const [randomData, setRandomData] = useState([]);

  useEffect(() => {
    fetch("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((response) => response.json())
      .then((randomProduct) => {
        console.log(randomData);
        setRandomData(randomProduct);
        console.log(randomProduct);
        console.log(randomData);
      })
      .catch((error) => {
        console.log("Fehler beim laden", error);
      });
  }, []);
  return (
    <>
      <ProductDescription
        img={randomData.image_url}
        productname={randomData.name}
        subtitle={randomData.tagline}
        description={randomData.description}
        firstBrewed={randomData.first_brewed}
        attenuation={randomData.attenuation_level}
        contributed={randomData.contributed_by}
      />
      <Header />
    </>
  );
};

export default RandomDetails;
