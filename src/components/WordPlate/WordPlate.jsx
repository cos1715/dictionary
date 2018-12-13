import React from 'react';
import PropTypes from 'prop-types';

import "./WordPlate.css";

const WordPlate = props => {
  const { arr, keyWord, func, className } = props;

  return arr.map(element => (
    <div className="word-plate" key={`${keyWord}-${element.eng}`}>
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

WordPlate.propTypes = {
  arr: PropTypes.array,
  key: PropTypes.string,
  className: PropTypes.string,
  func: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func
  ])
};

export default WordPlate;
