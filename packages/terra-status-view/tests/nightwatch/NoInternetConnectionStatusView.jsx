/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import StatusView from '../../src/StatusView';

const subtextContent = (<p>Buttons or other controls comes here for next action</p>);
const NoInternetConnectionStatusView = () => (
  <div>
    <StatusView
      type="no_internet"
      subtext="Description comes here"
      subtextContent={subtextContent}
      id="statusView"
    />
  </div>
);

export default NoInternetConnectionStatusView;