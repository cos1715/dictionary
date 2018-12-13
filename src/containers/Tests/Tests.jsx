import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from 'prop-types';
import { toast, ToastContainer } from "react-toastify";

import Header from "../../components/Header";
import SideBar from "../../components/Sidebar";
import { correctAnswer, wrongAnswer } from "../../actions/actionTest";

import "./Tests.css";

class Tests extends Component {
  getWord = (learnedWords) => {
    const index = Math.floor(Math.random() * learnedWords.length);
    return learnedWords[index];
  }

  checkTest = ({ key, target }, word) => {
    if (key === 'Enter' && target.value) {
      const { tests, progress, correctAnswer, wrongAnswer } = this.props;

      if (target.value.trim() === word.ukr) {
        const score = tests.score + 100;

        target.value = '';
        toast.success('Correct');
        this.renderTest(progress.learned);
        correctAnswer(score);
      } else {
        const lives = tests.lives - 1;

        target.value = '';
        toast.error('Wrong!');
        this.renderTest(progress.learned);
        wrongAnswer(lives);
      }
    }

  }

  renderTest = (learnedWords) => {//new component
    const word = this.getWord(learnedWords);

    //add class for fade in 
    return (
      <div className="test-plate">
        <p className="test-task">Entrer correct translation</p>
        <div className="test-desc">
          <p>eng: {word.eng}</p>
          <span>ukr: </span>
          <input type="text" className="test-input" onKeyUp={(event) => this.checkTest(event, word)} />
        </div>
      </div>
    );
  }

  render() {
    const { progress } = this.props;

    return (
      <div className="app">
        <Header />
        <div className="app-wrapper">
          <SideBar />
          <main className="app-main">
            <div className="div-words-plate">
              {!progress.learned.length ?
                <h1>Learn some words to test yourself</h1> :
                this.renderTest(progress.learned)}
            </div>
          </main>
        </div>
        <ToastContainer
          position="top-right"
          autoClose={2500}
          hideProgressBar
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange
          draggable
          pauseOnHover
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    progress: state.progress,
    tests: state.tests
  };
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      correctAnswer: correctAnswer,
      wrongAnswer: wrongAnswer
    },
    dispatch
  );
};

Tests.propTypes = {
  progress: PropTypes.object,
  tests: PropTypes.object,
  correctAnswer: PropTypes.func,
  wrongAnswer: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tests);
