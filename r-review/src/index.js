import React from './lib/react';
import ReactDOM from './lib/react-dom';
// import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';
import FunctionComponent from './components/FunctionComponent';
import ClassComponent from './components/ClassComponent';
// import reportWebVitals from './reportWebVitals';

const ele = (
  <h1
    className="ele"
    id="ele"
    style={{ color: 'red' }}
  >
    <span>666</span>
    我的天那
    <FunctionComponent />
    <ClassComponent />
  </h1>
);

console.log(ele, ele.props.children[3].type.prototype.isReactComponent);
// 'isReactComponent';

ReactDOM.render((
  ele
),
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
