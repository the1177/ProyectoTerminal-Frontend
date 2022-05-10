import React from "react";
import { ScatterChart, Scatter, XAxis, 
    YAxis, CartesianGrid,Line,  LineChart,
    Tooltip,
    ResponsiveContainer,
    } from 'recharts';
import './Dispersion.css';
    
export default function Dispersion({grid}){
        // Sample data
        const data = [
            { x: 1, actividad:'actividad 1', y: 80 },
            { x: 2, actividad:'actividad 2' ,y: 90 },
            { x: 3, actividad:'actividad 3' ,y: 50 },
            { x: 4, actividad:'actividad 4' ,y: 23 },
            { x: 5, actividad:'actividad 5' ,y: 45 },
            { x: 6, actividad:'actividad 6' ,y: 25 },
            { x: 7, actividad:'actividad 7' ,y: 17 },
            { x: 8, actividad:'actividad 8' ,y: 32 },
            { x: 9, actividad:'actividad 9' ,y: 43 },
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