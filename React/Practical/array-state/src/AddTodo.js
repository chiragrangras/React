import React, { useState } from 'react'

function AddTodo({onAddTodo}){

    let [title,setTitle] = useState("");

    return(
        <div>
            <input type='text'
            value={title}
            onChange={(e)=>{setTitle(e.target.value)}}
            />

            <button onClick={()=>{
                onAddTodo(title)
            }}>Add</button>
        
        </div>
    )
}
export default AddTodo