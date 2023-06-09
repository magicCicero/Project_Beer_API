import Header from "../../components/Header/Header";
import "./ProductDetails.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductDescription from "../../components/ProductDescription/ProductDescription";

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
      <Header />
    </>
  );
};

export default ProductDetails;
