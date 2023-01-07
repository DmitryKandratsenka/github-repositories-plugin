import { IWorldOptions, World } from "@cucumber/cucumber";
import { Browser, Frame, Page } from "playwright";

export class CustomWorld extends World {
  debug = false;
  frame?: Frame;
  page?: Page;
  startTime?: number;
  browser?: Browser;

  constructor(props: IWorldOptions) {
    super(props);
  }

  async init() {
    if (!this.browser) {
      throw new Error(`Browser was not defined`);
    }
    const page = await this.browser.newPage();
    this.setPage(page);
    this.pageConsole();

    await page.goto(process.env.LOCAL_SERVER!, { waitUntil: "networkidle" });
  }

  pageConsole() {
    this.page?.on("console", async (msg) => {
      if (
        msg.type() === "log" ||
        msg.type() === "warn" ||
        msg.type() === "error" ||
        msg.type() === "debug" ||
        msg.type() === "info"
      ) {
        // eslint-disable-next-line no-console
        console.log(msg);
      }
    });
  }

  setBrowser(browser: Browser) {
    this.browser = browser;
  }

  setFrame(frame: Frame) {
    this.frame = frame;
  }

  setPage(page: Page) {
    this.page = page;
  }

  start() {
    this.startTime = Date.now();
  }

  async setupMocks() {
    if (!this.page) {
      throw new Error("Page was not defined!");
    }
  }

  getPage() {
    if (!this.page) {
      throw new Error("Page is not defined");
    }

    return this.page;
  }
}

export default CustomWorld;
