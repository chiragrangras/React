import React, { useState } from "react"

function AddTitle({onAdd})
{
    let [title,setTitle]= useState('')

    return(
        <div>
            Add Items: <input type="text"
            value={title}
            onChange={(e)=>{setTitle(e.target.value)}}>
            </input>
            <button onClick={()=>{
                onAdd(title)
            }}>Add</button>
        </div>
    )
}
export default AddTitle