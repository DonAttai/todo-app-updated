import React, { useState, useEffect } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "bootstrap/dist/css/bootstrap.min.css";

export const todoContext = React.createContext();

const todo = {
  title: "",
  completed: false,
};

function App() {
  const [item, setItem] = useState(todo);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("data");
    if (data) {
      const newData = JSON.parse(data);
      setTodos(newData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(todos));
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (item.title) {
      const newItem = {
        ...item,
        title: item.title,
        id: new Date().getTime().toString(),
      };
      const newTodos = (todos) => [...todos, newItem];
      setTodos(newTodos);
      setItem({ ...item, title: "" });
    }
  };
  const removeTodo = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  };

  const updateTodo = (id) => {
    const filteredTodos = [...todos.filter((todo) => todo.id !== id)];
    setTodos(filteredTodos);
    setItem({
      ...item,
      title: todos.find((todo) => todo.id === id).title,
      id,
    });
  };
  return (
    <todoContext.Provider
      value={{ todos, removeTodo, item, setItem, handleSubmit, updateTodo }}
    >
      <div className="mt-3 container">
        <TodoInput />
        <TodoList />
      </div>
    </todoContext.Provider>
  );
}

export default App;
