import { Locator, Page } from "@playwright/test";
import { Header } from "./header.page";

export class JobInfo {
  readonly page: Page
  readonly header: Header
  readonly applyForJobButton: Locator
  
  constructor(page: Page) {
    this.page = page
    this.header = new Header(page)
    this.applyForJobButton = page.getByRole("button", {name: /Søk på stillingen/i}).first()
  }
}