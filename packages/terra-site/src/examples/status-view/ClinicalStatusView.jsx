/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import StatusView from 'terra-status-view';
import ThemeProvider from 'terra-theme-provider';

const subtextContent = (<p>Buttons or other controls comes here for next action</p>);
const theme = 'cerner-consumer-theme';

const ClinicalStatusView = () => (
  <div>
    <ThemeProvider themeName={theme}>
      <StatusView
        type="clinical"
        subtext="Description comes here"
        subtextContent={subtextContent}
      />
    </ThemeProvider>
  </div>
);

export default ClinicalStatusView;
