import React from 'react';
import { useBattery } from 'react-use';

// React 传感器钩子，用于追踪电池状态。

const Demo: React.FC= () => {
  const state = useBattery();

  return (
    <div>
      <h6>电池状态：</h6>
      <pre>
        {JSON.stringify(state, null, 2)}
      </pre>
    </div>
  );
};

export default Demo;
