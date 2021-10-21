import React, { useState } from 'react';
import DragDrop from './DragDrop.js';
import LineChart from './LineChart.js';
import PiChart from './PiChart.js';
import { Select, MenuItem, FormControl, InputLabel} from '@material-ui/core';
import './App.css';


function App() {

 const [chart,setChart] = useState(<LineChart/>);
 const [option,setOption] = useState();


 const changeFunc = (e) => {
  setOption(e.target.value);
  console.log(option);

  if(option===20) {
    setChart(<LineChart/>);
  }
  else {
    setChart(<PiChart/>);
  }
 }


  return (
    <div className="App">

    <div className="sidebar">
        <h2>CHARTS</h2>

      <div className="drop">
      <FormControl>
    <InputLabel>Charts</InputLabel>
    <Select onChange={changeFunc} style={{ width: 200 }}>
    <MenuItem value={10}>Line Chart</MenuItem>
    <MenuItem value={20}>Pi Chart</MenuItem>
    </Select>
    </FormControl>
      </div>

    </div>

<div className="rest">

    <div className="dragdrop">
        <DragDrop/>
    </div>

        <div className="chart">
         {chart}
        </div>

    </div>

    </div>

  );
}

export default App;
