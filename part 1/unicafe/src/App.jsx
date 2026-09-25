import { useState } from "react";
import Button from "./components/Button";
import Statistics from "./components/Statistics";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [score, setScore] = useState(0);

  const updateFeedback = (feedbackType) => () => {
    switch (feedbackType) {
      case "good":
        setGood(good + 1);
        setScore(score + 1);
        break;
      case "neutral":
        setNeutral(neutral + 1);
        // neutral is 0, no need to adjust `score`
        break;
      case "bad":
        setBad(bad + 1);
        setScore(score - 1);
        break;
      default:
        console.log("Default case, nothing here");
    }
  };

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button onClick={updateFeedback("good")} text={"Good"} />
      <Button onClick={updateFeedback("neutral")} text={"Neutral"} />
      <Button onClick={updateFeedback("bad")} text={"Bad"} />

      <Statistics good={good} neutral={neutral} bad={bad} score={score} />
    </div>
  );
};

export default App;
