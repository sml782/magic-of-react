
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
  const dom = document.createElement(type);
  if (typeof props === 'object' && props !== null) {
    for (const key in props) {
      if (key === 'style') {
        for (const skey in props.style) {
          dom.style[skey] = props.style[skey];
          console.log(dom.style.color, props.style[skey])
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

function render(vdom, container) {
  const realDom = createDom(vdom);
  container.appendChild(realDom);
}

const ReactDOM = {
  render,
};

export default ReactDOM;
