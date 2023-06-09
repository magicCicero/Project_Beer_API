import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "./ProductBox.css";

const ProductBox = (props) => {
  return (
    <>
      <article className="product-item ">
        <div
          className="img-divider"
          style={{ backgroundImage: `url(${props.img})` }}
        ></div>
        <div className="product-details-divider">
          <h2>{props.productname}</h2>
          <h3>{props.subtitle}</h3>
          <p>Created by {props.created}</p>

          <Link to={`/product/${props.uniqueid}`}>
            <Button uniqueid={props.uniqueid} btnname={props.btnname} />
          </Link>
        </div>
      </article>
    </>
  );
};

export default ProductBox;
