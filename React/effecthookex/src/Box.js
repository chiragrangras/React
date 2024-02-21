import React, { useEffect, useRef } from "react"


function Box(){

    let divRef = useRef();
    useEffect(()=>{

        let div = divRef.current;
        let observer = new IntersectionObserver((entries)=>{

            //console.log(entries)
            let entry = entries[0];

            if(entry.isIntersecting)
            {
                document.body.style.color = '#fff'
                document.body.style.background = '#000'
            }
            else
            {
                document.body.style.color = '#000'
                document.body.style.background = '#fff'
            }
        },{
            threshold:1
        })
        observer.observe(div)

    })

    //console.log(divRef.current);
    
    return(
        <div ref={divRef} style={{
            height:100,
            width:'100px',
            background:'blue'
        }}>
        </div> 
    )
}
export default Box