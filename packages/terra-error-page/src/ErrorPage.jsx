import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import Button from 'terra-button';
import Card from 'terra-card';
import ErrorIcon from './ErrorIcon';
import IconLock from 'terra-icon/lib/icon/IconPadlock';
import IconError from 'terra-icon/lib/icon/IconAlert';
import styles from './ErrorPage.scss';

const cx = classNames.bind( styles );

const IconTypes = {
  ERROR: 'error',
  SENSITIVE: 'sensitive',
  NOTAUTHORIZED: 'not_authorized',
  CUSTOM: 'custom',
}

const propTypes = {
  /*
   * Content to be displayed as the name
   */
  name: PropTypes.string,
  message: PropTypes.string,
  buttonTextPrimary: PropTypes.string,
  buttonTextSecondary: PropTypes.string,
  customIcon: PropTypes.element,
  type: PropTypes.oneOf( [
    IconTypes.ERROR,
    IconTypes.SENSITIVE,
    IconTypes.NOTAUTHORIZED,
    IconTypes.CUSTOM,
  ] ),
};

const defaultProps = {
  message: '',
  customIcon: null,
};

const getErrorTypeIcon = ( type, customIcon ) => {
  switch ( type ) {
    case IconTypes.SENSITIVE:
    case IconTypes.NOTAUTHORIZED:
      return ( <IconLock viewBox="0 0 51.7 51.8" height="100px" width="100px" className={cx('glyph')} /> );
      break;
    case IconTypes.ERROR:
      return ( <IconError viewBox="0 0 51.7 51.8" height="100px" width="100px" className={cx('glyph')} /> );
      break;
    case IconTypes.CUSTOM:
      return customIcon;
    default:
      return null;
  }
};

const ErrorPage = ( {
  type,
  customIcon,
  customTitle,
  message,
  buttonTextPrimary,
  buttonTextSecondary,
  ...customProps
} ) => {
  const attributes = Object.assign( {}, customProps );
  const ErrorPageClassNames = cx( [
    'card',
    'error-page',
    attributes.className,
  ] );

  let description = '';
  let buttonPrimary = null;
  let buttonSecondary = null;
  if ( buttonTextPrimary ) {
    buttonPrimary = <Button variant="primary" text={buttonTextPrimary} />;
  }
  if ( buttonTextSecondary ) {
    buttonSecondary = <Button variant="primary" text={buttonTextSecondary} />;
  }
  let buttonPrimarySection = <div className={cx('button')}>{buttonPrimary}</div>;
  let buttonSecondarySection = <div className={cx('button')}>{buttonSecondary}</div>;
  let text = <h1 className={cx('text')}>{customTitle}</h1>
  description = <p className={cx('text')}>{message}</p>

  return ( <Card {...attributes} className={ErrorPageClassNames} >
      <Card.Body >
        <div>{getErrorTypeIcon(type, customIcon)}</div>
        {text}
        {description}
        {buttonPrimarySection}
        {buttonSecondarySection}
    </Card.Body>
</Card> )
};

ErrorPage.propTypes = propTypes;
ErrorPage.defaultProps = defaultProps;
ErrorPage.Opts = {};
ErrorPage.Opts.Types = IconTypes;

export default ErrorPage;
