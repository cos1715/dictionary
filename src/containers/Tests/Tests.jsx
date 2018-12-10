import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';

import Header from "../../components/Header";
import SideBar from "../../components/Sidebar";
import WordPlate from "../../components/WordPlate";

import "./Tests.css";

class Tests extends Component {
  render() {
    const { progress } = this.props;
    const msg = 'Looks like you didn\'t learned anything';
    // const { arr, msg, key, func, className } = props;

    return (
      <div className="app">
        <Header />
        <div className="app-wrapper">
          <SideBar />
          <main className="app-main">
            <div className="div-words-plate">
              <WordPlate arr={progress.learned} msg={msg} key="Tests" func={null} className="hide"/>
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

Tests.propTypes = {
  progress: PropTypes.object
};

export default connect(
  mapStateToProps
)(Tests);
