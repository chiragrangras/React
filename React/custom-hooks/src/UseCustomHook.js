import { useEffect } from "react";


export function UseCustomHook(eventType, funname) 
{

  useEffect(()=>{
    window.addEventListener(eventType, funname);
  },[eventType,funname])
}