/* eslint-disable no-console */
import {
  After,
  ITestCaseHookParameter,
  setDefaultTimeout,
  setWorldConstructor,
  Status,
} from '@cucumber/cucumber';
import {
  DEFAULT_TIMEOUT,
  takeScreenShotOnFailure,
} from 'test/playwright/common-utils';
import CustomWorld from 'test/playwright/world';

const PWDEBUG = process.env.PWDEBUG === '1';

setDefaultTimeout(DEFAULT_TIMEOUT);
setWorldConstructor(CustomWorld);

After(async function init(this: CustomWorld, scenario: ITestCaseHookParameter) {
  if (scenario.result?.status !== Status.PASSED) {
    if (this.page) {
      await takeScreenShotOnFailure(this, scenario);
    }
  }
  if (!PWDEBUG) {
    await this.page?.close();
  }
});
