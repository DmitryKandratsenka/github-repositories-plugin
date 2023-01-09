import { Given, Then, When } from "@cucumber/cucumber";
import CustomWorld from "test/playwright/world";
import { expect } from "@playwright/test";

Given("Home page is loaded", async function (this: CustomWorld) {
  await this.init();
});

Then(
  "{string} text is visible",
  async function (this: CustomWorld, text: string) {
    const locator = this.getPage().locator(`text=${text}`).first();
    await expect(locator).toBeVisible();
  }
);

Then(
  "{string} country header is visible",
  async function (this: CustomWorld, text: string) {
    const locator = this.getPage().locator(`h5`, { hasText: text }).first();
    await expect(locator).toBeVisible();
  }
);

Then(
  "{string} button is visible",
  async function (this: CustomWorld, text: string) {
    const locator = this.getPage().locator(`button`, { hasText: text });
    await expect(locator).toBeVisible();
  }
);

When(
  "User clicks on button {string}",
  async function (this: CustomWorld, text: string) {
    const locator = this.getPage().locator(`button`, { hasText: text });
    await locator.click();
  }
);

Then(
  "{string} text is not visible",
  async function (this: CustomWorld, text: string) {
    const locator = this.getPage().locator(`text=${text}`);
    await expect(locator).toBeHidden();
  }
);

When(
  "User enters {string} for placeholder {string}",
  async function (this: CustomWorld, text: string, placeholder: string) {
    const locator = this.getPage().locator(`*[placeholder='${placeholder}']`);
    await locator.fill(text);
  }
);

When(
  "User clicks on {string}",
  async function (this: CustomWorld, text: string) {
    const locator = this.getPage().locator(`text='${text}'`);
    await locator.click();
  }
);
When(
  "User selects menu option {string}",
  async function (this: CustomWorld, text: string) {
    const locator = this.getPage()
      .locator(`[role="menu"]`)
      .locator(`[role="option"]`, { hasText: text });
    await locator.click();
  }
);
