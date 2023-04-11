//   Write Your Code Here
const Welcome = (props) => {
  const { name, greeting } = props;

  return (
    <>
      <p>hi army</p>
      <h1>
        {greeting}, {name}
      </h1>
    </>
  );
};

const Message = () => (
  <>
    <Welcome name="RM" greeting="Hello" />
    <Welcome name="Lekhya" greeting="Hi" />
  </>
);

ReactDOM.render(<Message />, document.getElementById("root"));
