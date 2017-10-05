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
import Arrange from 'terra-arrange';

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
    { 'article-card': !isFeatured },
    { 'featured-article': isFeatured },
    customProps.className,
  ]);

  const articleImage = <Image src={image} isFluid={true}></Image>;
  const articleButton = <Button href={link} text={'Read More'} isBlock={true} />;
  const articleHeadline = <Heading level={1} style={{ color: 'blue' }}>{headline}</Heading>;
  const articleBody = <Text fontSize={18}>{abstract}</Text>;
  const articleCardContent = <div>{articleHeadline}{articleBody}</div>;
  const articleCardFeaturedContent = <div>{articleHeadline}{articleBody}{articleButton}</div>;

  if (isFeatured) {
    return <Arrange className={articleCardClassNames} fitStart={articleImage} fill={articleCardFeaturedContent} />;
  } else {
    return <div className={articleCardClassNames}>
        <Card>
          {articleImage}
          <hr style={{ border: '0 none', borderTop: '1px solid #c8cacb', boxSizing: 'border-box', height: '1px', margin: '0' }} />
          <Card.Body hasPaddingVertical={false}>
            {articleCardContent}
          </Card.Body>
          <Card.Body hasPaddingVertical={true}>
            {articleButton}
          </Card.Body>
        </Card>
      </div>;
  }
};

ArticleCard.proptypes = propTypes;
export default ArticleCard;