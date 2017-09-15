// eslint-disable-next-line import/no-extraneous-dependencies
const resizeTo = require('terra-toolkit/lib/nightwatch/responsive-helpers').resizeTo;

module.exports = resizeTo(['tiny', 'small', 'medium', 'large', 'huge', 'enormous'], {
  'Displays a clinical status-view': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/status-view-tests/clinical`);
    browser.expect.element('#statusView').to.be.an('div');
    // browser.expect.element('body').to.be.present.before(1000)
    // browser.expect.element('ThemeProvider').to.be.visible;
    // browser.expect.element('#statusView').text.to.contain('TBD');
      // .assert.elementPresent('#statusView');
      // .assert.elementPresent('#statusView IconSuccess')
      // .assert.attributeEquals('#statusView p', 'TBD');
  },

  // 'Displays a custom status-view': (browser) => {
  //   browser
  //     .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/status-view-tests/custom`)
  //     .assert.elementPresent('#statusView');
  // },
  //
  // 'Displays a no_data status-view': (browser) => {
  //   browser
  //     .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/status-view-tests/no_data`)
  //     .assert.elementPresent('#statusView');
  // },
  //
  // 'Displays a no_result status-view': (browser) => {
  //   browser
  //     .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/status-view-tests/no_result`)
  //     .assert.elementPresent('#statusView');
  // },
  //
  // 'Displays a not_authorized status-view': (browser) => {
  //   browser
  //     .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/status-view-tests/not_authorized`)
  //     .assert.elementPresent('#statusView');
  // },
  //
  // 'Displays a sensitive_data status-view': (browser) => {
  //   browser
  //     .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/status-view-tests/sensitive_data`)
  //     .assert.elementPresent('#statusView');
  // },
  //
  // 'Displays a error status-view': (browser) => {
  //   browser
  //     .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/status-view-tests/error`)
  //     .assert.elementPresent('#statusView');
  // },
  //
  // 'Displays a no_internet status-view': (browser) => {
  //   browser
  //     .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/status-view-tests/no_internet`)
  //     .assert.elementPresent('#statusView');
  // },
  //
  // 'Displays a error_loading status-view': (browser) => {
  //   browser
  //     .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/status-view-tests/error_loading`)
  //     .assert.elementPresent('#statusView');
  // },
});
