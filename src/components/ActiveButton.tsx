import React from 'react';

type activePropType = {
  activeHandler(): void;
};

function ActiveButton({ activeHandler }: activePropType) {
  return (
    <div className="column is-4">
      <button className="button" onClick={activeHandler}>
        Active
      </button>
    </div>
  );
}

export default ActiveButton;
