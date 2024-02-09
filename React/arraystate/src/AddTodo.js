import React, { useState } from "react"

function AddTodo({onAdd}){

    let [t,setT] = useState('')
    
    return(
        <div>
            <input type="text" value={t} onChange={(e)=>{setT(e.target.value)}}/>
            <button onClick={()=>{
                onAdd(t)
            }}>Add</button>
        </div>
    )
}

export default AddTodo