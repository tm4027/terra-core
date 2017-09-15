/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import IconClose from 'terra-icon/lib/icon/IconClose';// TODO
import StatusView from '../../src/StatusView';

const subtextContent = (<p>Buttons or other controls comes here for next action</p>);
const CustomStatusView = () => (
  <div>
    <StatusView
      icon={<IconClose />}
      heading="custom Heading"
      type="custom"
      subtext="Description comes here"
      subtextContent={subtextContent}
      id="statusView"
    />
  </div>
);

export default CustomStatusView;
