/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import StatusView from '../../src/StatusView';

const subtextContent = (<p>Buttons or other controls comes here for next action</p>);
const ErrorStatusView = () => (
  <div>
    <StatusView
      type="error"
      subtext="Description comes here"
      subtextContent={subtextContent}
      id="statusView"
    />
  </div>
);

export default ErrorStatusView;
