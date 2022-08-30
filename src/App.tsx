import {FC, useState} from 'react';
import './App.css';
import Card from './Components/Card';
import {ITask} from './Interfaces';

const App: FC = () => {

  const [title,setTitle] = useState<string>("")
  const [desc,setDesc] = useState<string>("")
  const [days,setDays] = useState<number>(0)
  const [todo,setTodo] = useState<ITask[]>([])


  const Submit = ():void => {
    if(title!==""){
    const newTask = {title: title, description: desc, days:days}
    setTodo([...todo, newTask]);
    setTitle("");
    setDesc("");
    setDays(0);
    }
    else {
      alert("Please Enter Title");
    }
  }

  const completeTask = (taskNameToDelete: string): void => {
    setTodo(
      todo.filter((task) => {
        return task.title !== taskNameToDelete;
      })
    );
  }

  

  return (
    <div className="App">

      <div className="Header">
        <h2>JustDoIt</h2>
      </div>

      <div className="InputBox">

        <div className="Input">
        <input required onChange={(e) => setTitle(e.target.value)} value={title} type="text" className="InputTag" placeholder="Title"/>
        </div>

        <div className="Input">
        <input onChange={(e) => setDesc(e.target.value)} value={desc} type="text" className="InputTag" placeholder="Description"/>
        </div>

        <div className="Input">
        <input required onChange={(e) => setDays(Number(e.target.value))} value={days} type="number" className="InputTag" placeholder="Days"/>
        </div>

      </div>

      <button onClick={Submit} className="Button"type="submit">Add Task</button>



      <div className="TaskCards">
        {todo.map((task:ITask, key:number) => {
          return <Card key={key} title={task.title} description={task.description} days={task.days} completeTask={completeTask}/>
        })}
      </div>

    </div>
  );
}

export default App;
