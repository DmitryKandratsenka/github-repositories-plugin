const common = `
  --require cucumber.node.js
  --require-module @babel/register
  --require ./test/playwright/world.ts
  --require ./test/playwright/setup.ts
  --require ./test/playwright/step-definitions/**/*.ts
  --format json:test/playwright/reports/cucumber-html-reporter.json
  --format message:test/playwright/reports/cucumber-html-reporter.ndjson
  --format summary
  --format progress-bar
  --format-options '{"colorsEnabled": true}'
  --format-options '{"theme":{"datatable border":["green"],"datatable content":["green","italic"],"docstring content":["green","italic"],"docstring delimiter":["green"],"feature description":["green"],"feature keyword":["bold","green"],"rule keyword":["yellow"],"scenario keyword":["greenBright"],"scenario name":["green","underline"],"step keyword":["bgGreen","black","italic"],"step text":["greenBright","italic"],"tag":["green"]}}'
  --format @cucumber/pretty-formatter
  --format-options ${JSON.stringify({ snippetInterface: "async-await" })}
  --publish-quiet
  `;

/**
 * The parsed object will be passed as the parameters
 * to the world constructor.
 * Look into World.ts
 * @returns
 */
const getWorldParams = () => {
  const params = {
    foo: "bar",
  };

  return `--world-parameters ${JSON.stringify({ params })}`;
};

module.exports = {
  default: `${common} ${getWorldParams()}`,
};
