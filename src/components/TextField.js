import React, { useState } from 'react';

function TextField({ onKeyPress }) {
  const [todo, setTodo] = useState('');

  return (
    <div className="field">
      <div className="control">
        <input
          className="input is-danger"
          type="text"
          placeholder="Enter TODO"
          onKeyPress={(e) => onKeyPress(e, todo)}
          onChange={(event) => setTodo(event.target.value)}
        />
      </div>
    </div>
  );
}

export default TextField;
