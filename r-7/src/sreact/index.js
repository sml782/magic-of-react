
// 创建普通节点
function createElement(type, props, ...children) {
  // console.log(type, props, children);

  let comProps = { ...props };
  if (type && type.defaultProps) {
    comProps = { ...type.defaultProps, ...props };
  }

  return {
    type: type || 'fragment',
    props: comProps,
    children: children.map(child => {
      if (typeof child === 'object') {
        return child;
      }
      return createTextNode(child);
    })
  }
}

// 创建文本节点
function createTextNode(child) {
  return {
    type: 'text',
    props: {
      nodeValue: child
    }
  }
}

export default {
  createElement
}
