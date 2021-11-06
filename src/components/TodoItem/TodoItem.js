import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTodo } from '../../store/actions';
import './styles.scss';

export function TodoItem({ todo, deleteTodo, doneTodo, saveEditedTodo }) {
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
                onClick={doneTodo}
                style={{
                  textDecoration: todo.status === 'done' && "line-through"
                }}>
                {todo.title}
              </b>)
              : (
                <input value={inputValues.title} name="title" onChange={onInputChange} />
              )}
            {todo.status === 'inWork' && (<span className={'inWork'}>in work!</span>)}
            {todo.status === 'open' && (<span className={'open'}>open</span>)}
          </div>
          {!isEditBtnClicked ? (
            <div style={{
              textDecoration: todo.status === 'done' && "line-through"
            }}>
              {todo.text}
            </div>) : (
            <textarea
              value={inputValues.text}
              name="text"
              onChange={onInputChange}
            />)}
        </div>
        <div className="todos__btns">
          {!isEditBtnClicked && <button onClick={() => setISEditBtnClicked(true)}>
            Edit
          </button>}
          {!isEditBtnClicked && <button onClick={doneTodo}
            disabled={todo.status === 'done'}
            className={todo.status === 'done' ? 'done' : 'doneBtn'}>
            Done
          </button>}
          {!isEditBtnClicked && <button onClick={deleteTodo}>
            Delete
          </button>}
          {isEditBtnClicked && <button onClick={saveEditedTodo}>Save</button>}
        </div>
      </div>
    </li>
  )
}