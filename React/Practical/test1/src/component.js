import React from "react";

function Fun()
{    

    function t()
    {
        let inp = document.getElementById('inp-text');
        let out = document.getElementById('out-text');

        out.innerHTML = inp.value
    }
    return(
        <>
        <div className="App">
            <input type="text" id="inp-text"/><br/>
            <textarea id="out-text"/>
            <button onClick={t}>Get Data</button>        
        </div>
        </>
    )
}

export default Fun;