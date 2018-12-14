import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import Zoom from 'react-reveal/Zoom';

import Header from "../../components/Header";
import SideBar from "../../components/Sidebar";
import WordPlate from "../../components/WordPlate";

import "./MyVocabulary.css";

class MyVocabulary extends Component {
  renderVocabularyWords = learned => {
    if (!learned.length) {
      return (
        <div className="notify-msg">
          <h1>Looks like you didn't learned anything</h1>
        </div>
      );
    } else {
      return learned.map(element => (
        <Zoom key={`vocabulary-list-${element.eng}`}>
          <div className="word-plate" >
            <WordPlate element={element} />
          </div>
        </Zoom>
      ));
    }
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
              {
                this.renderVocabularyWords(progress.learned)
              }
            </div>
          </main>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    progress: state.progress
  };
}

MyVocabulary.propTypes = {
  progress: PropTypes.object
};

export default connect(
  mapStateToProps
)(MyVocabulary);
