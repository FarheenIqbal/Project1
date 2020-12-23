import React, { useState } from 'react';
import DeleteButton from './DeleteButton';

function ListItem({ kkey, todo, onClick, deleteHandler, handleEditedTodo }) {
  const style = todo.completed
    ? { textDecoration: 'line-through', opacity: '0.5' }
    : {};

  const [isRadio, setIsRadio] = useState(true);
  const [isTextBox, setIsTextBox] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  function showTextBox(event) {
    setIsRadio(false);
    setIsTextBox(true);
    event.target.value = todo.todo;
  }

  function showRadioBox() {
    setIsRadio(true);
    setIsTextBox(false);
    handleEditedTodo(todo.key, editedTodo);
  }

  const [editedTodo, setEditedTodo] = useState(todo.todo);

  return (
    <div
      className="box is-small is-box-padding-0"
      onDoubleClick={(event) => showTextBox(event)}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      <div className="columns">
        <div className="column is-10 is-small">
          {isRadio && (
            <label className="radio" style={style}>
              <input
                key={kkey}
                type="radio"
                name="answer"
                onClick={() => onClick(todo.todo)}
              />
              {todo.todo}
            </label>
          )}
          {isTextBox && (
            <div className="field">
              <div className="control">
                <input
                  key={kkey}
                  className="input"
                  type="text"
                  placeholder={todo.todo}
                  onBlur={showRadioBox}
                  onChange={(event) => setEditedTodo(event.target.value)}
                  onKeyPress={(event) => {
                    if (event.key === 'Enter') {
                      console.log(event.key);
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
