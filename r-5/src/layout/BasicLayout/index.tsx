import React, { Component } from 'react';
import classnames from 'classnames';
import { RouteProps } from 'react-router-dom';
// import TopBar from '../../components/TopBar';
// import BottomNav from '../../components/BottomNav';
import './index.scss';

interface Iprops extends RouteProps {
  className?: string;
  title?: string;
};

export default class BasicLayout extends Component<Iprops> {
  componentDidMount() {
    const { title = '默认' } = this.props;
    document.title = title;
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
