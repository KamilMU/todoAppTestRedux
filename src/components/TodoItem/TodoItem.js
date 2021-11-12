import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTodo } from '../../store/actions';
import './styles.scss';

export function TodoItem({ todo, deleteTodo, changeTodoStatus, saveEditedTodo }) {
  const [inputValues, setInputValues] = useState({
    title: todo.title,
    text: todo.text
  });
  const [isEditBtnClicked, setISEditBtnClicked] = useState(false);
  const dispatch = useDispatch();

  function onInputChange(e) {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value
    })
  }

  function saveEditedTodo() {
    if (inputValues.title !== '' && inputValues.text !== '') {
      dispatch(editTodo(todo.id, inputValues.title, inputValues.text));
    }

    setISEditBtnClicked(false);
  }

  return (
    <li className={'todos__todo-container'} key={todo.id}>
      <span className={'todos__date'}>{todo.date}</span>
      <div className={'todos__todo'}>
        <div className={'todos__left-container'}>
          <div className={'todos__tittle'}>
            {!isEditBtnClicked ? (
              <b
                className={todo.status === 'done' ? 'line-through' : ''}>
                {todo.title}
              </b>)
              : (
                <input value={inputValues.title} name='title' onChange={onInputChange} />
              )}
            {!isEditBtnClicked && todo.status === 'inWork' && (<span className={'inWork-status'}>in work!</span>)}
            {!isEditBtnClicked && todo.status === 'open' && (<span className={'open-status'}>open</span>)}
            {!isEditBtnClicked && todo.status === 'done' && (<span className={'done-status'}>done ✔️</span>)}
          </div>
          {!isEditBtnClicked ? (
            <div className={todo.status === 'done' ? 'line-through' : ''}>
              {todo.text}
            </div>) : (
            <textarea
              value={inputValues.text}
              name="text"
              onChange={onInputChange}
            />)}
        </div>
        <div className="todos__btns">
          {!isEditBtnClicked && (
            <button
              title="Edit TodoList"
              onClick={() => setISEditBtnClicked(true)}>
              ✏️
            </button>)}
          {!isEditBtnClicked && (
            <button
              onClick={changeTodoStatus}
              title="Make it done"
              name="done"
              disabled={todo.status === 'done'}
              className={todo.status === 'done' ? 'done' : 'doneBtn'}>
              ✔️
            </button>)}
          {!isEditBtnClicked && (
            <button
              onClick={changeTodoStatus}
              title="Make todo in progress"
              name="inWork"
              disabled={todo.status === 'inWork'}
              className={todo.status === 'inWork' ? 'inWork' : 'inWorkBtn'}>
              🚧
            </button>)}
          {!isEditBtnClicked && (
            <button
              className="deleteBtn"
              onClick={deleteTodo}
              title="Delete Todo">
              ❌
            </button>)}
          {isEditBtnClicked && (
            <button
              className="saveBtn"
              onClick={saveEditedTodo}>
              Save
            </button>)}
        </div>
      </div>
    </li>
  )
}