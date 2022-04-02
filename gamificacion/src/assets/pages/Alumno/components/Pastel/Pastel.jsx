import React from 'react';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import './Pastel.css'


export default function Pastel(){
    const data ={
        labels: ['No realizadas','Por Realizar','Realizadas'],
        datasets:[{
            data:[13.40,10.30,75.40],
            backgroundColor: ['#EF280F','#024A86','#02AC66']
        }]
    }
    const opciones={
        responsive: true
    }
    return(
        <div className='pastel-Container'>
            <Pie data={data} options={opciones}/>
        </div>
    );
}