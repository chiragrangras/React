import React, { useState } from "react";

function TaskList({ todoList, onChangeTodo, onDeleteTodo }) {
  return (
    <div>
      {todoList.map((todo) => (
        <ul key={todo.id}>
          <li>
            <Task
              todo={todo}
              onchange={onChangeTodo}
              ondelete={onDeleteTodo}
            ></Task>
          </li>
        </ul>
      ))}
    </div>
  );
}

function Task({ todo, onchange, ondelete }) {
  let [edit, setEdit] = useState(false);
  let content;

  if (edit) {
    content = (
      <>
        <input
          type="text"
          value={todo.title}
          onChange={(e) => {
            onchange({
              id: todo.id,
              title: e.target.value,
            });
          }}
        />
        <button
          onClick={() => {
            setEdit(false);
          }}
        >
          Save
        </button>
      </>
    );
  } else {
    content = (
      <>
        {todo.title}
        <button
          onClick={() => {
            setEdit(true);
          }}
        >
          Edit
        </button>
      </>
    );
  }

  return (
    <>
      {content}
      <button
        onClick={() => {
          ondelete(todo.id);
        }}
      >
        Delete
      </button>
    </>
  );
}

export default TaskList;
