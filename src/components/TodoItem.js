import React, { useContext } from "react";
import { todoContext } from "../App";

const TodoItem = ({ todo }) => {
  const { removeTodo, updateTodo } = useContext(todoContext);
  return (
    <div className="row">
      <div className="col col-md-6 mx-auto">
        <li className="list-group-item d-flex justify-content-between my-1">
          <h4>{todo.title}</h4>
          <span>
            <button
              className="btn btn-sm btn-success mx-1"
              onClick={() => updateTodo(todo.id)}
            >
              Update
            </button>
            <button
              className="btn btn-sm btn-danger"
              onClick={() => removeTodo(todo.id)}
            >
              Remove
            </button>
          </span>
        </li>
      </div>
    </div>
  );
};

export default TodoItem;
