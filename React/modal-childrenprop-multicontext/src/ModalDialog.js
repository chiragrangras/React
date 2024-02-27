import React, { useEffect, useRef } from "react";

function ModalDialog({children,x}) {
    
    
  return (

      <dialog ref={ref}>{children}</dialog>
    
  )
}
export default ModalDialog;
