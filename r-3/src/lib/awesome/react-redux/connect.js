import React from 'react';
import ValueContext from './context';

const { Consumer } = ValueContext;

const connect = (
  mapStateToProps = state => state,
  mapDispatchToProps,
  mergeProps,
) => {
  return function (
    <Consumer>
      {(value) => {

      }}
    </Consumer>
  );
}

export default connect;
