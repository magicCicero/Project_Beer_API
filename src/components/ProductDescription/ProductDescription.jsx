import "./ProductDescription.css";

const ProductDescription = (props) => {
  return (
    <>
      <div className="product-description-container">
        <div
          className="product-img-container"
          style={{ backgroundImage: `url(${props.img})` }}
        ></div>
        <h1 className="product-title">{props.productname}</h1>

        <h3 className="product-subtitle">{props.subtitle}</h3>
        <div className="product-details">
          <h4>First Brewed: </h4>
          <h4 className="product-brewed-at">{props.firstBrewed}</h4>
        </div>
        <div className="product-details">
          <h4>Attenuation Level: </h4>
          <h4 className="product-attenuation">{props.attenuation}</h4>
        </div>

        <p className="product-description">{props.description}</p>
        <p className="product-contributed">
          Contributed by {props.contributed}
        </p>
      </div>
    </>
  );
};

export default ProductDescription;
