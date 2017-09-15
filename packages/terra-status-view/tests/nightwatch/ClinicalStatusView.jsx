/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import ThemeProvider from 'terra-theme-provider';
import StatusView from '../../src/StatusView';


const subtextContent = (<p>Buttons or other controls comes here for next action</p>);
const theme = 'cerner-consumer-theme';

const ClinicalStatusView = () => (
  <div>
    <ThemeProvider themeName={theme}>
      <StatusView
        type="clinical"
        subtext="Description comes here"
        subtextContent={subtextContent}
        id="statusView"
      />
    </ThemeProvider>
  </div>
);

export default ClinicalStatusView;
