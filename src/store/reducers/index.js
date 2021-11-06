import { ADD_TODO, DELETE_TODO, DONE_TODO, EDIT_TODO } from "../../constants";

const initialState = {
  todos: [
    {
      id: 1,
      title: "Go for a walk",
      text: "Walk at least 40min",
      status: "done",
      date: "20/10/2021"
    },
    {
      id: 2,
      title: "Eat a burger",
      text: "eat a cheese burger",
      status: "done",
      date: "20/08/2021"
    },
    {
      id: 3,
      title: "watch a tv",
      text: "watch some comedy show",
      status: "inWork",
      date: "20/10/2021"
    }
  ]
}

export const reducer = (state = initialState, { type, todo, todoId, todoTitle, todoText }) => {
  switch (type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, todo]
      }
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== todoId)
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
      return {
        ...state,
        todos: state.todos.map(todo => {
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
    default:
      return state;
  }
}