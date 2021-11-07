import React from "react";
import './styles.scss';

export const Modal = ({ isModalActive, closeModal, children }) => {
  return (
    <div
      className={`modal ${isModalActive ? "active" : ""}`}
      onClick={closeModal}
    >
      <div
        className={`modal__content ${isModalActive ? "active" : ""}`}
        onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};