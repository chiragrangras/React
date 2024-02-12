import { useState } from "react"

function TaskList({todos,onChangeTodo,onDeleteTodo}){
    return(
        <div>

            {todos.map((todo)=>(
                <div key={todo.id}>
                    <li>
                    <Task
                        todo={todo}
                        onchange={onChangeTodo}
                        ondelete={onDeleteTodo}

                    ></Task>
                </li>
                </div>
            ))}
                        
        </div>
    )
}

function Task({todo,onchange,ondelete})
{
    let [edit,setEdit] = useState(false)

    let content;
    if(edit)
    {
        content =
        <>
        <input 
        type="text" 
        value={todo.title}
        onChange={(e)=>{
            onchange({
                ...todo,
                title:e.target.value
            })
        }}
        ></input>

        <button onClick={()=>{setEdit(false)}}>Save</button>
        </>
    }
    else
    {
        content =
        <>
        {todo.title}
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