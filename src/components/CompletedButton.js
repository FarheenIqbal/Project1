import React from 'react';

function CompletedButton({ completedHandler }) {
  return (
    <div className="column is-4">
      <button className="button" onClick={completedHandler}>
        Completed
      </button>
    </div>
  );
}

export default CompletedButton;
