import { nanoid } from "nanoid";

export const CREATE_TODO = "CREATE_TODO";

export const createTodo = (text) => ({
  type: CREATE_TODO,
  payload: { text },
  id: nanoid(10),
});

export const REMOVE_TODO = "REMOVE_TODO";
export const removeTodo = (text, id) => ({
  type: REMOVE_TODO,
  payload: { text },
  id: id,
});

export const EDIT_TODO = "EDIT_TODO";
export const editTodo = (text, id) => ({
  type: EDIT_TODO,
  payload: { text },
  id: id,
});
