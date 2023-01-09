import { IWorldOptions, World } from "@cucumber/cucumber";
import { Browser, chromium, Frame, Page } from "playwright";

const PWDEBUG = process.env.PWDEBUG === "1";

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
    const options = PWDEBUG ? { slowMo: 1500 } : undefined;

    let browser: Browser = await chromium.launch(options);
    const context = await browser.newContext();

    await context.tracing.start({ screenshots: true, snapshots: true });
    const page = await browser.newPage();

    this.setBrowser(browser);

    this.startTime = Date.now();
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
