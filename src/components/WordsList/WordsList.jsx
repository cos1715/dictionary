import React, { Component } from "react";
import PropTypes from 'prop-types';
import { toast } from "react-toastify";
import Zoom from 'react-reveal/Zoom';

import WordPlate from "../WordPlate";

import "./WordsList.css";

class WordsList extends Component {
  constructor(props) {
    super(props);
    const { progress } = this.props;
    const cloneLearned = progress.learned.map(item => ({ ...item }));
    const cloneLeftToLearn = progress.leftToLearn.map(item => ({ ...item }));
    this.wordsToLearn = this.getWordsToLearn(progress.leftToLearn);
    this.cloneProgress = {
      leftToLearn: cloneLeftToLearn,
      learned: cloneLearned
    };
  }

  nextWords = () => {
    const { progress, learnedNewWord } = this.props;

    this.wordsToLearn = this.getWordsToLearn(progress.leftToLearn);
    learnedNewWord(this.cloneProgress);
  }

  markAsLearned = word => {
    const { learnedNewWord } = this.props;
    const { leftToLearn, learned } = this.cloneProgress;

    if (!learned.includes(word)) {
      const index = leftToLearn.findIndex(item => item.eng === word.eng);

      leftToLearn.splice(index, 1);
      learned.push(word);
      toast.info('Added to vocabulary');
      learnedNewWord(this.cloneProgress);
    }
  }

  getWordsToLearn = words => {
    const wordsToLearn = [];
    const num = Math.floor(Math.random() * words.length) + 1;
    const numberToDisplay = num > 10 ? 10 : num;
    const indexes = new Set();

    while (indexes.size !== numberToDisplay) {
      indexes.add(Math.floor(Math.random() * words.length));
    };
    indexes.forEach(i => {
      return wordsToLearn.push(words[i]);
    });
    return wordsToLearn;
  }

  renderWords = () => {
    return this.wordsToLearn.map(element => (
      <Zoom>
        <button className="word-plate" onClick={() => { this.markAsLearned(element) }} key={`word-list-${element.eng}`}>
          <WordPlate element={element} />
        </button>
      </Zoom >
    ));
  }

  render() {
    const { progress } = this.props;

    if (!progress.leftToLearn.length) {
      return <h1>Guess you learned all the words <i class="fas fa-award"></i></h1>
    } else {
      return (
        <div>
          <div className="div-words-plate">
            {this.renderWords()}
          </div>
          <div className="div-words-btn">
            <button className="btn-mark btn-next-words" onClick={this.nextWords}>Next Words</button>
          </div>
        </div>
      );
    }
  }
}

WordsList.propTypes = {
  learnedNewWord: PropTypes.func,
  progress: PropTypes.object
};

export default WordsList;