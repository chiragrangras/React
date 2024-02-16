import './App.css';
import MouseMoveUseEffect from './MouseMove_UseEfffect';
import UseContextHook from './UseContextHook';
import UseRefHook from './UseRefHook';


function App() {

  // useEffect(()=>{})
  // useEffect(()=>{},[])
  // useEffect(()=>{},[1,2,3])

  

  return (
    <div className="App">
      {/* <MouseMoveUseEffect/> */}
      <UseRefHook/>
      <UseContextHook/>
    </div>
  );
}

export default App;
