/**
 Oppgave:
 1. Gå inn på https://www.experis.no/
 2. Trykk på Stillinger
 3. Vent til søkefeltet dukker opp
 4. Søk på Senior og trykk enter
 5. Gå inn på den første linken som innholder Seniorkonsulent
 6. Trykk på knappen “Søk på stillingen”
 7. Fyll ut fornavn og etternavn
 8. Trykk på søk
 9. Forvent og se en av feilmeldingene som dukker opp
 */


import {expect, test} from "@playwright/test";

test.describe.only("Apply job", () => {
    test("Should fill apply job and show error message", async ({page}) => {
        await page.goto("https://www.experis.no/")
        await page.getByRole("button", {name: "Godta alle cookier"}).click()
        await page.getByRole("menuitem", {name: "Stillinger"}).click()
        const searchBox = page.getByRole("textbox", {name: "Stillingstittel, nøkkelord eller bransje"})
        await expect(searchBox).toBeVisible()
        await searchBox.click()
        await searchBox.type("Senior")
        await searchBox.press("Enter")
        await page.getByRole("link", {name: /Seniorkonsulent/i}).first().click()
        await page.getByRole("button", {name: /Søk på stillingen/i}).first().click()
        await page.getByRole("textbox", {name: "Fornavn"}).type("Lasse")
        await page.getByRole("textbox", {name: "Etternavn"}).type("Kløvstad")
        await page.locator("#main").getByRole("button", {name: /Søk/i}).click()
        await expect(page.getByText("E-post er obligatorisk")).toBeVisible()
    })
})