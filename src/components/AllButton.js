import React from 'react';

function AllButton({ allHandler }) {
  return (
    <div className="column is-4">
      <button className="button" onClick={allHandler}>
        All
      </button>
    </div>
  );
}

export default AllButton;
