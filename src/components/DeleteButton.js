import React from 'react';

function DeleteButton({ todo, onClick }) {
  return (
    <button
      className="button is-small is-danger is-outlined"
      onClick={(event) => onClick(todo.todo)}
    >
      X
    </button>
  );
}

export default DeleteButton;
