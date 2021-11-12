import {
  ADD_TODO, DELETE_TODO, EDIT_TODO, FILTER_TODOS_BY_STATUS, 
  SEARCH_TODO, CHANGE_TODO_STATUS
} from "../../constants";

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

export const changeTodoStatus = (todoId, status) => ({
  type: CHANGE_TODO_STATUS,
  todoId,
  status
});

export const filterTodosByStatus = (status, statusChecked) => ({
  type: FILTER_TODOS_BY_STATUS,
  status,
  statusChecked
});

export const searchTodo = (searchTerm) => ({
  type: SEARCH_TODO,
  searchTerm
});