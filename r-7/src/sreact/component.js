
function Component(props) {
  this.props = {
    ...Component.defaultProps,
    ...props,
  };
};

Component.prototype.isClassComponent = {};
Component.defaultProps = {
  name: 'Class Component',
}

export default Component;
