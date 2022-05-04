import react from 'react';
import './ZoomableTime.css'
import ReactApexChart from 'react-apexcharts';


export default function ZoomableTimeP(){
    const data =[{        
        name: 'series1',
        data: [20, 15, 18, 5, 2, 18, 1]},
        {name: 'series2',
        data: [11, 32, 45, 32, 34, 52, 41]}]

    const series = [{
        //ACTIVIDADES MAXIMAS
        name: 'Porcentaje de participación',
        data: [80, 65, 70, 50, 95, 40, 90],
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
          categories: ["2022-01-01", "2022-02-02", "2022-03-03", "2022-04-04", "2022-04-05", "2022-04-10", "2022-04-23"]

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
              Progreso del curso
            </h3>
          </div>
          <div className='Zoomable-container'>
            <ReactApexChart options={options} series={series} type="area" height={295} />
          </div>            
        </div>
    );
}