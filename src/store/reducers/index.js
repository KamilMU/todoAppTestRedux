import {
  ADD_TODO, CHANGE_TODO_STATUS, DELETE_TODO, EDIT_TODO,
  FILTER_TODOS_BY_STATUS, mockData, SEARCH_TODO
} from "../../constants";

const initialState = {
  todos: [...mockData],
  initialTodos: [...mockData]
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.todo],
        initialTodos: [...state.initialTodos, action.todo],
      }
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.todoId),
        initialTodos: state.initialTodos.filter(todo => todo.id !== action.todoId),

      }
    case CHANGE_TODO_STATUS:
      const changeTodoStatus = (todos) => {
        return todos.map(todo => {
          if (todo.id === action.todoId) {
            return {
              ...todo,
              status: action.status
            }
          }

          return todo;
        })
      }
      return {
        ...state,
        todos: changeTodoStatus(state.todos),
        initialTodos: changeTodoStatus(state.initialTodos)
      }
    case EDIT_TODO:
      const editedTodos = (todos) => {
        return todos.map(todo => {
          if (todo.id === action.todoId) {
            return {
              ...todo,
              title: action.todoTitle,
              text: action.todoText,
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
      if (action.statusChecked) {
        return {
          ...state,
          todos: state.todos.filter(todo => {
            return todo.status === action.status
          })
        }
      } else {
        return {
          ...state,
          todos: state.initialTodos
        }
      }
    case SEARCH_TODO:
      if (action.searchTerm !== '') {
        return {
          ...state,
          todos: state.todos.filter(todo => {
            return todo?.title?.toString().toLowerCase().includes(action.searchTerm.toString().toLowerCase());
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