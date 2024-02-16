import React, { useContext } from "react"
import { prop } from "./UseContextHook"

function Child2(){
    let p = useContext(prop)
    let x = 12000/2;

    return(
        <div>

            {
                console.log((x) ? '6000': 'f')
            }

        Child 2 also has now this {p[0].money}

        </div>
    )
}
export default Child2