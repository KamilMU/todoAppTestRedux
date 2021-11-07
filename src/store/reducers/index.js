import { ADD_TODO, DELETE_TODO, DONE_TODO, EDIT_TODO, FILTER_TODOS_BY_STATUS, mockData } from "../../constants";

const initialState = {
  todos: [...mockData],
  initialTodos: [...mockData]
}

export const reducer = (state = initialState, { type, todo, todoId, todoTitle, todoText, status, statusChecked }) => {
  switch (type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, todo],
        initialTodos: [...state.initialTodos, todo],
      }
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== todoId),
        initialTodos: state.initialTodos.filter(todo => todo.id !== todoId),

      }
    case DONE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === todoId && todo.status !== "done") {
            return {
              ...todo,
              status: "done"
            }
          }

          return todo;
        })
      }
    case EDIT_TODO:
      const editedTodos = (todos) => {
        return todos.map(todo => {
          if (todo.id === todoId) {
            return {
              ...todo,
              title: todoTitle,
              text: todoText,
            }
          }

          return todo;
        })
      }
      
      return {
        ...state,
        todos: editedTodos(state.todos),
        initialTodos: editedTodos(state.initialTodos),
      }
    case FILTER_TODOS_BY_STATUS:
      if (statusChecked) {
        return {
          ...state,
          todos: state.todos.filter(todo => {
            return todo.status === status
          })
        }
      } else {
        return {
          ...state,
          todos: state.initialTodos
        }
      }
    default:
      return state;
  }
}