import react from 'react';
import ReactApexChart from 'react-apexcharts';


export default function DisColumn(){
      const series= [{
        data: [21, 22, 10, 28, 16, 21, 13, 30]
      }]
      const options= {
        chart: {
          height: 350,
          type: 'bar',
          events: {
            click: function(chart, w, e) {
              // console.log(chart, w, e)
            }
          }
        },
        colors: red,
        plotOptions: {
          bar: {
            columnWidth: '45%',
            distributed: true,
          }
        },
        dataLabels: {
          enabled: false
        },
        legend: {
          show: false
        },
        xaxis: {
          categories: [
            ['John', 'Doe'],
            ['Joe', 'Smith'],
            ['Jake', 'Williams'],
            'Amber',
            ['Peter', 'Brown'],
            ['Mary', 'Evans'],
            ['David', 'Wilson'],
            ['Lily', 'Roberts'], 
          ],
          labels: {
            style: {
              colors: red,
              fontSize: '12px'
            }
          }
        }
      }
    return(
        <ReactApexChart options={options} series={series} type="bar" height={350} />
   
    );
}