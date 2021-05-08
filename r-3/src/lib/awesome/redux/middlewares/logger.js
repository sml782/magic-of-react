
export default function logger({ getState, originalDispatch }) {
  return dispatch => action => {
    console.log(`调用了: ${action.type}`);
    return dispatch(action);
  };
}
