import React from 'react';
import { TodoType } from './../App';

type deletePropType = {
  todo: TodoType;
  onClick(todo: TodoType): void;
};
function DeleteButton({ todo, onClick }: deletePropType) {
  return (
    <button
      className="button is-small is-danger is-outlined"
      onClick={(event) => onClick(todo)}
    >
      X
    </button>
  );
}

export default DeleteButton;
