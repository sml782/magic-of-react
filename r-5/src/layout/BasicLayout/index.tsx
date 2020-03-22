import React, { Component, ComponentProps } from 'react';
import classnames from 'classnames';
import { Route } from 'react-router-dom';
import TopBar from '../../components/TopBar';
import BottomNav from '../../components/BottomNav';
import { RRprops } from '../../Routes';

import "./index.scss";

type Iprops = RRprops;

export default class BasicLayout extends Component<Iprops> {
  componentDidMount() {
    const {
      title = "默认",
      // shortIcon = "https://store-images.s-microsoft.com/image/apps.64108.9007199266248398.f50070aa-ca14-4881-9e29-fb874435dc3d.a620dd2f-083d-4523-bdd5-d50a527956d4"
    } = this.props;
    document.title = title;
    // (document.getElementById("shortIcon") as HTMLElement).href = shortIcon;
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  render() {
    const { children, title, path, component } = this.props;
    // return (
    //   <>
    //     <Route component={BottomNav} />
    //     <Route path={path} component={component} />
    //   </>
    // );
    return (
      <div className={classnames('basicLayout')}>
        {/* <TopBar title={title} /> */}
        <article>{children}</article>
        {/* <BottomNav /> */}
      </div>
    );
  }
}
