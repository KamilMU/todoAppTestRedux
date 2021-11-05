import React from 'react';
import './styles.scss';

const checkboxes = [
  { name: 'open', alias: 'открытые' },
  { name: 'inWork', alias: 'в работе' },
  { name: 'solved', alias: 'решенные' }
];

export function Filters({ onFilterChange }) {
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