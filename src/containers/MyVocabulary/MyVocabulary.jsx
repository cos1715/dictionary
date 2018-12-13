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

    return (
      <div className="app">
        <Header />
        <div className="app-wrapper">
          <SideBar />
          <main className="app-main">
            <div className="div-words-plate">
              {!progress.learned.length ?
                <h1>Looks like you didn't learned anything</h1> :
                <WordPlate arr={progress.learned} keyWord="Tests" func={null} className="hide" />}
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
