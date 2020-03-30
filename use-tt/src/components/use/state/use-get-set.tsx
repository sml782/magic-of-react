import React, { useState } from 'react';
import { useGetSet } from 'react-use';

// React 状态钩子，通过返回状态 getter 函数代替它本身的状态，从而防止在嵌套函数中使用状态时出现的细微错误。

// 以下示例使用 useGetSet 在每次单击1秒后递增一个数字。

// const Demo: React.FC= () => {
//   const [get, set] = useGetSet(0);
//   const onClick = () => {
//     setTimeout(() => {
//       set(get() + 1);
//     }, 1000);
//   };

//   return (
//     <button onClick={onClick}>Clicked: {get()}</button>
//   );
// };

// 如果你使用常规的 useState 钩子以一种普简单的方式来做这个示例，当你快速多次单击，计数器将不会正确递增。

const Demo: React.FC= () => {
  const [cnt, set] = useState(0);
  const onClick = () => {
    setTimeout(() => {
      set(cnt + 1);
    }, 1000);
  };

  return (
    <button onClick={onClick}>Clicked: {cnt}</button>
  );
};

export default Demo;
