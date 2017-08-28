/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import ErrorPageTests from './ErrorPageTests';

// Test Cases
import DefaultErrorPage from './DefaultErrorPage';

const routes = (
  <div>
    <Route path="/tests/error-page-tests" component={ErrorPageTests} />
    <Route path="/tests/error-page-tests/default" component={DefaultErrorPage} />
  </div>
);

export default routes;
