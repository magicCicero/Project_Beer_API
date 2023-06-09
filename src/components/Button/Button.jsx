import "./Button.css";

const Button = (props) => {
  return (
    <>
      <button className="btn">{props.btnname}</button>
    </>
  );
};

export default Button;
