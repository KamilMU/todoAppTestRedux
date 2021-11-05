import { ADD_TODO, DELETE_TODO, EDIT_TODO } from "../../constants";

export const addTodo = (todo) => ({
  type: ADD_TODO,
  todo
});

export const deleteTodo = (todoId) => ({
  type: DELETE_TODO,
  todoId
});

export const editTodo = (todoId) => ({
  type: CHANGE_PASSWORD_INPUT,
  EDIT_TODO
});