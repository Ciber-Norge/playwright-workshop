/*
describe('My Second Test', () => {
  it('finds the content "type" using the role "link"', () => {
    cy.visit('/')

    cy.findByRole('link', {name: 'type'}).click()

    cy.url().should('include', '/commands/actions')

    cy.findByRole('textbox', {name: 'Email address'})
      .type('fake@email.com')
      .should('have.value', 'fake@email.com')
  })
})
*/

import {expect, test} from "@playwright/test";

test.describe('My Second test', () => {
    test('find by role textbox', async ({page}) => {
        await page.goto('https://example.cypress.io')

        await page.locator("text=type").click()
        await expect(page.url()).toContain("/commands/actions")

        await page.getByRole("textbox", {name: "Email address"})
            .type('fake@email.com')

        await expect(page.locator('.action-email')).toHaveValue("fake@email.com")
    })
})

