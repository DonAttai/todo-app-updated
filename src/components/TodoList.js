import React, { useContext } from "react";
import { todoContext } from "../App";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { todos } = useContext(todoContext);
  return (
    <>
      <h3 className="text-center mt-5 mb-2">Todo Items</h3>
      <ul className="list-group">
        {todos.map((todo) => {
          return <TodoItem key={todo.id} todo={todo} />;
        })}
      </ul>
    </>
  );
};

export default TodoList;
