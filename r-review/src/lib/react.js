
export function createElement(type, config, children = null) {
  const props = { ...config };
  if (arguments.length > 2) {
    children = Array.prototype.slice.call(arguments, 2);
  }
  props.children = children;
  return {
    type,
    props,
  }
}

