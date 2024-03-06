import { useReducer } from "react";

let initialState = [];
function reducer(state, action) {
  switch (action.type) {
    case "Add_Task":

    default:
      return state;
  }
}
let Todos = () => {
  let [todos, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h4>Todo List {todos.length}</h4>
      Enter New Task:
      <input type="text" onChange={(e)=>{dispatch({type: 'Add_Task',name:e.target.value})}}/>
    </>
  );
};
export default Todos;