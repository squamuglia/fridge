import React from 'react';
import { connect } from 'react-redux';

const openness = props => (
  <React.Fragment>
    <p className="s4">Which of these do you prefer?</p>

    <button className="fll" onClick={props.previousQuestion}>
      {'< Prev'}
    </button>
    <button className="flr" onClick={props.nextQuestion}>
      Next >
    </button>
  </React.Fragment>
);

function msp(state) {
  return {
    question: state.question
  };
}

function mdp(dispatch) {
  return {
    nextQuestion: () => {
      dispatch({ type: 'NEXT_QUESTION' });
    },
    previousQuestion: () => {
      dispatch({ type: 'PREVIOUS_QUESTION' });
    }
  };
}

export default connect(
  msp,
  mdp
)(openness);
