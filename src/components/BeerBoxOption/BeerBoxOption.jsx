import "./BeerBoxOption.css";
const BeerBoxOption = (props) => {
  return (
    <>
      <div
        className="beer-box-container"
        style={{ backgroundImage: `url(${props.imageUrl})` }}
      >
        <h2>{props.title}</h2>
      </div>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet sequi
        iusto iste sint illum earum, non assumenda quae ab odio. Sequi magnam
        harum consequuntur labore minima distinctio eos sapiente assumenda.
      </p>
    </>
  );
};

export default BeerBoxOption;
