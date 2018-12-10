import React, { Component } from "react";
import { connect } from "react-redux";

import Header from "../../components/Header";
import SideBar from "../../components/Sidebar";

import "./MyVocabulary.css";

class MyVocabulary extends Component {
  renderWords = (progress) => {
    console.log(progress);

    if (!progress.learned.length) {
      return <h1>Looks like you didn't learned anything</h1>
    } else {
      return progress.learned.map((element, index) => (
        <div className="word-plate" key={`${element.eng}-${index}`}>
          <div className="word-main">
            <p>word: {element.eng}</p>
            <p>translation: {element.ukr}</p>
            <p>definition: {element.definition}</p>
          </div>
        </div>
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
            <div className="div-words-plate">{this.renderWords(progress)}</div>
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

export default connect(
  mapStateToProps
)(MyVocabulary);
