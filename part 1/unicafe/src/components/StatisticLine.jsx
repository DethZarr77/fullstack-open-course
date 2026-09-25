const StatisticLine = (props) => {
  //   console.log("StatisticLine props", props);
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  );
};

export default StatisticLine;
