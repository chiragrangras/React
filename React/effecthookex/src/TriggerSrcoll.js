import React from "react"
import Box from "./Box";

function TriggerSrcoll(){

    let data = [];
    for(let i=1;i<=50;i++)
    {
        data.push(<li key={i}>{i}items</li>)
    }

    return(
        <div>
            <ul>
                {data}
            </ul>
            <Box/>
            <ul>
                {data}
            </ul>            
        </div>
    )
}
export default TriggerSrcoll