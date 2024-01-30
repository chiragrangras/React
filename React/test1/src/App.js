import './App.css';
import './components.js';

function App() {
  
  const getApi =()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res)=>{return res.json()})
    .then((data)=>{

    let header = " --- API DATA --- ";
    data.map((v)=>{
      header = header + `<li>${v.name}</li>`
    })
    document.getElementById('d1').innerHTML = header
    })
  }

  return(
    <div className="App">
      
      <li id="d1"></li>

      <button onClick={getApi}>Get API Data</button>
    </div>
  )
}

export default App;