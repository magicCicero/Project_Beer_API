import Header from "../../components/Header/Header";
import "./ProductDetails.css";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ProductDescription from "../../components/ProductDescription/ProductDescription";
import BackButton from "../../components/Button/BackButton";

const ProductDetails = () => {
  const productId = useParams();
  const [productItem, setProductItem] = useState([]);

  useEffect(() => {
    fetch(`https://ih-beers-api2.herokuapp.com/beers/${productId.beerid}`)
      .then((response) => response.json())
      .then((productItemData) => {
        console.log(productItemData);
        setProductItem(productItemData);
        console.log(productItem);
      })
      .catch((error) => {
        console.log("Fehler beim laden", error);
      });
  }, []);
  return (
    <>
      <ProductDescription
        img={productItem.image_url}
        productname={productItem.name}
        subtitle={productItem.tagline}
        description={productItem.description}
        firstBrewed={productItem.first_brewed}
        attenuation={productItem.attenuation_level}
        contributed={productItem.contributed_by}
      />
      <BackButton />
      <Header />
    </>
  );
};

export default ProductDetails;
