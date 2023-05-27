import { TrafficLight } from "./components";
import "./App.css";

function App() {
  return (
    <div className="App">
      <TrafficLight whichIsActive={0} />
      <TrafficLight whichIsActive={2} />
    </div>
  );
}

export default App;
