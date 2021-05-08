// import {createStore, applyMiddleware} from "redux";
// import { createStore, applyMiddleware } from "../lib/Redux";
import { createStore, applyMiddleware } from "../lib/awesome/redux";
import { thunk, logger } from "../lib/awesome/redux/middlewares";
// import thunk from "redux-thunk";
// import logger from "redux-logger";

// 定义修改规则
function countReducer(state = 0, action) {
  switch (action.type) {
    case "ADD":
      return state + 1;
    case "MINUS":
      return state - 1;
    default:
      return state;
  }
}

const store = createStore(countReducer, applyMiddleware(thunk, logger));

export default store;
