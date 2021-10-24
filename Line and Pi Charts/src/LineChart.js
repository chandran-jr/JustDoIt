import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';

function LineChart({x,y}) {

  const [xaxis,setXaxis] = useState([7,39, 32, 57, 49, 65, 78, 102, 160]);
  const [yaxis,setYaxis] = useState(['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']);

  useEffect(() => {
    if(x === "Time"){
      setXaxis([10,20,30,40,50,60,80,90])
    }
    if(x === "Speed"){
      setXaxis([50, 51, 35, 11, 49, 62, 69, 91, 148])
   }
   if(x === "Distance"){
     setXaxis([10, 40, 25, 51, 45, 67, 72, 91, 141])
   }
 
   if(yaxis === "Speed"){
     setYaxis([50, 51, 35, 11, 49, 62, 69, 91, 148])
   }
   if(yaxis === "Distance"){
    setYaxis([10, 40, 25, 51, 45, 67, 72, 91, 141])
  }
  if(yaxis === "Time"){
    setYaxis([10,20,30,40,50,60,80,90])
  }
 
   }, [xaxis,yaxis,x,y]); 
  
  
  const series= [{
        name: "Distance",
        data: xaxis
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
          colors: ['red', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5
        },
      },
      xaxis: {
        categories: yaxis,
      }
    }

  return (
    <div className="LineCharts">
      <ReactApexChart options={options} series={series} type="line" height={500} width={700}/>
    </div>
  );
}

export default LineChart;
