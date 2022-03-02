import "./chart.css";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Chart({ title, dataKey, grid }) {
  title= 'Insignias Ganadas';
    const data = [
        {
          name: 'Mes 1',
         pv: 20,
          amt: 2400,
        },
        {
          name: 'Mes 2',
         pv: 5,
          amt: 2210,
        },
        {
          name: 'mes 3',
         pv: 20,
          amt: 2290,
        },
        {
          name: 'mes 4',
         pv: 15,
          amt: 2000,
        },
        {
          name: 'mes 5',
         pv: 1,
          amt: 2181,
        },
        {
          name: 'mes 6',
         pv: 4,
          amt: 2500,
        },
        {
          name: 'mes 7',
         pv: 8,
          amt: 2100,
        },
      ];
  return (
      
    <div className="chart">
      <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer width="90%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#5550bd" />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Tooltip />
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}