import Part from "./Part";

const Content = ({ course }) => {
  // console.log("Content props", props);
  return (
    <div>
      {course.parts.map((part) => (
        <Part key={part.id} part={part.name} exercises={part.exercises} />
      ))}
    </div>
  );
};

export default Content;
