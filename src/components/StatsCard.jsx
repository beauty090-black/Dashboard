import ProgressCircle from "./ProgressCircle";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const data = [
  { name: "Mon", value: 20 },
  { name: "Tue", value: 40 },
  { name: "Wed", value: 35 },
  { name: "Thu", value: 55 },
  { name: "Fri", value: 75 },
];

export default function StatsCard() {
  return (
    <div className="stats-card">
      <h3 className="section-title">Statistic</h3>

      <div style={{ display:"flex", justifyContent:"center", marginTop:20 }}>
        <ProgressCircle value={75} />
      </div>

      <p style={{ textAlign:"center", marginTop:10 }}>
        Good Morning Jason 🔥
      </p>

      <div style={{ width: "100%", height: 150, marginTop: 20 }}>
        <ResponsiveContainer>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#4f46e5" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
