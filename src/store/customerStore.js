import { reducer } from "./reducer";
const createStore = (reducer) => {
  let state;
  let listeners = [];
  const subscribe = (listener) => {
    listeners.push(listener);
  };
  function dispatch(action) {
    state = reducer(state, action);
    for (let listen of listeners) {
      listen();
    }
  }
  const getState = () => state;

  return {
    getState,
    dispatch,
    subscribe,
  };
};

export default createStore(reducer);
