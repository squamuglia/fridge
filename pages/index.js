import React, { Component } from 'react';
import Head from '../components/head';
import Nav from '../components/nav';
import Intro from '../questions/intro';
import Openness from '../questions/openness';
import { connect } from 'react-redux';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // getInitialProps({ pathname, query }) {
  //   return { custom: 'custom' };
  // }

  getQuestion = () => {
    switch (this.props.question) {
      case 1:
        return <Intro />;

      case 2:
        return <Openness />;

      default:
        return <Intro />;
    }
  };

  render() {
    return (
      <React.Fragment>
        <Head title="Fridge Freud" />
        <Nav />
        <div className="gutter f fw aic jcc fill abs">
          <div className="fa x m1">
            <div className="x">{this.props.question}/10</div>
            {this.getQuestion()}
          </div>
          <p>{this.props.custom}</p>
        </div>
      </React.Fragment>
    );
  }
}

function msp(state) {
  return {
    url: state.url,
    user_id: state.user_id,
    token: state.token,
    logged_in: state.logged_in,
    username: state.username,
    question: state.question
  };
}

function mdp(dispatch) {
  return {
    nextQuestion: questionData => {
      dispatch({ type: 'NEXT_QUESTION', payload: questionData });
    },
    previousQuestion: questionData => {
      dispatch({ type: 'PREVIOUS_QUESTION', payload: questionData });
    }
  };
}

export default connect(
  msp,
  mdp
)(Home);
