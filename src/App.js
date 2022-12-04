import "./App.css";
import AreaCharts from "./Charts/AreaChart";
import LineCharts from "./Charts/LineCharts";
import BarCharts from "./Charts/BarCharts";

import BarChartExample from "./Charts/BarChartExample";

// import Records from "./records.json";

function App() {
  return (
    <div className="App">
      <LineCharts />
      <AreaCharts />
      <BarCharts />
      <BarChartExample />
    </div>
  );
}

export default App;
