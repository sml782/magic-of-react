import React from 'react';
import { BrowserRouter as Router, Route, Switch, RouteProps } from "react-router-dom";
import HomePage from "../pages/HomePage/";
import LoginPage from "../pages/LoginPage/";
import UserPage from "../pages/UserPage/";
import TopBar from '../components/TopBar';
import BottomNav from "../components/BottomNav/";
import BasicLayout from "../layout/BasicLayout";
import PrivateRoute from "./PrivateRoute";

const bottomNav = {};

export interface RRprops extends RouteProps {
  title?: string;
  shortIcon?: string;
}

const routes: RRprops[] = [
  {
    path: "/",
    title: "首页",
    exact: true,
    component: HomePage
  },
  {
    path: "/login",
    title: "登录",
    component: LoginPage
  },
  {
    path: "/user",
    title: "用户中心",
    component: UserPage
  }
];

// todo 实现topBar的顶部title显示，注意优化，不要重复渲染
const Routes: React.FC = () => {
  return (
    <Router>
      {/* 能获取到history location match吗，来自context */}
      {/* <BottomNav /> */}
      <Route routes={routes} component={TopBar} />
      <Route component={BottomNav} />
      <Switch>
        {routes.map(item => {
          return (
            <Route
              key={item.path as string}
              path={item.path}
              title={item.title}
              component={item.component}
            />
          );
        })}
      </Switch>
    </Router>
  );
}

export default Routes;
