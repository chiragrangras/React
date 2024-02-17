import React, { useRef } from "react"

let products = [
    {
        title:'title 1',
        price:200
    },
    {
        title:'title 2',
        price:250
    },
    {
        title:'title 3',
        price:500
    }
]

function UserrefEx(){

    let h2Ref = useRef();
    let divRef = useRef();

    function getElement()
    {
        console.log(h2Ref)
        console.log(h2Ref.current)

        h2Ref.current.innerHTML = 'Chirag'
        h2Ref.current.style.color = 'cornflowerblue'

        divRef.current.style.background = 'lightblue'
    }
    return(
        <div>

            <h2 ref={h2Ref}>Hello</h2>

            <button onClick={getElement}>Get H2</button>

            <div ref={divRef}>
                {
                    products.map((items)=>(
                        <>
                        <h1>{items.title}</h1>
                        <p>{items.price}</p>
                        </>
                    ))
                }
                
            </div>

        </div>
    )
}
export default UserrefEx