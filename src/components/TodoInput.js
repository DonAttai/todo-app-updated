import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const TodoInput = () => {
  const {
    setError,
    error,
    addTodo,
    todos,
    title,
    addTitle,
    updateButton,
    toggleUpdate,
  } = useContext(TodoContext);
  const uncompletedTodos = todos.filter((todo) => todo.completed === false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title) {
      const todo = {
        title,
        completed: false,
        id: Date.now().toString(),
      };

      addTodo(todo);
      addTitle("");
    } else {
      setError();
      setTimeout(() => setError(), 2000);
    }
  };
  return (
    <div className="row">
      <div className="col col-md-6 mx-auto">
        <h3 className="text-center">Todo App</h3>

        <div className="card card-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                // required
                className="form-control"
                placeholder="Enter todo..."
                value={title}
                onChange={(e) => addTitle(e.target.value)}
              />
            </div>
            {updateButton ? (
              <button
                type="submit"
                className="btn btn-primary form-control"
                onClick={() => toggleUpdate()}
              >
                Update Todo
              </button>
            ) : (
              <button type="submit" className="btn btn-success form-control">
                Add Todo
              </button>
            )}
          </form>
        </div>
        {error && (
          <h3 style={{ color: "red", textAlign: "center", marginTop: "1rem" }}>
            Please, enter a todo
          </h3>
        )}
        <div>
          {todos.length > 0 ? (
            <div>
              <h3 style={{ textAlign: "center", paddingTop: "1rem" }}>
                You have {uncompletedTodos.length} todo(s) left to complete
              </h3>
              <h3 className="text-center mt-5 mb-2">Todo Items</h3>
            </div>
          ) : (
            <h2 style={{ textAlign: "center", margin: "1rem 0" }}>
              You have not added any todo
            </h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoInput;
