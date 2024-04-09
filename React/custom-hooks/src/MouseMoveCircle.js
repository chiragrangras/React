import React, { useState } from "react";
import { UseCustomHook } from "./UseCustomHook";

function MouseMoveCircle() {
  let [p, setP] = useState({ x: 0, y: 0 });

  UseCustomHook("mousemove", (e) => {
    setP({
      x: e.clientX,
      y: e.clientY,
    })
  });
  return (
    <div
      style={{
        height: 20,
        width: 20,
        background: "blue",
        borderRadius: "50%",
        transform: `translate(${p.x}px,${p.y}px)`,
      }}
    ></div>
  );
}
export default MouseMoveCircle;
