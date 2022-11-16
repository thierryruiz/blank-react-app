import "./styles.css";
import HelloWorld from "./HelloWorld";

const App = () => {
  const dude = "Dude";

  return (
    <div className="App">
      <h1>Simple basic Hello World App</h1>
      <h3>Using functionnal component</h3>
      <HelloWorld name={dude} />
    </div>
  );
};

export default App;
