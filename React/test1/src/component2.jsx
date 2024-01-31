import React from "react"

export function Fun1()
{
    // x = () => {

    // }
    function t()
    {
        alert('h1')
    }
    return(
        <>
        <h3 id="op" onClick={t}>Fun1</h3>
        </>
    ) 
}

export function Fun2({x,y})
{
    return(
        <>
        <b>{x}</b>
        <li>{y}</li>
        </>
    )
}

export class Class1 extends React.Component
{
    render()
    {
        return(
            <>
            <h3>Class1</h3>
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
            <h3>Class2</h3>
            </>
        )
    }
}

export default Class2;