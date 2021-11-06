import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, doneTodo } from '../../store/actions';
import TodoItem from '../TodoItem';
import './styles.scss';

export function TodoList() {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  return (
    <>
      <ul className={'todos'}>
        {todos.map((todo, index) => (
          <TodoItem
            todo={todo}
            deleteTodo={() => dispatch(deleteTodo(todo.id))}
            doneTodo={() => dispatch(doneTodo(todo.id))}
            key={index}
          />
        ))}
      </ul>
    </>
  );
}