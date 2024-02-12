import React, { useState } from "react"

function AddTodo({onAdd}){

    let [title,setTitle] = useState("")
    return(
        <div>
            <input 
                type="text" 
                value={title} 
                onChange={(e)=>{setTitle(e.target.value)}}
            />

            <button onClick={()=>{
                onAdd(title)
            }}>Add</button>

        </div>
    )
}
export default AddTodo