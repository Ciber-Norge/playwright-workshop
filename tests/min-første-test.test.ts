/*
describe('My First Test', () => {
  it('finds the content "type"', () => {
    cy.visit('https://example.cypress.io')

    cy.contains('type').click()

    cy.url().should('include', '/commands/actions')

    cy.get('.action-email')
      .type('fake@email.com')
      .should('have.value', 'fake@email.com')
  })
})
*/

import {expect, test} from "@playwright/test";

test.describe('My First Test', () => {
  test('finds the content "type"', async ({page}) => {
    await page.goto('https://example.cypress.io')

    await page.locator("text=type").click()
    await expect(page.url()).toContain("/commands/actions")

    await page.locator('.action-email')
        .type('fake@email.com')

    await expect(page.locator('.action-email')).toHaveValue("fake@email.com")
  })
})
