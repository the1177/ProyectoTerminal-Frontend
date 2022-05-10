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
    
export default function BarrasS(props){
    //JSON HACER AQUI EL REQUEST DE LOS DATOS A LA BASE DE DATOS
    // console.log(props.dat)

    console.log(props)

        const data={
           labels:props.label,
           datasets:[{
                label:'Actividad',
                backgroundColor:'#AB7BFF',
                borderColor: 'black',
                borderwidth:1,
                hoverBackGroundColor:'#AB7BFF',
                hoverBorderColor:'#AB7BFF',
                data:props.dat
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
        <div className="BarrasS"   >
            <Bar data={data} options={opciones} /> 
        </div>
    );
}