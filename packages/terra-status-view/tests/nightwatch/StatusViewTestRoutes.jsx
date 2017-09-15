/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import StatusViewTests from './StatusViewTests';

// Test Cases
import DefaultStatusView from './DefaultStatusView';
import ClinicalStatusView from './ClinicalStatusView';
import CustomStatusView from './CustomStatusView';
import ErrorLoadingStatusView from './ErrorLoadingStatusView';
import ErrorStatusView from './ErrorStatusView';
import NoDataStatusView from './NoDataStatusView';
import NoInternetConnectionStatusView from './NoInternetConnectionStatusView';
import NoResultStatusView from './NoResultStatusView';
import NotAuthorizedStatusView from './NotAuthorizedStatusView';
import SensitiveDataStatusView from './SensitiveDataStatusView';

const routes = (
  <div>
    <Route path="/tests/status-view-tests" component={StatusViewTests} />
    <Route path="/tests/status-view-tests/default" component={DefaultStatusView} />
    <Route path="/tests/status-view-tests/clinical" component={ClinicalStatusView} />
    <Route path="/tests/status-view-tests/custom" component={CustomStatusView} />
    <Route path="/tests/status-view-tests/no_data" component={NoDataStatusView} />
    <Route path="/tests/status-view-tests/no_result" component={NoResultStatusView} />
    <Route path="/tests/status-view-tests/not_authorized" component={NotAuthorizedStatusView} />
    <Route path="/tests/status-view-tests/sensitive_data" component={SensitiveDataStatusView} />
    <Route path="/tests/status-view-tests/error" component={ErrorStatusView} />
    <Route path="/tests/status-view-tests/no_internet" component={NoInternetConnectionStatusView} />
    <Route path="/tests/status-view-tests/error_loading" component={ErrorLoadingStatusView} />
  </div>
);

export default routes;
