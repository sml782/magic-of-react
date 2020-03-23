import { createStore, combineReducers, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
import userReducer, { UserReducer, UserState } from './user-reducer';
import createSagaMiddleware from 'redux-saga';
import loginSaga from '../action/loginSaga';

export interface ReducerMap {
  user: UserReducer;
}

export interface RootStateMap {
  user: UserState;
}

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  combineReducers({ user: userReducer } as ReducerMap),
  applyMiddleware(sagaMiddleware)
  // applyMiddleware(thunk)
);

sagaMiddleware.run(loginSaga);

export default store;
