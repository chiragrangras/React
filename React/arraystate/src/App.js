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

  let handleChange =(nextTodo)=>{
    // console.log(nextTodo)

    setTodos(
      todos.map((todo)=>{

        if(todo.id === nextTodo.id)
        {
          return nextTodo;
        }
        else
        {
          return todo;
        }
  
      })
    )
  }

  let handleDelete = (todoId)=>{

    setTodos(todos.filter((v)=>{
      return v.id!==todoId;
    }))
  }

  return (
    <div className='App'>
      <AddTodo onAdd={handleAdd}/>
      <TaskList confusion={todos} onchangeTodo={handleChange} ondeleteTodo={handleDelete}/>
    </div>
  );
}

export default App;
