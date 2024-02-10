import { useState } from 'react';
import AddTodo from './AddTodo';
import './App.css';
import TaskList from './TaskList';

let nextId =3;
let intialTodos = [
  {
    name:'Sunil',
    id:1
  },
  {
    name:'Vishal',
    id:2
  }
]

function App() {

  let [todos,setTodos] = useState(intialTodos)
  let handleAdd =(x)=>{
     
    //console.log(x)

    setTodos([

      ...todos,
      {
        "name":x,
        "id":nextId++
      }
    ])
  }

  let handleChange =(x)=>{
    
    console.log(x)

    // setTodos([

    //   ...todos,
    //   {
    //     "name":x,
    //     "id":nextId++
    //   }
    // ])
  }

  return (
    <div className='App'>
      <AddTodo onAdd={handleAdd}/>
      <TaskList confusion={todos} onchangeTodo={handleChange}/>
    </div>
  );
}

export default App;
