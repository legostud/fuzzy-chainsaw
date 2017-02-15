import React from 'react';

// things we'll want for richtext css
import Rhythm from 'Tags/Rhythm/Rhythm';
import Heading from 'Tags/Heading/Heading';
import Button from 'Tags/Button/Button';

import styles from './RichText.css';

const RichText = ({
  tagName = 'div',
  className = '',
  variant = 'default',
  children,
  ...attrs
}) => {
  const Tag = tagName;
  return (
    <Tag className={`rich-text rich-text--${variant} ${className}`} {...attrs}>
      {children}
    </Tag>
  );
}

RichText.propTypes = {
  tagName: React.PropTypes.string,
  className: React.PropTypes.string,
  variant: React.PropTypes.string
};


export default RichText;
