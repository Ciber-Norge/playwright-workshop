/*
describe('Sjå på fat', () => {
    it('figgjo.no', () => {
        cy.visit('https://figgjofabrikkutsalg.no/')

        cy.findByRole('link', {name: 'Produkter'}).trigger('mouseover')
        cy.findByRole('link', {name: 'Nyhet! Figgjo Ela'}).click()
        cy.findByRole('link',
            {name: 'Figgjo Ela Tallerken - 27 cm - Ela dekor - 5504hh-elab'}).click()
        cy.findByRole('button', {name: /Legg til handlekurv/i}).click()
    })
})
*/

import {test} from "@playwright/test";

test.describe('Sjå på fat', () => {
    test('figgjo.no', async ({page}) => {
        await page.goto('https://figgjofabrikkutsalg.no/')

        await page.getByRole('link', {name: 'Produkter'}).hover()
        await page.getByRole('link', {name: 'Nyhet! Figgjo Ela'}).click()
        // Funket ikke
        // await page.getByRole('link',
        //             {name: 'Figgjo Ela Tallerken - 20 cm - Ela dekor - 5563hh-elab'}).click()

        await page.getByRole('link',
            {name: 'Figgjo Ela Tallerken - 20 cm - Ela dekor - 5563hh-elab'}).first().click()

        await page.getByRole('button', {name: /Legg til handlekurv/i}).click()
    })
})