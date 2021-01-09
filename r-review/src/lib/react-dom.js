
function isReactComponent(type) {
  return !!type.prototype.isReactComponent;
}

function mountChild(children, dom) {
  if (Array.isArray(children)) {
    children.forEach(child => {
      mountChild(child, dom);
    });
    return;
  }
  const realDom = createDom(children);
  dom.appendChild(realDom);
}

function createDom(vdom) {
  if (typeof vdom === 'string') {
    return document.createTextNode(vdom);
  }

  const { type, props } = vdom;

  if (typeof type === 'function') {
    if (!isReactComponent(type)) {
      return mountFunctionComponent(vdom);
    }

    const ClassComponent = type;
    const cdom = new ClassComponent(props).render();
    return createDom(cdom);
  }

  const dom = document.createElement(type);
  if (typeof props === 'object' && props !== null) {
    for (const key in props) {
      if (key === 'style') {
        for (const skey in props.style) {
          dom.style[skey] = props.style[skey];
        }
        continue;
      }
      if (key === 'children') {
        continue;
      }
      dom[key] = props[key];
    }
  }
  if (props.children) {
    mountChild(props.children, dom);
  }
  return dom;
}

function mountFunctionComponent(vdom) {
  const { type: FunctionComponent, props } = vdom;
  const fdom = FunctionComponent(props);
  return createDom(fdom);
}

function render(vdom, container) {
  const realDom = createDom(vdom);
  container.appendChild(realDom);
}

const ReactDOM = {
  render,
};

export default ReactDOM;
