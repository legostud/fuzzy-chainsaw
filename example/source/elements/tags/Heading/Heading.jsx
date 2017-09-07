export const Heading = (props) => {
  const {
    tagName,
    className,
    weight,
    level,
    children,
    ...attrs
  } = props;

  const Tag = tagName || level || 'h1';
  const classStack = FcUtils.createClassStack([
    'Heading',
    `Heading--${weight}`,
    `Heading--${level}`,
    className
  ]);

  return (
    <Tag className={classStack} {...attrs}>
      {children}
    </Tag>
  );
};

Heading.defaultProps = {
  weight: 'bold',
  level: 'h1'
};

Heading.propTypes = {
  tagName: FcUtils.PropTypes.tagName,
  className: PropTypes.string,
  weight: PropTypes.oneOf(['bold', 'medium', 'thin']),
  level: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  children: PropTypes.node.isRequired
};

Heading.pageType = 'content';

export default Heading;
