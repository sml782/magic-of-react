import React, {Component} from 'react';
import { RouteProps } from 'react-router-dom';
import {connect} from 'react-redux';
import BasicLayout from '../../layout/BasicLayout';
import { RootStateMap } from '../../store';
import { UserState, UserInfo } from '../../store/user-reducer';

interface IProps extends RouteProps {
  user: UserState;
  [key: string]: any
};

export default connect(
  ({ user }: RootStateMap) => ({ user })
)(
  class UserPage extends Component<IProps> {
    render() {
      const { user } = this.props;
      const userInfo = user.userInfo as UserInfo;
      return (
        <BasicLayout
          title="用户中心"
          shortIcon="https://gw.alicdn.com/tfs/TB1OIxTcLc3T1VjSZLeXXbZsVXa-183-144.png?getAvatar=1"
        >
          <h3>UserPage</h3>
          <p>id: {userInfo.id}</p>
          <p>姓名：{userInfo.name}</p>
        </BasicLayout>
      );
    }
  }
);
