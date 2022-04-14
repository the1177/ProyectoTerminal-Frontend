import React from "react";
import { RadialBarChart, RadialBar } from 'recharts';
import './Radial.css';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import { IgrLegend, IgrDataChart, IgrNumericXAxis, IgrNumericYAxis, IgrScatterLineSeries } from 'igniteui-react-charts';

    
export default function Radial(){
        // Sample data
        const data = [
            {name:'A', x:1,fill:"green"},
            {name:'B', x:2, fill:"yellow"},
            {name:'C', x:3, fill:"aqua"},
            {name:'D', x:4, fill: "blue"},
            {name:'E', x:5, fill:"orange"},
            {name:'F', x:6, fill:"red"},
            {name:'G', x:7, fill:"black"},
            {name:'H', x:8, fill:"purple"},
            {name:'I', x:9, fill:"gray"},
          ];
            

    return(
        <div className="Dispersion-Js">
            <ScatterChart width={300} height={300}>
                <CartesianGrid />
                <XAxis title="Trabajos" type="number" dataKey="x" />
                <YAxis type="number" dataKey="y" />
                <Scatter data={data} fill="blue" />
            </ScatterChart>
        </div>
    );
}