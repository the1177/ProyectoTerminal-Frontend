import react from 'react';
import './ZoomableTime.css'
import ReactApexChart from 'react-apexcharts';


export default function ZoomableTime(){
    const data =[{        
        name: 'series1',
        data: [20, 15, 18, 5, 2, 18, 1]},
        {name: 'series2',
        data: [11, 32, 45, 32, 34, 52, 41]}]

    const series = [{
        //ACTIVIDADES MAXIMAS
        name: 'Numero de actividades',
        data: [20, 15, 18, 5, 2, 18, 1],
      }, {
          //ACTIVIDADES DEL ALUMNO
        name: 'Actividades',
        data: [19, 12, 8, 1, 2, 18, 1]
      }];

    const  options= {
        chart: {
          height: 350,
          type: 'area'
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          type: 'datetime',
        //categories: ["2022-04-01T00:00:00.000Z", "2022-04-02T01:30:00.000Z", "2022-04-03T02:30:00.000Z", "2022-04-04T03:30:00.000Z", "2022-04-05T04:30:00.000Z", "2022-04-06T05:30:00.000Z", "2022-04-07T06:30:00.000Z"]
          categories: ["2022-01-01", "2022-04-02", "2022-04-03", "2022-04-04", "2022-04-05", "2022-04-06", "2022-04-07"]

        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          },
        }
    }
    return(
        <div>
          <div>
            <h3>
              Actividades
            </h3>
          </div>
          <div className='Zoomable-container'>
            <ReactApexChart options={options} series={series} type="area" height={295} />
          </div>            
        </div>
    );
}