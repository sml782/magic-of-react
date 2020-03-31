
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

// 迭代子元素
function iterationChild(children, container) {
  if (!children || !children.length) {
    return;
  }
  children.map((item) => {
    if (!Array.isArray(item)) {
      return render(item, container);
    }
    return item.map((childitem) => render(childitem, container));
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
function createNode(vnode) {
  const { type: nodeType, props, children } = vnode;

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
      if (typeof nodeType === 'function') {
        console.log(nodeType)
        // 类组件
        if (nodeType.prototype && nodeType.prototype.isClassComponent) {
          node = updateClassCom(nodeType, props);
          break;
        }

        // 函数组件
        node = updateFunctionCom(nodeType, props);
        break;
      }

      // 元素组件
      node = document.createElement(nodeType);
      break;
  }

  updateNode(node, props);
  iterationChild(children, node);
  return node;
}

function render(vnode, container, callback) {
  // console.log({ type: vnode.type, vnode, container, callback });

  const node = createNode(vnode);
  container.appendChild(node);

  if (callback) {
    callback(node);
  }
}

export default {
  render
}
