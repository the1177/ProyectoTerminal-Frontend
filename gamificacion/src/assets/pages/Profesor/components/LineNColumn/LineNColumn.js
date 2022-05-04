import react from 'react';
import ReactApexChart from 'react-apexcharts';


export default function LineNColumn(){
    const series= [{
        name: 'Participación del grupo',
        type: 'column',
        data: [27, 28, 12, 17, 42, 20, 17, 30, 15, 18, 10, 16]
      }, {
        name: 'Participación total',
        type: 'line',
        data: [29, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
      }]
      const options= {
        chart: {
          height: 350,
          type: 'line',
        },
        stroke: {
          width: [0, 4]
        },
        title: {
          text: ''
        },
        dataLabels: {
          enabled: true,
          enabledOnSeries: [1]
        },
        labels: ['actividad 1', 'Actividad 2', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'],
        xaxis: {
          type: 'datetime'
        },
        yaxis: [{
          title: {
            text: 'Paticipación del grupo',
          },
        
        }, {
          opposite: true,
          title: {
            text: ''
          }
        }]
      }
    return(
        <div>
            <h3>Participación del curso</h3>
            <ReactApexChart options={options} series={series} type="line" height={350} />
        </div>
        
    );
}