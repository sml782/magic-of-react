import React, { Component } from "react";
import { bindActionCreators } from "./Redux";

const ValueContext = React.createContext();

export const connect = (
  mapStateToProps = state => state,
  mapDispatchToProps,
  mergeProps,
) => WrappedComponent => {
  return class extends Component {
    // 此时组件的所有生命周期都能获得this.context
    static contextType = ValueContext;

    constructor(props) {
      super(props);
      this.state = {
        props: {}
      };
    }
    componentDidMount() {
      const { subscribe } = this.context;
      // console.log(this)
      this.update();
      // 订阅
      subscribe(() => {
        this.update();
      });
    }

    update = () => {
      const { getState, dispatch } = this.context;
      //  getState获取当前store的state
      let stateProps = mapStateToProps(getState());
      let dispatchProps;
      // mapDispatchToProps Object/Function
      if (typeof mapDispatchToProps === "object") {
        dispatchProps = bindActionCreators(mapDispatchToProps, dispatch);
      } else if (typeof mapDispatchToProps === "function") {
        dispatchProps = mapDispatchToProps(dispatch, this.props);
      } else {
        // 默认
        dispatchProps = { dispatch };
      }
      let newProps = {
        ...stateProps,
        ...dispatchProps,
        ...this.props,
      }
      if (typeof mergeProps === 'function') {
        newProps = mergeProps(stateProps, dispatchProps, this.props);
      }
      this.setState({ props: newProps });
    };
    render() {
      console.log("this.context", this.context); //sy-log
      console.log('this.state', this.state);
      return (
        <WrappedComponent
          {...this.state.props}
          // {...this.props}
        />
      );
    }
  };
};

export class Provider extends Component {
  render() {
    const { store } = this.props;
    return (
      <ValueContext.Provider value={store}>
        {this.props.children}
      </ValueContext.Provider>
    );
  }
}
