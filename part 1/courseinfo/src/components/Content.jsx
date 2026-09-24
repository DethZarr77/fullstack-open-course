import Part from "./Part";

const Content = (props) => {
  console.log("Content props", props);
  return (
    <div>
      <Part part={props.parts.parts[0].name} exercises={props.parts.parts[0].exercises} />
      <Part part={props.parts.parts[1].name} exercises={props.parts.parts[1].exercises} />
      <Part part={props.parts.parts[2].name} exercises={props.parts.parts[2].exercises} />
    </div>
  );
};

export default Content;
