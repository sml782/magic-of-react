
export function createStore(reducer, enhancer) {
  let currentState = void 0;
  let listener = [];

  if (enhancer) {
    return enhancer(createStore)(reducer);
  }

  function getState() {
    return currentState;
  }

  function dispatch(action) {
    currentState = reducer(currentState, action);

    listener.forEach(item => item());
  }

  function subscribe(lis) {
    listener.push(lis);
  }

  dispatch({ type: '@INIT/REDUX' });

  return {
    getState,
    dispatch,
    subscribe,
  };
}

export function applyMiddleware(...middlewares) {
  return (createStore) => (...args) => {
    const store = createStore(...args);
    const originalDispatch = store.dispatch;
    const middleApi = {
      getState: store.getState,
      dispatch: originalDispatch,
    };
    const middlewaresChain = middlewares.map(middle => middle(middleApi));
    const newDispatch = compose(...middlewaresChain)(originalDispatch);
    return {
      ...store,
      dispatch: newDispatch,
    };
  };
}

export function compose(...funcs) {
  if (funcs.length === 0) {
    return (...args) => args;
  }
  if (funcs.length === 1) {
    return funcs[0];
  }
  return funcs.reduce((a, b) => (...args) => a(b(...args)));
}

function bindActionCreator(creater, dispatch) {
  return (...args) => dispatch(creater(...args));
}

export function bindActionCreators(creators, dispatch) {
  const actions = {};
  for (const key in creators) {
    creators[key] = bindActionCreator(creators[key], dispatch);
  }
  return actions;
}
