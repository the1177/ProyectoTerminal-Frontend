import React from "react";
import ReactApexChart from 'react-apexcharts';

export default function BarChart(){
    const series= [{
        data: [15, 30, 10, 30, 40]
      }]
     const options= {
        chart: {
          type: 'bar',
          height: 350
        },
        plotOptions: {
          bar: {
            borderRadius: 4,
            horizontal: true,
          }
        },
        dataLabels: {
          enabled: false
        },
        xaxis: {
          categories: ['Edrey Hernandez', 'Aimee Gutierrez', 'Jacob Elias', 'Jose', 'Pablo'
          ],
        }
      }
    return(
        <div>
            <h4>Insignias por alumno</h4>
            <ReactApexChart options={options} series={series} type="bar" height={350} />
            </div>
    )
}