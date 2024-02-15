
import { useState } from 'react';
import './App.css';

function App() {

  let [pos,setpos] = useState({x:0,y:0})

  let test = (e)=>{

    setpos({
      x:e.clientX,
      y:e.clientY,
    })
  }

  window.addEventListener("mousemove",test)

  return (
    <div style={{
      height:20,
      width:"20px",
      background:"blue",
      transform:`translate(${pos.x}px,${pos.y}px)`,
      position:"absolute",
      top:-9,
      left:-9
    }}>
      
    </div>
  );
}

export default App;
