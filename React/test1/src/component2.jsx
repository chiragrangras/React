import React from "react"

export function Fun1()
{
    // x = () => {

    // }
    // function t()
    // {
    //     alert('Hello function')
    // }
    
    return(
        <>
        <h3 id="op" onClick={()=>{alert('Hello function')}}>Fun1</h3>
        </>
    ) 
}

export function Fun2({x,y})
{
    let a = () => {
        alert("x=12");
    }
    return(
        <>
        <b onClick={a}>{x}</b>
        {/* <li onMouseEnter={()=>{alert("b=34")}}>{y}</li> */}
        </>
    )
}

export class Class1 extends React.Component
{
    p = ()=>{
        alert('Hello P Class')
    }
    render()
    {
        return(
            <>
            <h3 onClick={this.p}>Class1</h3>
            </>
        )
    }
}

class Class2 extends React.PureComponent
{
    render()
    {
        return(
            <>
            <h3 onMouseEnter={()=>{alert('Hello Class2')}}>Class2</h3>
            </>
        )
    }
}

export default Class2;