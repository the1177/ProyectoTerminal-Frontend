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
        data:[80,90,60,49,100,10,56,97,90]

    }
 
        const data={
           labels:dat.label,
           datasets:[{
                label:'Actividades',
                backgroundColor:'#16A6C2',
                borderColor: 'black',
                borderwidth:1,
                hoverBackGroundColor:'#16C299',
                hoverBorderColor:'#16C299',
                data:dat.data
            }]
        }
        const opciones={
            mainTainAspectRatio: false,
            responsive:true,      
            title: {
                text: 'h',
                align: 'left'
              },
        }

    return(
        <div className="Barras-conte"   >
            <h5>Participación del curso</h5>
            <Bar data={data} options={opciones} /> 
        </div>
    );
}