/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import StatusView from '../../src/StatusView';

const DefaultStatusView = () => (
  <div>
    <StatusView
      heading="default Heading"
      type="custom"
      subtext="Description comes here"
      id="statusView"
      isIconHidden
    />
  </div>
);

export default DefaultStatusView;
