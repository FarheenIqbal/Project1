import React from 'react';

type allPropType = {
  allHandler(): void;
};
function AllButton({ allHandler }: allPropType) {
  return (
    <div className="column is-4">
      <button className="button" onClick={allHandler}>
        All
      </button>
    </div>
  );
}

export default AllButton;
