import React from 'react';
import { useSpeech } from 'react-use';

// React 用户界面钩子，用于合成说出给定字符串的人声。

const Demo: React.FC= () => {
  const state = useSpeech('Hello world!');

  return (
    <pre>
      {JSON.stringify(state, null, 2)}
    </pre>
  );
};

export default Demo;
