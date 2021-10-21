import React from 'react';
import ReactApexChart from 'react-apexcharts';

function PiChart() {

   const series =  [30, 60, 40, 50, 20],
            options = {
              chart: {
                type: 'donut',
              },
              responsive: [{
                breakpoint: 480,
                options: {
                  chart: {
                    width: 200
                  },
                  legend: {
                    position: 'top'
                  }
                }
              }]
            }
    return (
        <div>
            <ReactApexChart options={options} series={series} type="donut" height={500} width={700} />
        </div>
    )
}

export default PiChart
