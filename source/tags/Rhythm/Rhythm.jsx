const Rhythm = (props) => {
  const {
    tagName: Tag,
    className,
    size,
    deep,
    children,
    ...attrs
  } = props;

  const classStack = FcUtils.createClassStack([
    deep
      ? `Rhythm--deep-${size}`
      : `Rhythm--${size}`,
    className
  ]);

  return (
    <Tag className={classStack} {...attrs}>
      {children}
    </Tag>
  );
};

Rhythm.defaultProps = {
  tagName: 'div',
  size: 'default',
  deep: false
};

Rhythm.propTypes = {
  tagName: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.oneOf(['default', 'small', 'large']),
  deep: PropTypes.bool,
  children: PropTypes.node.isRequired
};

export default Rhythm;
