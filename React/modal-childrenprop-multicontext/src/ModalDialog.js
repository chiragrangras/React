import React, { useEffect, useRef } from "react";

function ModalDialog({children,x}) {
    
    let ref = useRef();

    useEffect(()=>{
        let dialog = ref.current
        console.log(dialog)
        console.log(x)

        if(x)
        {
            
        }
        else
        {
            dialog.showModal();
        }
    })

  return (

      <dialog ref={ref}>{children}</dialog>
    
  )
}
export default ModalDialog;
