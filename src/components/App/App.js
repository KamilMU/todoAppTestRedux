import React, { useState } from 'react';
import './styles.scss';
import Header from '../Header';
import AddTodoForm from '../AddTodoForm';
import TodoList from '../TodoList';
import Filters from '../Filters';
import SearchTodoForm from '../SearchTodoForm';
import Modal from '../Modal';
import Button from '../Button';

export function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <div className="app">
      <Header />
      <SearchTodoForm />
      <Button
        title="+add todo"
        onClick={openModal} />
      <Modal
        isModalActive={isModalOpen}
        closeModal={closeModal}>
        <AddTodoForm closeModal={closeModal} />
      </Modal>
      <Filters />
      <TodoList />
    </div>
  )
}