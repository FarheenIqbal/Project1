import React from 'react';
import AllButton from './AllButton';
import ActiveButton from './ActiveButton';
import CompletedButton from './CompletedButton';

type ThreeButtonsProp = {
  allHandler(): void;
  activeHandler(): void;
  completedHandler(): void;
};
function ThreeButtons({
  allHandler,
  activeHandler,
  completedHandler,
}: ThreeButtonsProp) {
  return (
    <div className="columns">
      <AllButton allHandler={allHandler} />
      <ActiveButton activeHandler={activeHandler} />
      <CompletedButton completedHandler={completedHandler} />
    </div>
  );
}

export default ThreeButtons;
