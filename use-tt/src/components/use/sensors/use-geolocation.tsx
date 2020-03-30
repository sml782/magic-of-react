import React from 'react';
import { useGeolocation } from 'react-use';

const Demo: React.FC= () => {
  const state = useGeolocation();

  return (
    <div>
      <h6>位置信息：</h6>
      <pre>
        {JSON.stringify(state, null, 2)}
      </pre>
    </div>
  );
};

export default Demo;
