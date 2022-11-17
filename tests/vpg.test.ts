/*

describe('Legge til eit par ski i handlesekken', () => {
    it('Besøke VPG.no og gå inn på ski uten binding', () => {
      cy.visit('https://www.vpg.no/')

      cy.findByRole('link', {name: 'Ski'}).trigger('mouseover')
      cy.findByRole('link', {name: 'Ski uten binding'}).click()

      cy.findAllByRole('link').contains('4FRNT Renegade')
      .scrollIntoView()
      .click()

      cy.findByRole('button', {name: /Kjøp/i}).click()
    })
  })

*/

import {test} from "@playwright/test";

test.describe('Legge til eit par ski i handlesekken', () => {
    test('Besøke VPG.no og gå inn på ski uten binding', async ({page}) => {
        await page.goto('https://www.vpg.no/')

        await page.getByRole('link', {name: 'Ski'}).click()
        await page.getByRole('link', {name: 'Ski uten binding'}).click()

        await page.getByRole('link', {name: /EVI 85 Fury/i}).first().click()

        await page.getByRole('button', {name: /Kjøp/i}).click()
    })
})