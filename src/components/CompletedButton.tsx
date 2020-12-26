import React from 'react';
type completedPropType = {
  completedHandler(): void;
};
function CompletedButton({ completedHandler }: completedPropType) {
  return (
    <div className="column is-4">
      <button className="button" onClick={completedHandler}>
        Completed
      </button>
    </div>
  );
}

export default CompletedButton;
