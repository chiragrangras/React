import React, { useReducer } from "react"

let v = {num:1}

function UseReducerHook(){


    function f(state,action)
    {
        switch(action.type)
        {
            case 'increment':
                return {num:state.num+1};
            
            case 'decrement':
                return {num:state.num-1};

            default:
                return state;
        }
    }

    let [s,d] = useReducer(f,v)

    return(
        <div>
            <button onClick={()=>{d({'type':'decrement'})}}>-</button>
            <h4>{s.num}</h4>
            <button onClick={()=>{d({'type':'increment'})}}>+</button>
        </div>
    )
}
export default UseReducerHook