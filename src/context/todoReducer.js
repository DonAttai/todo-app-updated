import { ACTIONS } from "./todo-actions";
export const todoReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return {
        ...state,
        todos: [action.payload, ...state.todos],
      };
    case ACTIONS.DELETE_TODO:
      return {
        ...state,
        isModalOpen: !state.isModalOpen,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case ACTIONS.TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    case ACTIONS.UPDATE_TODO:
      return {
        ...state,
        updateButton: !state.updateButton,
        title: state.todos.find((todo) => todo.id === action.payload).title,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case ACTIONS.ERROR:
      return {
        ...state,
        error: !state.error,
      };
    case ACTIONS.SHOW_MODAL:
      return {
        ...state,
        isModalOpen: !state.isModalOpen,
        activeTodoId: state.todos.find((todo) => todo.id === action.payload).id,
      };
    case ACTIONS.ADD_TITLE:
      return {
        ...state,
        title: action.payload,
      };
    case ACTIONS.TOGGLE_UPDATE:
      return {
        ...state,
        updateButton: !state.updateButton,
      };

    default:
      return state;
  }
};
