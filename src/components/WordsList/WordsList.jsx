import React, { Component } from "react";

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

    learnedNewWord(this.cloneProgress);
    this.wordsToLearn = this.getWordsToLearn(progress.leftToLearn);
  }

  markAsLearned = (event, word) => {
    const { learnedNewWord } = this.props;
    const { leftToLearn, learned } = this.cloneProgress;

    if (!learned.includes(word)) {
      const index = leftToLearn.findIndex(item => item.eng === word.eng);

      leftToLearn.splice(index, 1);
      learned.push(word);
      event.target.classList.add("btn-mark-sellected")
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
    return this.wordsToLearn.map((element, index) => (
      <div className="word-plate" key={`${index}-${element.eng}`}>
        <div className="word-main">
          <p>word: {element.eng}</p>
          <p>translation: {element.ukr}</p>
          <p>definition: {element.definition}</p>
        </div>
        <div className="word-mark">
          <button
            className={"btn-mark"}
            onClick={(event) => { this.markAsLearned(event, element) }}><i className="fas fa-check"></i></button>
        </div>
      </div>
    ));
  }


  render() {
    const { progress } = this.props;

    if (!progress.leftToLearn.length) {
      return <h1>Guess you learned all the words <i class="fas fa-award"></i></h1>
    } else {
      return (
        <div>
          <div className="div-words-plate">{this.renderWords()}</div>
          <div className="div-words-btn">
            <button className="btn-mark btn-next-words" onClick={this.nextWords}>Next Words</button>
          </div>
        </div>
      );
    }
  }
}

export default WordsList;