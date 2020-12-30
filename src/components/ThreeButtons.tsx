import React from 'react';
import { ButtonType } from '../App';

type ThreeButtonsProp = {
  handleButton(current: ButtonType): void;
};
function ThreeButtons({ handleButton }: ThreeButtonsProp) {
  return (
    <div className="columns">
      <div className="column is-4">
        <button className="button" onClick={() => handleButton('All')}>
          All
        </button>
      </div>
      <div className="column is-4">
        <button className="button" onClick={() => handleButton('Active')}>
          Active
        </button>
      </div>
      <div className="column is-4">
        <button className="button" onClick={() => handleButton('Completed')}>
          Completed
        </button>
      </div>
    </div>
  );
}

export default ThreeButtons;
