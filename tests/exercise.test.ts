import {expect, test} from "@playwright/test";

test.describe.only("Apply job", () => {
    test("Should fill apply job and show error message", async ({page}) => {
        await page.goto("https://www.experis.no/")
        await page.getByRole("button", {name: "Godta alle cookier"}).click()
        await page.getByRole("menuitem", {name: "Stillinger"}).click()
        const searchBox = page.getByRole("textbox", {name: "Stillingstittel, nøkkelord eller bransje"})
        await expect(searchBox).toBeVisible()
        await searchBox.type("Senior")
        await searchBox.press("Enter")
        await page.getByRole("link", {name: /Seniorkonsulent/i}).click()
        await page.getByRole("button", {name: /Søk på stillingen/i}).first().click()
        await page.getByRole("textbox", {name: "Fornavn"}).type("Lasse")
        await page.getByRole("textbox", {name: "Etternavn"}).type("Kløvstad")
        await page.locator("#main").getByRole("button", {name: /Søk/i}).click()
        await expect(page.getByText("E-post er obligatorisk")).toBeVisible()
    })
})