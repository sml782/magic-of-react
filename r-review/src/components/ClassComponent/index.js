import React from 'react';

import './index.css';

class ClassComponent extends React.Component {
  render() {
    return (
      <ul className="list">
        <li className="item">第一</li>
        <li className="item">第一</li>
        <li className="item">第一</li>
      </ul>
    );
  }
}

export default ClassComponent;
