import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const TodoItem = ({ todo }) => {
  const { toggleTodo, updateTodo, showModal } = useContext(TodoContext);
  return (
    <>
      <div className="row">
        <div className="col col-md-6 mx-auto">
          <li
            className={
              todo.completed
                ? "completed list-group-item d-flex justify-content-between my-1"
                : "list-group-item d-flex justify-content-between my-1"
            }
          >
            <input type="checkbox" onClick={() => toggleTodo(todo.id)} />
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
                onClick={() => showModal(todo.id)}
              >
                Delete
              </button>
            </span>
          </li>
        </div>
      </div>
    </>
  );
};

export default TodoItem;
