/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Link } from 'react-router';

const StatusViewTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/status-view-tests/default">StatusView - Default</Link></li>
      <li><Link to="/tests/status-view-tests/clinical">StatusView - clinical</Link></li>
      <li><Link to="/tests/status-view-tests/custom">StatusView - custom</Link></li>
      <li><Link to="/tests/status-view-tests/no_data">StatusView - no_data</Link></li>
      <li><Link to="/tests/status-view-tests/no_result">StatusView - no_result</Link></li>
      <li><Link to="/tests/status-view-tests/not_authorized">StatusView - not_authorized</Link></li>
      <li><Link to="/tests/status-view-tests/sensitive_data">StatusView - sensitive_data</Link></li>
      <li><Link to="/tests/status-view-tests/error">StatusView - error</Link></li>
      <li><Link to="/tests/status-view-tests/no_internet">StatusView - no_internet</Link></li>
      <li><Link to="/tests/status-view-tests/error_loading">StatusView - error_loading</Link></li>
    </ul>
  </div>
);

export default StatusViewTests;
