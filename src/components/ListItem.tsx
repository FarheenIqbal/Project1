import React, { useState } from 'react';
import DeleteButton from './DeleteButton';
import { TodoType } from '../App';

type ListItemPropType = {
  todo: TodoType;
  onClick(todo: TodoType): void;
  deleteHandler(todo: TodoType): void;
  handleEditedTodo(editedTodo: TodoType): void;
};

function ListItem({
  todo,
  onClick,
  deleteHandler,
  handleEditedTodo,
}: ListItemPropType) {
  const style = todo.completed
    ? { textDecoration: 'line-through', opacity: '0.5' }
    : {};

  const [isRadio, setIsRadio] = useState<boolean>(true);
  const [isTextBox, setIsTextBox] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  function showTextBox(event: React.MouseEvent<HTMLDivElement>) {
    setIsRadio(false);
    setIsTextBox(true);
  }

  function showRadioBox(): void {
    setIsRadio(true);
    setIsTextBox(false);
    handleEditedTodo(editedTodo);
  }

  const [editedTodo, setEditedTodo] = useState<TodoType>(todo);

  return (
    <div
      className="box is-small m-0 p-0 box-padding-0"
      onDoubleClick={(event) => showTextBox(event)}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      <div className="columns">
        <div className="column is-10 is-small">
          {isRadio && (
            <label className="radio" style={style}>
              <input
                key={todo.key}
                type="radio"
                name="answer"
                onClick={() => onClick(todo)}
              />
              {todo.todo}
            </label>
          )}
          {isTextBox && (
            <div className="field">
              <div className="control">
                <input
                  key={todo.key}
                  className="input"
                  type="text"
                  placeholder={todo.todo}
                  onBlur={showRadioBox}
                  onChange={(event) =>
                    setEditedTodo({ ...editedTodo, todo: event.target.value })
                  }
                  onKeyPress={(event) => {
                    if (event.key === 'Enter') {
                      showRadioBox();
                    }
                  }}
                />
              </div>
            </div>
          )}
        </div>
        <div className="column is-small">
          {isVisible && <DeleteButton todo={todo} onClick={deleteHandler} />}
        </div>
      </div>
    </div>
  );
}
export default ListItem;
