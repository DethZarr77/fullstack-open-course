const Part = (props) => {
  console.log("Part props", props);
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  );
};

export default Part;
