import React, { useState } from "react";

function TaskList({ confusion, onchangeTodo, ondeleteTodo }) {
  return (
    <div>
        {confusion.map((v)=>(
            <div key={v.id}>
                <li>
                    <Task

                    todo={v}
                    onchange={onchangeTodo}
                    ondelete={ondeleteTodo}
                    />
                </li>
            </div>
        ))}
    </div>
  )
}

function Task({ todo, onchange, ondelete }) {
//   console.log(todo)
  let [edit, setEdit] = useState(false);
  let content;

  if (edit) {
    content = 
    <>
        <input
          type="text"
          value={todo.name}
          onChange={(e) => {
            onchange({
              ...todo,
              "name": e.target.value
            })
          }}/>
        <button onClick={()=>{setEdit(false)}}>Save</button>
    </>
    } 
    else 
    {
        content = <>
            {todo.name}
            <button onClick={() => {setEdit(true)}}>Edit</button>
        </>
  }

  return (
    <>
      {content}
      <button onClick={() => {ondelete(todo.id)}}>Delete</button>
    </>
  )
}

export default TaskList