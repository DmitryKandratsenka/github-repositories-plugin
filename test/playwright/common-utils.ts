import { CustomWorld } from 'test/playwright/world';
import { ITestCaseHookParameter } from '@cucumber/cucumber/lib/support_code_library_builder/types';

/**
 * This method is used to take screenshot of a page
 */
export async function takeScreenShotOnFailure<T>(
  world: CustomWorld,
  scenario: ITestCaseHookParameter,
  screenShotPath = './test/playwright/screenshots/failures/',
  screensShotExtn = '.png'
) {
  if (!world.page) {
    throw new Error('Page was not defined');
  }
  const screenShot = await world.page.screenshot({
    fullPage: true,
    path: screenShotPath + scenario.pickle.name + screensShotExtn,
  });

  if (screenShot) await world.attach(screenShot, 'image/png');
}

export const DEFAULT_TIMEOUT = 1000 * 60 * 5;
