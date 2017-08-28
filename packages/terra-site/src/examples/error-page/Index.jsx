/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-error-page/docs/README.md';
import { version } from 'terra-error-page/package.json';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import ErrorPageSrc from '!raw-loader!terra-error-page/src/ErrorPage';

// Example Files

const ErrorPageExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={ErrorPageSrc} />
  </div>
);

export default ErrorPageExamples;
