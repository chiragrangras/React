import React, { useContext } from "react"
import Child1 from "./Child1"
import Child2 from "./Child2"
import Child3 from "./Child3"
import { prop } from "./UseContextHook"


function ParentCompo(){

    let proprty = useContext(prop)
    return(
        <div>

            Parent has now this{proprty[0].proprty}
            <Child1/>
            <Child2></Child2>
            <Child3/>
        </div>
    )
}
export default ParentCompo