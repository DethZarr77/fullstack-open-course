const Button = (props) => {
  console.log("Button props", props);

  return <button onClick={props.onClick}>{props.text}</button>;
};

export default Button;
