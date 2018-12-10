import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';

import Header from "../../components/Header";
import SideBar from "../../components/Sidebar";
import WordPlate from "../../components/WordPlate";

import "./MyVocabulary.css";

class MyVocabulary extends Component {
  render() {
    const { progress } = this.props;

    if (!progress.learned.length) {
      return <h1>Looks like you didn\'t learned anything</h1>
    } else {
      return (
        <div className="app">
          <Header />
          <div className="app-wrapper">
            <SideBar />
            <main className="app-main">
              <div className="div-words-plate">
                <WordPlate arr={progress.learned} key="Tests" func={null} className="hide" />
              </div>
            </main>
          </div>
        </div>
      );
    }
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
