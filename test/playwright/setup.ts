/* eslint-disable no-console */
import { Browser, chromium } from "playwright";
import {
  After,
  Before,
  ITestCaseHookParameter,
  setDefaultTimeout,
  setWorldConstructor,
  Status,
} from "@cucumber/cucumber";
import {
  DEFAULT_TIMEOUT,
  takeScreenShotOnFailure,
} from "test/playwright/common-utils";
import CustomWorld from "test/playwright/world";

const PWDEBUG = process.env.PWDEBUG === "1";

setDefaultTimeout(DEFAULT_TIMEOUT);
setWorldConstructor(CustomWorld);

Before(async function init(this: CustomWorld) {
  const options = PWDEBUG ? { slowMo: 1500 } : undefined;

  let browser: Browser = await chromium.launch(options);
  const context = await browser.newContext();

  await context.tracing.start({ screenshots: true, snapshots: true });

  this.setBrowser(browser);

  this.startTime = Date.now();
});

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
