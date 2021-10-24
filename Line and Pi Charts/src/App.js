import React, { useState } from 'react';
import LineChart from './LineChart.js';
import PiChart from './PiChart.js';
import Example from './Example'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { Select, MenuItem, FormControl, InputLabel} from '@material-ui/core';
import './App.css';


function App() {

 const [chart,setChart] = useState(<LineChart/>);
 const [option,setOption] = useState();


 const changeFunc = (e) => {
  setOption(e.target.value);
  console.log(option);

  if(option===20) {
    setChart(<LineChart x={[7,39, 32, 57, 49, 65, 78, 102, 160]} y={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']} />);
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
    <InputLabel>Line Chart</InputLabel>
    <Select onChange={changeFunc} style={{ width: 200 }}>
    <MenuItem value={10}>Line Chart</MenuItem>
    <MenuItem value={20}>Pi Chart</MenuItem>
    </Select>
    </FormControl>
      </div>
    </div>

<div className="rest">

      <div>
				<DndProvider backend={HTML5Backend}>
					<Example />
				</DndProvider>
			</div>

        <div className="chart">
         {chart}
        </div>

    </div>

    </div>

  );
}

export default App;
