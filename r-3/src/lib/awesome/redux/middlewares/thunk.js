
export default function thunk({ getState, originalDispatch }) {
  return dispatch => action => {
    // action 可以是对象 还可以是函数 ，那不同的形式，操作也不同
    if (typeof action === 'function') {
      return action(dispatch, getState);
    }
    return dispatch(action);
  };
}
