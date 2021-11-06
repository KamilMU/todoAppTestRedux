import { ADD_TODO, DELETE_TODO, EDIT_TODO, DONE_TODO } from "../../constants";

export const addTodo = (todo) => ({
  type: ADD_TODO,
  todo
});

export const deleteTodo = (todoId) => ({
  type: DELETE_TODO,
  todoId
});

export const editTodo = (todoId, todoTitle, todoText) => ({
  type: EDIT_TODO,
  todoId,
  todoTitle,
  todoText
});

export const doneTodo = (todoId) => ({
  type: DONE_TODO,
  todoId
});