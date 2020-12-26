import React, { useState } from 'react';

type TextFieldProps = {
  onKeyPress(e: React.KeyboardEvent<HTMLInputElement>, todoInput: string): void;
};
function TextField({ onKeyPress }: TextFieldProps) {
  const [todoInput, setTodoInput] = useState<string>('');

  return (
    <div className="field">
      <div className="control">
        <input
          className="input is-danger"
          type="text"
          placeholder="Enter TODO"
          onKeyPress={(e) => onKeyPress(e, todoInput)}
          onChange={(event) => setTodoInput(event.target.value)}
        />
      </div>
    </div>
  );
}

export default TextField;
