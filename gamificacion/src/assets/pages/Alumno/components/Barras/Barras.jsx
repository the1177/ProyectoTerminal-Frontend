import React from "react";
import { ScatterChart, Scatter, XAxis, 
    YAxis, CartesianGrid,Line,  LineChart,
    Tooltip,
    ResponsiveContainer,
    } from 'recharts';
    import './Barras.css'
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import { IgrLegend, IgrDataChart, IgrNumericXAxis, IgrNumericYAxis, IgrScatterLineSeries } from 'igniteui-react-charts';
import { Bar } from 'react-chartjs-2';
import { width } from "@mui/system";
    
export default function Barras(){
    //JSON HACER AQUI EL REQUEST DE LOS DATOS A LA BASE DE DATOS
    const dat={
        label:['Actividad 1','Actividad 2','Actividad 3','Actividad 4','Actividad 5','Actividad 6','Actividad 7','Actividad 8','Actividad 9','Actividad 10','Actividad 11'],
        data:[80,90,60,49,100,10,0,97]

    }
 
        const data={
           // labels:['Actividad 1','Actividad 2','Actividad 3','Actividad 4','Actividad 5','Actividad 6','Actividad 7','Actividad 8','Actividad 9','Actividad 10','Actividad 11'],
           labels:dat.label,
           datasets:[{
                label:['Actividades'],
                backgroundColor:'RGBA(6,178,195,1)',
                borderColor: 'black',
                borderwidth:1,
                hoverBackGroundColor:'#0073ff',
                hoverBorderColor:'#FF0000',
                data:dat.data
            }]
        }
        const opciones={
            mainTainAspectRatio: false,
            responsive:true
        }

    return(
        <div className="Barras-contenedor"   >
            <Bar data={data} optiones={opciones} /> 
        </div>
    );
}