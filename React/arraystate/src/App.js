import AddTitle from './AddTitle';
import './App.css';

let intialTodos = [
  {title:'Apple'},
  {title:'Mango'},
  {title:'Orange'}
];

function App() {

  let handleAdd = (title) => {
    
    console.log(title)
  }
  
  return (
    <div className="App">
      <AddTitle onAdd={handleAdd}/>
    </div>
  );
}

export default App;
