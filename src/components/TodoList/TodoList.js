import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo } from '../../store/actions';
import { TodoItem } from '../TodoItem/TodoItem';
import './styles.scss';

export function TodoList() {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  return (
    <div>
      <ul className={'todos'}>
        {todos.map((todo, index) => (
          <TodoItem
            todo={todo}
            deleteTodo={() => dispatch(deleteTodo(todo.id))}
            key={index}
          />
        ))}
      </ul>
    </div>
  );
}