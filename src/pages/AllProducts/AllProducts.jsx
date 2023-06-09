import Header from "../../components/Header/Header";
import ProductBox from "../../components/ProductBox/ProductBox";
import "./AllProducts.css";
import { useState, useEffect } from "react";

const AllProducts = () => {
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    fetch("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => response.json())
      .then((allProductItems) => {
        setAllData(allProductItems);
      })
      .catch((error) => {
        console.log("Fehler beim laden", error);
      });
  }, []);
  return (
    <>
      <div className="product-itemlist-container">
        {allData ? (
          <section>
            {allData.map((item, index) => (
              <ProductBox
                key={index}
                productname={item.name}
                subtitle={item.tagline}
                created={item.contributed_by}
                img={item.image_url}
                btnname={"Details"}
                uniqueid={item._id}
              ></ProductBox>
            ))}
          </section>
        ) : (
          <p>Daten werden geladen ...</p>
        )}
      </div>
      <Header />
    </>
  );
};

export default AllProducts;
