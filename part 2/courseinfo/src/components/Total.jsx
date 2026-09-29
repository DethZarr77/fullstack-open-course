
const Total = ({course}) => {

    const totalExcercises = course.parts.reduce((acc, curr) => acc + curr.exercises, 0);
    
    return (
        <p><strong>Total of {totalExcercises} exercises</strong></p>
    )
}

export default Total;