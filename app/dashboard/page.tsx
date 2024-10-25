import LineChart from "./line-chart";

function BarChart() {
  return <h1>Bar Chart</h1>;
}
export default function Dashboard() {
  return (
    <div>
      <h1>Hello from dashboard</h1>
      <BarChart />
      <LineChart />
    </div>
  );
}
