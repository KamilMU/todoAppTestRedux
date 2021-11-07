import React from 'react';
import './styles.scss';
import Header from '../Header';
import AddTodoForm from '../AddTodoForm';
import TodoList from '../TodoList';
import Filters from '../Filters';
import SearchTodoForm from '../SearchTodoForm';

export function App() {
  return (
    <div className="app">
      <Header />
      <SearchTodoForm />
      <AddTodoForm />
      <Filters />
      <TodoList />
    </div>
  )
}