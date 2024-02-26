import { useState } from "react";
import "./App.css";
import ChildrenProp from "./ChildrenProp";
import ModalDialog from "./ModalDialog";

function App() {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
      {/* <ChildrenProp>
        2425245
      </ChildrenProp> */}

      <button>Open Modal</button>
      <ModalDialog x={isOpen}>
        <h3>Hello Alert....!</h3>
        <button onClick={()=>{setIsOpen(!isOpen)}}>X</button>
      </ModalDialog>
    </div>
  );
}

export default App;
