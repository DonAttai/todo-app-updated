import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "./components/Modal";
import { useContext } from "react";
import { TodoContext } from "./context/TodoContext";

function App() {
  const { isModalOpen } = useContext(TodoContext);

  return (
    <>
      <div className="mt-3 container App">
        {isModalOpen && <Modal />}

        <TodoInput />
        <TodoList />
      </div>
    </>
  );
}

export default App;
