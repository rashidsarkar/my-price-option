import "./App.css";
import DaisyNav from "./Components/DaisyNav/DaisyNav";
import LineChart from "./Components/LineChart/LineChart";
import NavBar from "./Components/NavBar/NavBar";
import PriceOption from "./Components/PriceOption/PriceOption";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <PriceOption></PriceOption>
      <LineChart></LineChart>
    </>
  );
}

export default App;
