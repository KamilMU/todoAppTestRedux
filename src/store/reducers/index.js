import { ADD_TODO, DELETE_TODO, EDIT_TODO } from "../../constants";

const initialState = {
  todos: [
    {
      id: 1,
      title: "Go for a walk",
      text: "Walk at least 40min",
      status: "solved",
      date: "20/10/2021"
    },
    {
      id: 2,
      title: "Eat a burger",
      text: "eat a cheese burger",
      status: "solved",
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

export const reducer = (state = initialState, { type, todo, todoId }) => {
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
    default:
      return state;
  }
}