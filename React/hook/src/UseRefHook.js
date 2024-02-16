import React, { useRef } from "react"

function UseRefHook(){

    let h2Ref = useRef();
    let divRef = useRef();

    let testDivs = () =>{
        // let divs = document.querySelectorAll('.x')
        // console.log(divs)

        console.log(h2Ref)
        console.log(h2Ref.current)
        console.log(divRef)

        h2Ref.current.innerHTML = 'Wow Chirag';
        h2Ref.current.style.color = 'blue';

        divRef.current.style.background = 'coral'
    }
    return(
        <div>

            <h2 ref={h2Ref}>Hello Ref Hook</h2>

            <div className="p" ref={divRef}>

            <div className="x">div 1</div>
            <div className="x">div 2</div>
            <div className="x">div 3</div>
            <div className="x">div 4</div>

            </div>
        
            <button onClick={testDivs}>Get Divs</button>
        </div>
    )
}
export default UseRefHook