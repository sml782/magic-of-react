// import React from 'react';
// import ReactDOM from 'react-dom';
import React from './sreact';
// import ReactDOM from './sreact/react-dom';
import Component from './sreact/component';
import logo from './logo.svg';
import './App.css';

function FunctionComponent({name}) {
  return (
    <div className="border function">
      hello, {name}
      <button onClick={() => console.log("omg")}>click</button>
    </div>
  );
}

class ClassComponent extends Component {
  render() {
    const {name} = this.props;
    return (<div className="border function">hello, {name}</div>);
  }
}

const Jsx = () => (
  <div className="border">
    <p>这是一个文本</p>
    <a href="https://www.baidu.com/">666</a>
    <div className="border">
      <h5>hello</h5>
    </div>
    <FunctionComponent name="function" />
    <ClassComponent name="class" />
    <ClassComponent />
    <>
      <h5>文本1</h5>
      <h5>文本2</h5>
    </>

    {[1, 2, 3].map(item => {
      return (
        <div className="border" key={item}>
          <p>{item}</p>
          <p>{item}</p>
        </div>
      );
    })}
  </div>
);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Jsx />
    </div>
  );
}

export default App;
