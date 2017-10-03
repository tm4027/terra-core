import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import styles from './ArticleCard.scss';

import Card from 'terra-card';
import Heading from 'terra-heading';
import Button from 'terra-button';
import Image from 'terra-image';
import Text from 'terra-text';

const cx = classNames.bind(styles);

const propTypes = {
  children: PropTypes.node,
  isFeatured: PropTypes.bool,
  image: PropTypes.string,
  headline: PropTypes.string,
  abstract: PropTypes.string,
  link: PropTypes.string,
};

const defaultProps = {
  isFeatured: false,
};

const ArticleCard = ({
  children,
  isFeatured,
  image,
  headline,
  abstract,
  link,
  ...customProps
}) => {
  const articleCardClassNames = cx([
    'article-card',
    { 'featured-article': isFeatured },
    customProps.className,
  ]);

  return <div className={articleCardClassNames}>
    <Card>
      <Image src={image} isFluid={true}></Image>
      <hr style={{ border: '0 none', borderTop: '1px solid #c8cacb', boxSizing: 'border-box', height: '1px', margin: '0' }} />
      <Card.Body hasPaddingVertical={false}>
        <Heading level={1}>{headline}</Heading>
        <Text fontSize={18}>{abstract}</Text>
      </Card.Body>
      <Card.Body hasPaddingVertical={true}>
        <Button href={link} text={'Read More'} isBlock={true} />
      </Card.Body>
    </Card>
  </div>;
};

ArticleCard.proptypes = propTypes;
export default ArticleCard;