import React from 'react';
import './styles.scss';

export function TodoItem({ todo, deleteTodo }) {
  return (
    <li className={'todos__todo-container'} key={todo.id}>
      <span className={'todos__date'}>{todo.date}</span>
      <div className={'todos__todo'}>
        <div style={{
          textDecoration: todo.status === 'solved' && "line-through"
        }}>
          <div className={'todos__tittle'}>
            <b>{todo.title}</b>
            {todo.status === 'inWork' && (<span className={'inWork'}>in work!</span>)}
            {todo.status === 'open' && (<span className={'open'}>open</span>)}
          </div>
          <div>{todo.text}</div>
        </div>
        <button onClick={deleteTodo}>Delete</button>
      </div>
    </li>
  )
}