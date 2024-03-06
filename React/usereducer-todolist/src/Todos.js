import { useReducer } from "react";

let initialState = [];
function reducer(state, action) {
  switch (action.type) {
    case "Add_Task":
    return [
      ...state,
      {
        id: state.lenght +1,
        name : action.name
      }
    ]
    default:
      return state;
  }
}
let Todos = () => {
  let [todos, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      {/* <h4>Todo List {todos.length}</h4> */}
      <label>Enter New Task: &nbsp;</label>
      <input type="text" 
        onChange={(e)=>{
          dispatch({type: 'Add_Task', name:e.target.value}
          )}}/>
          {todos.map(todo => <li key={todo.id}>{todo.name}</li>)}
    </>
  );
};
export default Todos;