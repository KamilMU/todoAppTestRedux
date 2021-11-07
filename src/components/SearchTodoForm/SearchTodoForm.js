import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchTodo } from '../../store/actions';
import './styles.scss';

export function SearchTodoForm() {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchTodo(searchTerm));
  }, [searchTerm])

  function onFormSubmit(e) {
    e.preventDefault();
    dispatch(searchTodo(searchTerm));
  }

  function onInputChange(e) {
    setSearchTerm(e.target.value);
  }

  return (
    <div className="search-todo-container">
      <form
        action=""
        onSubmit={onFormSubmit}>
        <input
          type="text"
          value={searchTerm}
          onChange={onInputChange}
          placeholder="search todos..."
        />
        <button type="submit">🔍</button>
      </form>
    </div>
  )
}
