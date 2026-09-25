import StatisticLine from "./StatisticLine";

const Statistics = (props) => {
  //   console.log("Statistics props", props);
  // Props
  const good = props.good;
  const neutral = props.neutral;
  const bad = props.bad;
  const score = props.score;

  // Derived values
  const total = good + neutral + bad;
  const averageScore = score > 0 ? score / total : 0;
  const positive = total > 0 ? (good / total) * 100 + "%" : "0%";

  return (
    <div>
      <h1>Statistics</h1>
      {total > 0 ? (
        <table>
          <tbody>
            <StatisticLine text={"Good"} value={good} />
            <StatisticLine text={"Neutral"} value={neutral} />
            <StatisticLine text={"Bad"} value={bad} />
            <StatisticLine text={"All"} value={total} />
            <StatisticLine text={"Average"} value={averageScore} />
            <StatisticLine text={"Positive"} value={positive} />
          </tbody>
        </table>
      ) : (
        <p>No feedback given</p>
      )}
    </div>
  );
};

export default Statistics;
