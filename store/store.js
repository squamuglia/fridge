import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

const defaultState = {
  user_id: null,
  token: null,
  logged_in: false,
  username: null,
  url: 'http://localhost:3000'
};

export const actionTypes = {
  TICK: 'TICK',
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  RESET: 'RESET'
};

// REDUCERS
export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.TICK:
      return Object.assign({}, state, {
        lastUpdate: action.ts,
        light: !!action.light
      });
    case actionTypes.INCREMENT:
      return Object.assign({}, state, {
        count: state.count + 1
      });
    case actionTypes.DECREMENT:
      return Object.assign({}, state, {
        count: state.count - 1
      });
    case actionTypes.RESET:
      return Object.assign({}, state, {
        count: defaultState.count
      });
    default:
      return state;
  }
};

// ACTIONS
export const serverRenderClock = isServer => dispatch => {
  return dispatch({ type: actionTypes.TICK, light: !isServer, ts: Date.now() });
};

export const startClock = dispatch => {
  return setInterval(() => {
    // Dispatch `TICK` every 1 second
    dispatch({ type: actionTypes.TICK, light: true, ts: Date.now() });
  }, 1000);
};

export const incrementCount = () => dispatch => {
  return dispatch({ type: actionTypes.INCREMENT });
};

export const decrementCount = () => dispatch => {
  return dispatch({ type: actionTypes.DECREMENT });
};

export const resetCount = () => dispatch => {
  return dispatch({ type: actionTypes.RESET });
};

export function initializeStore(initialState = defaultState) {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
}
