import { Locator, Page } from "@playwright/test";

export class Header {
  readonly page: Page;

  readonly logo: Locator
  readonly ourServices: Locator
  private readonly jobsLink: Locator
  readonly cookieButton: Locator

  constructor(page: Page) {
    this.page = page
    this.logo = page.getByRole("img", {name: "Site Logo"})
    this.ourServices = page.getByRole("menuitem", {name: "Våre tjenester"})
    this.jobsLink = page.getByRole("menuitem", {name: "Stillinger"})
    this.cookieButton = page.getByRole("button", {name: "Godta alle cookier"})
  }

  async clickJobs() {
    await this.jobsLink.click()
    await this.logo.hover()
  }
}