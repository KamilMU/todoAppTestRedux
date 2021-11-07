import React from 'react';
import './styles.scss';
import Header from '../Header';
import AddTodoForm from '../AddTodoForm';
import TodoList from '../TodoList';
import Filters from '../Filters';

export function App() {
  return (
    <div className="app">
      <Header />
      <AddTodoForm />
      <Filters />
      <TodoList />
    </div>
  )
}