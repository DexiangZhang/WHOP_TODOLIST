import { CREATE_TODO, REMOVE_TODO, EDIT_TODO } from "./actions";

export const todos = (state = [], action) => {
  const { type, payload, id } = action;

  switch (type) {
    case CREATE_TODO: {
      const { text } = payload;
      const newTodo = {
        text,
        id,
      };
      return state.concat(newTodo);
    }
    case REMOVE_TODO: {
      return state.filter((todo) => todo.id !== id);
    }
    case EDIT_TODO: {
      const { text } = payload;
      return state.map((todo) => {
        if (todo.id === id) {
          todo.text = text;
          return { ...todo };
        }
        return todo;
      });
    }

    default:
      return state;
  }
};
