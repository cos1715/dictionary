import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Header from "../../components/Header";
import SideBar from "../../components/Sidebar";
import WordsList from "../../components/WordsList";
import { learnedNewWord } from "../../actions/actionProgress";


import "./Home.css";

class Home extends Component {
  render() {
    const { progress, learnedNewWord } = this.props;
    return (
      <div className="app">
        <Header />
        <div className="app-wrapper">
          <SideBar />
          <main className="app-main">
            <WordsList progress={progress} learnedNewWord={learnedNewWord} />
          </main>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      learnedNewWord: learnedNewWord
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
