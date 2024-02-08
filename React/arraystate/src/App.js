
import { useState } from 'react';
import AddTodo from './AddTodo';
import './App.css';

let nextId = 3;
let intialTodos = [
  {
    "name":"Chirag",
    "id" : 1
  },
  {
    "name":"Vishal",
    "id" : 2
  }
];

function App() {

  const [todos,setTodos] = useState(intialTodos)

  let handleAdd = (x) => {
    
    console.log(x)
    
    // setTodos([
    //   {
    //     "name": x,
    //     "id": nextId++
    //   }
    // ])

  }
  
  return (
    <div className="App">
      <AddTodo onAdd={handleAdd}/>
    </div>
  );
}

export default App;
