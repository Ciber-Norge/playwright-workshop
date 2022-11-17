import { Locator, Page } from "@playwright/test";
import { Header } from "./header.page";

export class ApplyJob {
  readonly page: Page
  readonly header: Header
  readonly firstName: Locator
  readonly lastName: Locator
  readonly applyButton: Locator
  
  constructor(page: Page) {
    this.page = page
    this.header = new Header(page)
    this.firstName = page.getByRole("textbox", {name: "Fornavn"})
    this.lastName = page.getByRole("textbox", {name: "Etternavn"})
    this.applyButton = page.locator("#main").getByRole("button", {name: /Søk/i})
  }
}