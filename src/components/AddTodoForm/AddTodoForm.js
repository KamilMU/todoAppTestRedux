import React, { useState } from 'react';
import './styles.scss';
import { addTodo } from '../../store/actions';
import { useDispatch } from 'react-redux';
import { format } from 'date-fns';

export function AddTodoForm() {
  // const [inputTittle, setInputTittle] = useState('');
  // const [inputText, setInputText] = useState('');
  const [inputValues, setInputValues] = useState({
    title: '',
    text: ''
  });
  const dispatch = useDispatch();

  function onFormSubmit(e) {
    e.preventDefault();
    if (inputValues.title !== '' && inputValues.text !== '') {
      dispatch(addTodo({
        id: Date.now(),
        title: inputValues.title,
        text: inputValues.text,
        status: "open",
        date: format(new Date(), "dd/MM/yyyy(HH:mm)")
      }));
    }
    setInputValues({
      ...inputValues,
      title: '',
      text: ''
    });
  }

  function onInputChange(e) {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className={'add-todo-container'}>
      <h1>Add Todo</h1>
      <form onSubmit={onFormSubmit}>
        <input
          value={inputValues.title}
          name='title'
          autoFocus
          placeholder='Todo title'
          onChange={onInputChange}
        />
        <textarea
          value={inputValues.text}
          name='text'
          placeholder='Todo text...'
          onChange={onInputChange}
        />
        <button type="submit">
          Добавить Todo
        </button>
      </form>
    </div>
  );
}