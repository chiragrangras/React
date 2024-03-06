import { useReducer, useState } from "react";

let initialState = [];
function reducer(state, action) {
  switch (action.type) {
    case "Add_Task":
    return [
      ...state,
      {
        id: state.length +1,
        name : action.name
      }
    ]
    default:
      return state;
  }
}
let Todos = () => {
  let [todos, dispatch] = useReducer(reducer, initialState);
  let [task,setTask] = useState('');

  return (
    <>
      {/* <h4>Todo List {todos.length}</h4> */}
      <label>Enter New Task: &nbsp;</label>
      <input type="text" value={task} onChange={(e)=>{setTask(e.target.value)}} />
      <button onClick={()=>{
          dispatch({type: 'Add_Task', name:task}
          )}}>Add</button>
          {todos.map(todo => <li key={todo.id}>{todo.name}</li>)}
    </>
  );
};
export default Todos;