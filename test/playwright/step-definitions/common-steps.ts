import { Given, Then, When } from '@cucumber/cucumber';
import CustomWorld from 'test/playwright/world';
import { expect } from '@playwright/test';

Given('Home page is loaded', async function (this: CustomWorld) {
  await this.init();
});

Then(
  '{string} text is visible',
  async function (this: CustomWorld, text: string) {
    const locator = this.getPage().locator(`text=${text}`).first();

    await expect(locator).toBeVisible();
  }
);

Then(
  '{string} country header is visible',
  async function (this: CustomWorld, text: string) {
    const locator = this.getPage().locator(`h5`, { hasText: text }).first();

    await expect(locator).toBeVisible();
  }
);

Then(
  '{string} button is visible',
  async function (this: CustomWorld, text: string) {
    const locator = this.getPage().locator(`button`, { hasText: text });

    await expect(locator).toBeVisible();
  }
);

When(
  'User clicks on button {string}',
  async function (this: CustomWorld, text: string) {
    const locator = this.getPage().locator(`button`, { hasText: text });

    await locator.click();
  }
);

Then(
  '{string} text is not visible',
  async function (this: CustomWorld, text: string) {
    const locator = this.getPage().locator(`text=${text}`);

    await expect(locator).toBeHidden();
  }
);

When(
  'User enters {string} for placeholder {string}',
  async function (this: CustomWorld, text: string, placeholder: string) {
    const locator = this.getPage().locator(`*[placeholder='${placeholder}']`);

    await locator.fill(text);
  }
);

Then(
  '{string} is entered for placeholder {string}',
  async function (this: CustomWorld, value: string, placeholder: string) {
    const locator = this.getPage().locator(`*[placeholder='${placeholder}']`);

    await expect(locator).toHaveValue(value);
  }
);

When(
  'User clicks on {string}',
  async function (this: CustomWorld, text: string) {
    const locator = this.getPage().locator(`text='${text}'`);

    await locator.click();
  }
);
When(
  'User selects menu option {string}',
  async function (this: CustomWorld, text: string) {
    const locator = this.getPage()
      .locator(`[role="menu"]`)
      .locator(`[role="option"]`, { hasText: text });

    await locator.click();
  }
);

Then(
  'Github repository authored by {string} is visible',
  async function (this: CustomWorld, author: string) {
    const locator = this.getPage()
      .locator('[data-testid="github-repo-card"]', {
        hasText: author,
      })
      .first();

    await expect(locator).toBeVisible();
  }
);

Then(
  'Github repo card has text {string}',
  async function (this: CustomWorld, text: string) {
    const locator = this.getPage().locator('[data-testid="github-repo-card"]', {
      hasText: text,
    });

    await expect(locator).toBeVisible();
  }
);
When(
  'User adds repository {string} to favourites',
  async function (this: CustomWorld, text: string) {
    const gitHubCard = this.getPage().locator(
      '[data-testid="github-repo-card"]',
      {
        hasText: text,
      }
    );

    const favouriteIconButton = gitHubCard.locator(
      '[data-testid="FavoriteBorderIcon"]'
    );

    await favouriteIconButton.click();
  }
);
