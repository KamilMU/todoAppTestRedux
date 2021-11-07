import React from 'react';
import { useDispatch } from 'react-redux';
import { filterTodosByStatus } from '../../store/actions';
import './styles.scss';

const checkboxes = [
  { name: 'open', alias: 'открытые' },
  { name: 'inWork', alias: 'в работе' },
  { name: 'done', alias: 'решенные' }
];

export function Filters() {
  const dispatch = useDispatch();

  function onFilterChange({ target }) {
    dispatch(filterTodosByStatus(target.name, target.checked));
  }

  return (
    <div className={'filters'}>
      {checkboxes.map((checkbox, index) => (
        <label
          className={'checkboxContainer'}
          key={index}>
          {checkbox.alias}
          <input
            type="checkbox"
            name={checkbox.name}
            onChange={onFilterChange}
          />
          <span className={'checkmark'}></span>
        </label>
      ))}
    </div>
  );
}