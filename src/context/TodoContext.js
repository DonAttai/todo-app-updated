import { createContext, useReducer, useEffect } from "react";
import { todoReducer } from "./todoReducer";
import { ACTIONS } from "./todo-actions";
const todos = JSON.parse(localStorage.getItem("data"));
const initialState = {
  todos: todos ? todos : [],
  error: false,
  isModalOpen: false,
  activeTodoId: "",
  title: "",
  updateButton: false,
};

export const TodoContext = createContext(initialState);
export const TodoContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(state.todos));
  }, [state.todos]);

  //   ACTIONS

  // ADD TODO
  const addTodo = (todo) => {
    dispatch({ type: ACTIONS.ADD_TODO, payload: todo });
  };
  // DELETE TODO
  const deleteTodo = (id) => {
    dispatch({ type: ACTIONS.DELETE_TODO, payload: id });
  };
  // TOGGLE TODO
  const toggleTodo = (id) => {
    dispatch({ type: ACTIONS.TOGGLE_TODO, payload: id });
  };

  // UPDATE TODO
  const updateTodo = (id) => {
    dispatch({ type: ACTIONS.UPDATE_TODO, payload: id });
  };

  // SET ERROR
  const setError = () => {
    dispatch({ type: ACTIONS.ERROR });
  };

  const showModal = (id) => {
    dispatch({ type: ACTIONS.SHOW_MODAL, payload: id });
  };
  const addTitle = (title) => {
    dispatch({ type: ACTIONS.ADD_TITLE, payload: title });
  };

  const toggleUpdate = () => {
    dispatch({ type: ACTIONS.TOGGLE_UPDATE });
  };
  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        error: state.error,
        isModalOpen: state.isModalOpen,
        activeTodoId: state.activeTodoId,
        title: state.title,
        addTodo,
        deleteTodo,
        setError,
        toggleTodo,
        updateTodo,
        showModal,
        addTitle,
        dispatch,
        toggleUpdate,
        updateButton: state.updateButton,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
