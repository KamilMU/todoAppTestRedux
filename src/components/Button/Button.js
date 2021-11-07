import React from 'react';
import './styles.scss';

export function Button({ title, ...props }) {
  return (
    <button {...props}>
      {title}
    </button>
  )
}
