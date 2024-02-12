
import { useState } from 'react';
import AddTodo from './Addtodo';
import './App.css';
import TaskList from './TaskList';

let initalTodos = [
  {
    "title": "Apple",
    id:1
  },
  {
    "title": "Mango",
    id:2
  },
  {
    "title": "Kiwi",
    id:3
  }
]

let nextID = 4;

function App() {

  let [todos,setTodos] = useState(initalTodos)
  let handleAdd = (title) => { // Value

    setTodos([
      ...todos,
      {
        "title": title,
        id:nextID++
      }
    ])

  }

  let handleChange = (nextTodo) => { // Object
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

  let handleDelete = (todoID) => { //id
    setTodos(
      todos.filter((todo)=>{
        return todo.id !== todoID
      })
    )
  }

  return (
    <div className="App">
      
      <>
      <AddTodo  onAdd={handleAdd}></AddTodo>  
      <TaskList
      todos={todos}
      onChangeTodo={handleChange}
      onDeleteTodo={handleDelete}

      ></TaskList>
      </>

    </div>
  );
}

export default App;
