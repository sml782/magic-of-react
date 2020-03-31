import { PLACEMENT } from './const';
// todo 拓展视频 useState 实现update 以及 DELETIONS

// 下一个子任务
let nextUnitOfWork = null;
// work in progreess 工作中的fiber root
let workInProgressRoot = null;

// 现在的根节点
let currentRoot = null;

// 更新节点内容
function updateNode(node, props) {
  for (const key in props) {
    if (['__self', '__source'].includes(key)) {
      continue;
    }
    if (/^on/.test(key)) {
      const funcName = key.substr(2).toLocaleLowerCase();
      node.addEventListener(funcName, props[key]);
      continue;
    }
    node[key] = props[key];
  }
}

// 构建子 fiber
function iterationChild(wipFiber, children) {
  if (!wipFiber || !children || !children.length) {
    return;
  }

  // 存储上一次循环 fiber, 供存储兄弟 fiber
  let prevFiber = null;
  children.map((item, index) => {
    // if (!Array.isArray(item)) {
    //   return render(item, container);
    // }
    // return item.map((childitem) => render(childitem, container));
    const newChildFiber = {
      type: item.type,
      props: { ...item.props },
      // 真实 dom 节点
      node: null,
      // 上一次构建的 fiber, 以供比较
      base: null,
      // 父 fiber, 用于回溯
      parent: wipFiber,
      // 副作用标识
      effectTag: PLACEMENT,
    }

    if (!index) {
      // 第一个子 fiber 放入父 fiber 的 child
      wipFiber.child = newChildFiber;
    } else {
      // 挂载兄弟 fiber
      prevFiber.sibling = newChildFiber;
    }

    // 记录本地 fiber
    prevFiber = newChildFiber;
  });
}

// 更新函数组件
function updateFunctionCom(Com, props) {
  const vnode = Com(props);
  return createNode(vnode);
}

// 更新函数组件
function updateClassCom(Com, props) {
  const instance = new Com(props);
  const vnode = instance.render();
  return createNode(vnode);
}

// 创建节点
function createNode(fiber) {
  const { type: nodeType, props } = fiber;
  console.log(fiber);
  let node = null;

  switch (nodeType) {
    case 'text': {
      node = document.createTextNode('');
      break;
    }

    case 'fragment': {
      node = document.createDocumentFragment();
      break;
    }

    default:
      // if (typeof nodeType === 'function') {
      //   console.log(nodeType)
      //   // 类组件
      //   if (nodeType.prototype && nodeType.prototype.isClassComponent) {
      //     node = updateClassCom(nodeType, props);
      //     break;
      //   }

      //   // 函数组件
      //   node = updateFunctionCom(nodeType, props);
      //   break;
      // }

      // 元素组件
      node = document.createElement(nodeType);
      break;
  }

  updateNode(node, props);
  return node;
}

// 更新 原生标签 fiber
function updateHostComponent(fiber) {
  if (!fiber.node) {
    fiber.node = createNode(fiber);
  }

  const { children } = fiber;
  if (!children) {
    return;
  }

  iterationChild(fiber, children);
}


/**
 * 执行任务单元
 * 1. 执行当前任务
 * 2. 指定下一次执行任务
 */
function performUnitOfWork(nextFiber) {
  if (!nextFiber) {
    return null;
  }

  /***** 执行任务 *****/
  console.log(nextFiber);
  // 判断类型
  const { type: nodeType } = nextFiber;

  // 处理
  updateHostComponent(nextFiber);

  /***** 找下一个任务 *****/
  // 深度优先有子fiber即返回
  if (nextFiber.child) {
    return nextFiber.child;
  }

  // 没有的话看有没有下一个兄弟fiber
  let nF = nextFiber;
  while (nF) {
    // 有兄弟 fiber 直接返回
    if (nF.sibling) {
      return nF.sibling;
    }

    // 没有兄弟 fiber, 回溯到父 fiber, 然后继续寻找父 fiber 的兄弟 fiber
    nF = nF.parent;
  }

  // 没有找到的话, 返回空
  return null;
}

// 提交任务, 分组
function commitWorker(fiber) {

}

// 提交总任务, 这里不分组
function commitRoot() {
  commitWorker(workInProgressRoot.child);

  // currentRoot = wipRoot;
  // wipRoot = null;
}

// 工作
function workLoop(deadline) {
  console.log(deadline, deadline.didTimeout, deadline.timeRemaining());

  while (nextUnitOfWork && deadline.timeRemaining() > 1) {
    nextUnitOfWork = performUnitOfWork(nextUnitOfWork);
  }

  // TODO: 提交任务
  if (!nextUnitOfWork && workInProgressRoot) {
    // commit 一次性提交，这里不可中断
    commitRoot();
  }

  // 继续下一次单元任务
  // window.requestIdleCallback(workLoop);
}

window.requestIdleCallback(workLoop);

function render(vnode, container, callback) {
  // console.log({ type: vnode.type, vnode, container, callback });

  workInProgressRoot = {
    node: container,
    props: {},
    child: vnode,
    children: [vnode],
    base: currentRoot
  };
  nextUnitOfWork = workInProgressRoot;

  if (callback) {
    callback();
  }
}

export default {
  render
}
