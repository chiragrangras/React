import { useState } from "react";
import "./App.css";

// Import custom components
import AddTodo from "./AddTodo";
import TaskList from "./TaskList";

// initialTodos is an array that contains 3 Todo objects
let initialTodos = [
  {
    title: "Apple",
    id: 1,
  },
  {
    title: "Mango",
    id: 2,
  },
  {
    title: "Kiwi",
    id: 3,
  },
];

// The nextID variable is set to 4 so that it can be used for the next todo which
// the user will create. This is used to auto-generate/auto-increment IDs for the user.
let nextID = 4;

// This is the default function that will be exported from this file.
// This is the function that will be called when you call npm start script.
function App() {
  // Create state variable named todos
  // Crete state method named setTodos to update the state variable
  // The state variable is created with the data from initialTodos array.
  let [todos, setTodos] = useState(initialTodos);

  // Create a handler function to add new Todo
  // The function is created using arrow function syntax
  // The function takes `title` as input and update
  // state variable `todos` with the new todo using `setTodos` method
  // The `handleAdd` functions adds new todo to the `todos` state variable
  let handleAdd = (title) => {
    // setTodos method updates the state of `todos` variable
    // with the new input provided to the `setTodos` method.
    // This method overrides old data, hence we are using spread operator.
    setTodos([
      ...todos,
      {
        title: title,
        id: nextID++,
      },
    ]);
  };

  // Create a handler function to change a Todo
  // The function is created using arrow function syntax
  // The function takes `currentTodo` as input
  let handleChange = (currentTodo) => {
    // First find the `currentTodo` from the todo list which is stored in `todos` variable

    // const foundTodoIndex = todos.findIndex(
    //   (todo) => todo.id === currentTodo.id
    // );
    // console.log(`Found Todo Index: ${foundTodoIndex}`);
    // let foundTodo = todos[foundTodoIndex];
    // foundTodo.title = currentTodo.title;

    // console.log(`Updated Todos: ${JSON.stringify(todos)}`);
    // setTodos([...todos]);

    // Using find method on the `todos` state variable, find the todo that needs update
    const foundTodo = todos.find(
      (todo) => todo.id === currentTodo.id
    );
    // Update the title of foundTodo with the title from currentTodo
    // currentTodo is passed by the user to this method
    foundTodo.title = currentTodo.title;

    console.log(`Updated Todos: ${JSON.stringify(todos)}`);

    // Update the state variable `todos` by spread operator
    // so that it has new currentTodo title in it.
    setTodos([...todos]);

    // setTodos(
    //   todos.map((todo) => {
    //     if (todo.id === currentTodo.id) {
    //       return currentTodo;
    //     } else {
    //       return todo;
    //     }
    //   })
    // );
  };
  
  // Create a handler function to delete a Todo
  // The function is created using arrow function syntax
  // The function takes `todoId` as input and filters
  // the todos list to remove the Todo where ID matches.
  // The updated todo list is set as a state variable `todos` using `setTodos` method
  // The `handleDelet` functions filters todo from the `todos` state variable and update 
  // the state variable.
  let handleDelete = (todoID) => {

    const updatedTodos = todos.filter((todo) => {
      return todo.id !== todoID;
    })

    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <>
        <AddTodo onAddTodo={handleAdd} />
        <TaskList
          todoList={todos}
          onChangeTodo={handleChange}
          onDeleteTodo={handleDelete}
        />
      </>
    </div>
  );
}

export default App;
