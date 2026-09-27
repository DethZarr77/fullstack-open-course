import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

const Course = (props) => {
    console.log("Course props");
    console.log(props);
    
    
  return (
    <div>
      <Header course={props.course} />
      <Content course={props.course}/>
      <Total course={props.course} />
    </div>
  );
};

export default Course;
