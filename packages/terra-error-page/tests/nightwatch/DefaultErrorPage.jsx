import React from 'react';
import IconCustom from 'terra-icon/lib/icon/IconSpinner';
import ErrorPage from '../../src/ErrorPage';

//Medium 1
// export default () => <ErrorPage customTitle='Error'/>;
//Medium 2
// export default () => <ErrorPage message='This is test message' customTitle='Error'/>;
//Large 1 (w/ mobile fonts)
//export default () => <ErrorPage type={ErrorPage.Opts.Types.NOTAUTHORIZED} customTitle='Error' message='This is test message' id='tests' buttonTextPrimary="test primary button text"/>;
//Large 2 (w/ desktop fonts)
//export default () => <ErrorPage type={ErrorPage.Opts.Types.ERROR} customTitle='Error' message='This is test message' id='tests' buttonTextPrimary="test primary button text" buttonTextSecondary="test secondary button text"/>;
//Large 2 (w/ desktop fonts) custom icon
export default () => <ErrorPage type={ErrorPage.Opts.Types.CUSTOM} customIcon={<IconCustom viewBox="0 0 51.7 51.8" height="100px" width="100px" />} customTitle='Custom Error' message='This is custom test message' buttonTextPrimary="test primary button text" buttonTextSecondary="test secondary button text" />;
