import React from 'react';

import "./WordPlate.css";

const WordPlate = props => {
  const { arr, key, func, className } = props;

  return arr.map(element => (
    <div className="word-plate" key={`${key}-${element.eng}`}>
      <div className="word-main">
        <p>word: {element.eng}</p>
        <p>translation: {element.ukr}</p>
        <p>definition: {element.definition}</p>
      </div>
      <div className={className}>
        <button
          className={"btn-mark"}
          onClick={(event) => { func(event, element) }}><i className="fas fa-check"></i></button>
      </div>
    </div >
  ));
};

export default WordPlate;
