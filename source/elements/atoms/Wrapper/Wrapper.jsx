const Wrapper = (props) => {
  const {
    tagName: Tag,
    className,
    size,
    children,
    ...attrs
  } = props;

  const classStack = FcUtils.createClassStack([
    'wrapper',
    `wrapper--${size}`,
    className
  ]);

  return (
    <Tag className={classStack} {...attrs}>
      {children}
    </Tag>
  );
};

Wrapper.defaultProps = {
  tagName: 'div',
  size: 'default'
};

Wrapper.propTypes = {
  tagName: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.func
  ]),
  className: PropTypes.string,
  size: PropTypes.oneOf(['narrow', 'default', 'wide']),
  children: PropTypes.node.isRequired
};


export default Wrapper;
