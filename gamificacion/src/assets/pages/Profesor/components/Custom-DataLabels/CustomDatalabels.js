import React from "react";
import ReactApexChart from 'react-apexcharts';

export default function CustomDatalabels(props){
    const series= [{
        data: [400, 430, 448, 470, 540]
      }]
    const options= {
        chart: {
          type: 'bar',
          height: 380
        },
        plotOptions: {
          bar: {
            barHeight: '100%',
            distributed: true,
            horizontal: true,
            dataLabels: {
              position: 'bottom'
            },
          }
        },
        colors: [
          '#33b2df', '#546E7A', '#d4526e', '#13d8aa', '#A5978B', '#2b908f', '#f9a3a4', '#90ee7e', '#68F9D2', '#f48024', 
          '#69d2e7', '#FA3333', '#FA5E33', '#FA6733', '#FA8533',' #FAA033', '#FABB33', '#FAD633', '#FAF433', '#D0FA33',
          '#B5FA33', '#9AFA33', '#8EFA33', '#39FA33', '#33FA79', '#33FAB5', '#33FAF1', '#33BBFA', '#3385FA', '#3358FA',
          '#4F33FA', '#7033FA', '#9733FA', '#D033FA', '#FA33F1', '#FA33B8', '#FA3373', '#FA3336', '#D4D777', '#8ED777',
          '#D7A677', '#F99268', '#F9B368', '#F9E868', '#BEF968', '#68D2F9', '#6892F9', '#9B68F9', '#F9EE68', '#6894EC',
          '#B7C22F', '#2FC2B4', '#2F6BC2', '#722FC2', '#2FC241', '#C2812F', '#88DC81', '#81DCC0', '#81C6DC', '#8196DC'
         
        ],
        dataLabels: {
          enabled: true,
          textAnchor: 'start',
          style: {
            colors: ['#fff']
          },
          formatter: function (val, opt) {
            return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val
          },
          offsetX: 0,
          dropShadow: {
            enabled: true
          }
        },
        stroke: {
          width: 1,
          colors: ['#fff']
        },
        xaxis: {
          categories: ['Edrey Hernandez', 'Aimee', 'Jacob', 'David', 'John'
      ],
        },
        yaxis: {
          labels: {
            show: false
          }
        },
        title: {
            text: 'Puntajes obtenidos',
            align: 'center',
            floating: true
        },
        subtitle: {
            text: 'Alumnos',
            align: 'center',
        },
        tooltip: {
          theme: 'dark',
          x: {
            show: false
          },
          y: {
            title: {
              formatter: function () {
                return ''
              }
            }
          }
        }
      }
      return(
        <ReactApexChart options={options} series={series} type="bar" height={380} />           
      )
}