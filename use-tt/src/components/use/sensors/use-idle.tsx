import React from 'react';
import { useIdle } from 'react-use';

/**
 * React 状态钩子，用于追踪页面上的用户是否空闲。
 *
 * useIdle(ms, initialState);
 *
 * ms — 考虑使用空闲时间的毫秒时间, 默认为 60e3 — 1分钟。
 * initialState — 是否考虑用户初始空闲，默认为 false。
 */

const Demo: React.FC= () => {
  const isIdle = useIdle(3e3);

  return (
    <div>
      <div>User is idle: {isIdle ? 'Yes 😴' : 'Nope'}</div>
    </div>
  );
};

export default Demo;
