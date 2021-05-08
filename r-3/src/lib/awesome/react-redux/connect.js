import React from 'react';
import ValueContext from './context';
import { bindActionCreators } from '../../Redux';

const connect = (
  mapStateToProps = state => state,
  mapDispatchToProps,
  mergeProps,
) => {
  return (OriginalComponent) => {
    return class Connect extends React.Component {

      static displayName = (() => {
        const originalDisplayName = OriginalComponent.displayName || OriginalComponent.name;
        if (!originalDisplayName) {
          return 'Connect';
        }
        return `Connect(${originalDisplayName})`;
      })();

      static contextType = ValueContext;

      constructor(props) {
        super(props);

        this.state = {
          thenProps: {
            ...this.props,
          },
        };
      }

      componentDidMount() {
        console.log(this);

        const { subscribe } = this.context;
        this.update();
        subscribe(() => {
          this.update();
        });
      }

      update = () => {
        const { dispatch, getState } = this.context;

        // store 值
        const stateProps = mapStateToProps(getState(), this.props);

        // mapDispatchToProps Object/Function
        let dispatchProps = { dispatch };
        const dispatchType = typeof mapDispatchToProps;
        if (dispatchType === 'object') {
          dispatchProps = bindActionCreators(mapDispatchToProps, dispatch);
        } else if (dispatchType === 'function') {
          dispatchProps = mapDispatchToProps(dispatch, this.props);
        }

        // mergeProps
        let newProps = {
          ...stateProps,
          ...dispatchProps,
          ...this.props,
        };
        if (typeof mergeProps === 'function') {
          newProps = mergeProps(stateProps, dispatchProps, this.props);
        }

        this.setState({
          thenProps: newProps,
        });
      }

      render() {
        const { thenProps } = this.state;
        return (
          <OriginalComponent {...thenProps} />
        );
      }
    }
  }
}

export default connect;
