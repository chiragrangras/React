import React, { useState } from "react"

function AddTodo({onAdd}){

    let [T,setT] = useState('');
    return(
        <div>
            <input type="text" value={T} onChange={(e)=>{setT(e.target.value)}}/>
            <button onClick={()=>{
                onAdd(T)
            }}>Add</button>
        </div>
    )
}

export default AddTodo