import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
const Modal = () => {
  const { deleteTodo, showModal, activeTodoId } = useContext(TodoContext);
  return (
    <section className="modal-container">
      <section className="modal-card">
        <div>
          <p>Are you sure you want to delete? </p>
          <hr />
        </div>
        <div className="modal-buttons">
          <button
            onClick={() => showModal(activeTodoId)}
            className="modal-button-close"
          >
            Cancel
          </button>
          <button
            onClick={() => deleteTodo(activeTodoId)}
            className="modal-button-delete"
          >
            Confirm
          </button>
        </div>
      </section>
    </section>
  );
};

export default Modal;
