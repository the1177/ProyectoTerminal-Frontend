import ReactApexChart from 'react-apexcharts';


export default function BoxPlotC(){
    const series= [
        {
          type: 'boxPlot',
          data: [
            {
              x: 'Actividad 1',
              y: [54, 66, 69, 75, 88]
            },
            {
              x: 'Actividad 2',
              y: [43, 65, 69, 76, 81]
            },
            {
              x: 'Actividad 3',
              y: [31, 39, 45, 51, 59]
            },
            {
              x: 'Actividad 4',
              y: [39, 46, 55, 65, 71]
            },
            {
              x: 'Actividad 5',
              y: [29, 31, 35, 39, 44]
            },
            {
              x: 'Actividad 6',
              y: [41, 49, 58, 61, 67]
            },
            {
              x: 'Actividad 7',
              y: [54, 59, 66, 71, 88]
            }
          ]
        }
    ]

   const options= {
      chart: {
        type: 'boxPlot',
        height: 350
      },
      // title: {
      //   text: 'Actividades',
      //   align: 'left'
      // },
      plotOptions: {
        boxPlot: {
          colors: {
            upper: '#18EAFF',
            lower: '#186FFF'
          }
        }
      }
    }
    return(
      <div>
        <h4>Actividades</h4>
        <ReactApexChart options={options} series={series} type="boxPlot" height={350} />    
      </div>
        
    );
}