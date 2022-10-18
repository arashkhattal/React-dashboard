import Appbar from "./components/Appbar";
import Sidebar from "./components/Sidebar";
import Cards from "./components/Cards";
import Tablecom from "./components/Tablecom";
import LineChart from "./components/LineChart";
import DoughnutChart from "./components/BarChart";

function App() {
  return (
    <div>
      <Appbar />
      <Sidebar />
      <Cards />
      <Tablecom />
      <div className="App">
        <div className="chart">
          <LineChart />
        </div>
        <p className="chart-head">Modern Analytics</p>
      </div>
      <div className="dchart">
        <DoughnutChart />
      </div>
    </div>
  );
}

export default App;
