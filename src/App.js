
import './App.css';

import {useState} from "react";

function App() {
const [InputValue,setInputValue]=useState("");
const [Task,setTask]=useState([]);

const UpdateInputValue=(e)=>{
  
  setInputValue(e.target.value);
}

const UpdateTask=()=>{
  setInputValue("");
  setTask([...Task,{name:InputValue, id:Task.length+1, Complete:false}]);
}

  return (
    <div className="App">
      <input onChange={UpdateInputValue} type="text" value={InputValue} placeholder="Type Todo...." />
      <button onClick={UpdateTask} >Add</button>

      <DisplayTask Task={Task} setTask={setTask}/>
    </div>
  );
}
const DisplayTask=({Task,setTask})=>{

  const DeleteTask=(id)=>{
        let NewTask=Task.filter((name)=>name.id!=id);

        setTask(NewTask)
  }

  const UpdateCompletion= (id)=>{
    let NewTask=Task.map((name)=>{
        if(name.id===id){
          name.Complete ? name.Complete=false : name.Complete=true
        }

        return name;
    });

      setTask(NewTask)
  }


  return (
    Task.map((name,key)=>{
      return(
        <div>
        <h1 Key={key}>{name.name}</h1>
        <button onClick={()=>DeleteTask(name.id)} >Delete</button>
        <button onClick={()=>UpdateCompletion(name.id)} style={{backgroundColor: name.Complete? "#d9ff85" : "#ff7e71"}}>Completed</button>
        </div>
      )
    })
  )
}

export default App;
