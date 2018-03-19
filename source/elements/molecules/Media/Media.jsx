export const Media__figure = (props) => {
  const {
    tagName: Tag,
    className,
    align,
    children,
    ...attrs
  } = props;

  const classStack = FcUtils.createClassStack([
    'media__figure',
    align && `media__figure--${align}`,
    className
  ]);

  return (
    <Tag className={classStack} {...attrs}>
      {children}
    </Tag>
  );
};

Media__figure.defaultProps = {
  tagName: 'div'
};

Media__figure.propTypes = {
  tagName: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.func
  ]),
  className: PropTypes.string,
  align: PropTypes.oneOf(['top', 'middle', 'bottom']),
  children: PropTypes.node.isRequired
};


export const Media__body =
  FcUtils.createBasicComponent({
    name: 'media__body'
  });


export const Media = (props) => {
  const {
    tagName: Tag,
    className,
    align,
    children,
    ...attrs
  } = props;

  const classStack = FcUtils.createClassStack([
    'media',
    align && `media--${align}`,
    className
  ]);

  return (
    <Tag className={classStack} {...attrs}>
      {children}
    </Tag>
  );
};

Media.defaultProps = {
  tagName: 'div'
};

Media.propTypes = {
  tagName: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.func
  ]),
  className: PropTypes.string,
  align: PropTypes.string,
  children: PropTypes.node.isRequired
};


export default Media;
