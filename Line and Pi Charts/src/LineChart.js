import React from 'react';
import ReactApexChart from 'react-apexcharts';

function LineChart() {

   const series= [{
        name: "Distance",
        data: [10,23,30,48,44,70,88,89,112,105,148,154]
    }],
    options= {
      chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight'
      },
      title: {
        text: 'Distance over Time',
        align: 'center'
      },
      grid: {
        row: {
          colors: ['lavender', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5
        },
      },
      xaxis: {
        categories: ['0', '1', '2', '3', '4', '5', '6', '7', '8','9', '10', '11'],
      }
    }

  return (
    <div className="LineCharts">
      <ReactApexChart options={options} series={series} type="line" height={525} width={750}/>
    </div>
  );
}

export default LineChart;
