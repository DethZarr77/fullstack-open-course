
const Total = (props) => {
    console.log('Total props', props);
    return (
        <p>Number of exercises {props.parts.parts.reduce((acc, curr) => acc + curr.exercises, 0) }</p>
    )
}

export default Total;