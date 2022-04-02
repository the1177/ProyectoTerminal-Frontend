import "./chart.css";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  YAxis,
} from "recharts";

export default function Chart({ title, dataKey, grid }) {
  title= 'Actividades Realizadas';
    const data = [
        {
          name: 'Mes 1',
          Actividades: 5,
          amt: 2400,
        },
        {
          name: 'Mes 2',
          Actividades: 3,
          amt: 2210,
        },
        {
          name: 'mes 3',
          Actividades: 6,
          amt: 2290,
        },
        {
          name: 'mes 4',
          Actividades: 10,
          amt: 2000,
        },
        {
          name: 'mes 5',
          Actividades: 1,
          amt: 2181,
        },
        {
          name: 'mes 6',
          Actividades: 4,
          amt: 2500,
        },
        {
          name: 'mes 7',
          Actividades: 8,
          amt: 2100,
        },
      ];
  return (
      
    <div className="chart">
      <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer width="100%" aspect={3.5 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#5550bd" />
          <YAxis dataKey='Actividades' troke="#8884d8" />
            <Line type="monotone" dataKey="Actividades" stroke="#8884d8" activeDot={{ r: 9 }} />
          <Tooltip />
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="6 6" />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}