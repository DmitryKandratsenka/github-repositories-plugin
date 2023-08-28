// eslint-disable-next-line import/no-extraneous-dependencies
const reporter = require('cucumber-html-reporter');

const options = {
  jsonFile: 'test/playwright/reports/cucumber-html-reporter.json',
  launchReport: true,
  noInlineScreenshots: false,
  output: 'test/playwright/reports/index.html',
  reportSuiteAsScenarios: true,
  screenshotsDirectory: 'test/playwright/screenshots/',
  storeScreenshots: true,
  theme: 'bootstrap',
};

reporter.generate(options);
