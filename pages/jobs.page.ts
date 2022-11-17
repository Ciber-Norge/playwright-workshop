import { expect, Locator, Page } from "@playwright/test";
import { Header } from "./header.page";

export class Jobs {
  readonly page: Page
  readonly header: Header
  readonly searchBox: Locator
  
  constructor(page: Page) {
    this.page = page
    this.header = new Header(page)
    this.searchBox = page.getByRole("textbox", {name: "Stillingstittel, nøkkelord eller bransje"})
  }

  async searchForText(searchText: string) {
    await expect(this.searchBox).toBeVisible()
    this.searchBox.type(searchText)
    this.searchBox.press("Enter")
  }

  async clickSearchResult(resultText: string) {
    await this.page.getByRole("link", {name: `${resultText}`}).first().click()
  }
}