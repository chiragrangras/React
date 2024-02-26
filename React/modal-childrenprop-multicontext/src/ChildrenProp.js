import React from "react"

function ChildrenProp({children}){
    return(
        <div>

            <button>
                {children}
            </button>
        </div>
    )
}
export default ChildrenProp