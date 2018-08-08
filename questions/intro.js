import React from 'react';
import { connect } from 'react-redux';

const intro = props => (
  <React.Fragment>
    <p className="s4">
      Fridge Freud makes sense of your darkest psychosexual proclivities, and
      then recommends places to eat.
    </p>
    <button className="flr" onClick={props.nextQuestion}>
      Sure, I'm hungry >
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
    }
  };
}

export default connect(
  msp,
  mdp
)(intro);
