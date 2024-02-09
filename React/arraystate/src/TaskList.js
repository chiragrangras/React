import React, { useState } from "react"

function TaskList({confusion,onchangeTodo,ondeleteTodo}){
    return(

        <div >
            {confusion.map((v)=>{
                return(<>
                    <li>
                        {/* {v.name} */}

                        <Task
                            todo={v}
                        />
                    </li>
                </>)
            })}
        </div>
    )
}

function Task({todo,onchange,ondelete})
{
    // console.log(todo)
    let [edit,setEdit] = useState(false);
    let content;

    if(edit)
    {
        content = 
        <>
        <input type="text" value={todo.name} onChange={(e)=>{
            onchange({
                name:e.target.value
            })
            }}/>
            <button>Save</button>
        </>
    }
    else
    {
        content =
        <>
        {todo.name}
        <button onClick={()=>{setEdit(true)}}>Edit</button>
        </>
    }

    return(
        <>
        
        {content}
        <button onClick={()=>{ondelete(todo.id)}}>Delete</button>
        </>
    )
}

export default TaskList