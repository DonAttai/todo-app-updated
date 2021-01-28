import React, { useContext } from "react";
import { todoContext } from "../App";

const TodoInput = () => {
  const { item, setItem, handleSubmit } = useContext(todoContext);
  return (
    <div className="row">
      <div className="col col-md-6 mx-auto">
        <h3 className="text-center">Todo App</h3>

        <div className="card card-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                required
                className="form-control"
                placeholder="Enter Item..."
                value={item.title}
                onChange={(e) => setItem({ ...item, title: e.target.value })}
              />
            </div>
            <button type="submit" className="btn btn-success form-control">
              Add Item
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TodoInput;
