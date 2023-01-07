import { Given } from "@cucumber/cucumber";
import CustomWorld from "test/playwright/world";
import { expect } from "@playwright/test";

Given("Home page is loaded", async function (this: CustomWorld) {
  await this.init();
});

Given(
  "{string} text is visible",
  async function (this: CustomWorld, text: string) {
    const locator = this.getPage().locator(`text=${text}`);
    await expect(locator).toBeVisible();
  }
);
