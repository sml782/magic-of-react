import React from 'react';
import { useHover, useHoverDirty } from 'react-use';

// useHover 接收一个 React 元素或者返回一个元素的函数，useHoverDirty 接收 React ref。
// useHover 设置 react onMouseEnter 和 onMouseLeave 事件, useHoverDirty 设置 DOM onmouseover 和 onmouseout 事件.

const Demo: React.FC= () => {
  const ref: React.MutableRefObject<HTMLDivElement | null> = React.useRef(null);
  const element = (hovered: boolean) => (
    <div ref={ref}>
      Hover me! {hovered && 'Thanks!'}
    </div>
  );
  const [hoverable, hovered] = useHover(element);
  const isHovering = useHoverDirty(ref);
  console.log(isHovering);
  return (
    <div>
      {hoverable}
      <div>{hovered ? 'HOVERED' : ''}</div>
    </div>
  );
};

export default Demo;
