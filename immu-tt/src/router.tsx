import React from 'react';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import ImmuTest from './pages/immu/immu-test';

function Ro() {
  return (
    <BrowserRouter>
      <Link to="/">首页</Link>
      <Link to="/immu">immu</Link>

      <Switch>
        <Route exact path="/" render={() => <div>'React'</div>}  />
        <Route path="/immu" component={ImmuTest}  />
      </Switch>
    </BrowserRouter>
  )
}

export default Ro;
