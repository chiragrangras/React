import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Local Storage</h1>
      <button
        onClick={() => {
          localStorage.setItem("arr", JSON.stringify([1, 2, 3, 4]));
          localStorage.setItem("obj", JSON.stringify({ name: "chirag", address: "shahibaug" }));
        }}
      >
        Save
      </button>
      <button onClick={()=>{
        const arr = localStorage.getItem('arr')
        console.log(JSON.parse(arr));
        const obj = localStorage.getItem('obj')
        console.log(JSON.parse(obj).name);
      }}>Get Value</button>
    </div>
  );
}

export default App;
