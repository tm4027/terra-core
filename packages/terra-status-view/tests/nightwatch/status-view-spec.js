// eslint-disable-next-line import/no-extraneous-dependencies
const resizeTo = require('terra-toolkit/lib/nightwatch/responsive-helpers').resizeTo;

/* eslint-disable no-unused-expressions */
module.exports = resizeTo(['tiny', 'small', 'medium', 'large', 'huge', 'enormous'], {
  'Displays a clinical status-view': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/status-view-tests/clinical`);
    browser.expect.element('#statusView').to.be.present;
    browser.expect.element('svg').to.be.present;
    browser.expect.element('p').text.to.equal('TBD');
    browser.expect.element('#statusView').text.to.contain('Description comes here');
    browser.expect.element('#statusView').text.to.contain('Buttons or other controls comes here for next action');
  },

  'Displays a default status-view': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/status-view-tests/default`);
    browser.expect.element('#statusView').to.be.present;
    browser.expect.element('svg').to.not.be.present;
    browser.expect.element('p').text.to.equal('default Heading');
    browser.expect.element('#statusView').text.to.contain('Description comes here');
    browser.expect.element('#statusView').text.to.not.contain('Buttons or other controls comes here for next action');
  },

  'Displays a custom status-view': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/status-view-tests/custom`);
    browser.expect.element('#statusView').to.be.present;
    browser.expect.element('svg').to.be.present;
    browser.expect.element('p').text.to.equal('custom Heading');
    browser.expect.element('#statusView').text.to.contain('Description comes here');
    browser.expect.element('#statusView').text.to.contain('Buttons or other controls comes here for next action');
    // browser.expect.element('#main').to.have.css('display').which.equals('block');
  },

  'Displays a no_data status-view': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/status-view-tests/no_data`);
    browser.expect.element('#statusView').to.be.present;
    browser.expect.element('svg').to.be.present;
    browser.expect.element('p').text.to.equal('No Data');
    browser.expect.element('#statusView').text.to.contain('Description comes here');
    browser.expect.element('#statusView').text.to.contain('Buttons or other controls comes here for next action');
  },

  'Displays a no_result status-view': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/status-view-tests/no_result`);
    browser.expect.element('#statusView').to.be.present;
    browser.expect.element('svg').to.be.present;
    browser.expect.element('p').text.to.equal('No Matching Results');
    browser.expect.element('#statusView').text.to.contain('Description comes here');
    browser.expect.element('#statusView').text.to.contain('Buttons or other controls comes here for next action');
  },

  'Displays a not_authorized status-view': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/status-view-tests/not_authorized`);
    browser.expect.element('#statusView').to.be.present;
    browser.expect.element('svg').to.be.present;
    browser.expect.element('p').text.to.equal('Not Authorized');
    browser.expect.element('#statusView').text.to.contain('Description comes here');
    browser.expect.element('#statusView').text.to.contain('Buttons or other controls comes here for next action');
  },

  'Displays a sensitive_data status-view': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/status-view-tests/sensitive_data`);
    browser.expect.element('#statusView').to.be.present;
    browser.expect.element('svg').to.be.present;
    browser.expect.element('p').text.to.equal('Sensitive Data');
    browser.expect.element('#statusView').text.to.contain('Description comes here');
    browser.expect.element('#statusView').text.to.contain('Buttons or other controls comes here for next action');
  },

  'Displays a error status-view': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/status-view-tests/error`);
    browser.expect.element('#statusView').to.be.present;
    browser.expect.element('svg').to.be.present;
    browser.expect.element('p').text.to.equal('Error');
    browser.expect.element('#statusView').text.to.contain('Description comes here');
    browser.expect.element('#statusView').text.to.contain('Buttons or other controls comes here for next action');
  },

  'Displays a no_internet status-view': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/status-view-tests/no_internet`);
    browser.expect.element('#statusView').to.be.present;
    browser.expect.element('svg').to.be.present;
    browser.expect.element('p').text.to.equal('No Internet Connection');
    browser.expect.element('#statusView').text.to.contain('Description comes here');
    browser.expect.element('#statusView').text.to.contain('Buttons or other controls comes here for next action');
  },

  'Displays a error_loading status-view': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/status-view-tests/error_loading`);
    browser.expect.element('#statusView').to.be.present;
    browser.expect.element('svg').to.be.present;
    browser.expect.element('p').text.to.equal('Error Loading');
    browser.expect.element('#statusView').text.to.contain('Description comes here');
    browser.expect.element('#statusView').text.to.contain('Buttons or other controls comes here for next action');
  },
});
