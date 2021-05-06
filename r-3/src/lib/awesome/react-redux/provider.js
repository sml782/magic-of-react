import React from 'react';
import ValueContext from './context';

const { Provider } = ValueContext;

const ReduxProvider = React.memo(({ store, children }) => {
  return (
    <Provider value={store}>
      {children}
    </Provider>
  );
});

export default ReduxProvider;
