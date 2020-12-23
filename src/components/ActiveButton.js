import React from 'react';

function ActiveButton({ activeHandler }) {
  return (
    <div className="column is-4">
      <button className="button" onClick={activeHandler}>
        Active
      </button>
    </div>
  );
}

export default ActiveButton;
