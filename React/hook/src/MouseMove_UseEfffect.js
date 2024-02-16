import React, { useEffect, useState } from "react"

function MouseMoveUseEffect(){

    let [p,setP] = useState({x:0,y:0})

    useEffect(()=>{
        let handleMove = (e) => {
            setP({
                x:e.clientX,
                y:e.clientY,
            })
        }
    
        window.addEventListener("mousemove",handleMove)
    })

    return(
        <div style={{
            height:'20px',
            width:20,
            background:'red',
            transform:`translate(${p.x}px,${p.y}px)`
        }}>

        </div>
    )
}
export default MouseMoveUseEffect