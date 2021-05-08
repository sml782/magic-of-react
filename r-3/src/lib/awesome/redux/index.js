
export function createStore(reducer, enhancer) {
  let currentState = void 0;
  let listener = [];

  function getState() {
    return currentState;
  }

  function dispatch() {

  }
}

export function applyMiddleware() {

}

export function compose(...funcs) {
  if (funcs.length === 0) {
    return (...args) => args;
  }
  if (funcs.length === 1) {
    return funcs[0];
  }
  return funcs.reduce((a, b) => (...args) => a(b(args)));
}

function bindActionCreator() {

}

export function bindActionCreators() {

}
