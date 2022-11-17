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
import { ApplyJob } from "../pages/applyJob.page";
import { Header } from "../pages/header.page";
import { JobInfo } from "../pages/jobInfo.page";
import { Jobs } from "../pages/jobs.page";

test.describe.only("Apply job", () => {
    test("Should fill apply job and show error message", async ({page}) => {
        const header = new Header(page)
        const jobs = new Jobs(page)
        const jobInfo = new JobInfo(page)
        const applyJob = new ApplyJob(page)

        await page.goto("https://www.experis.no/")
        await header.cookieButton.click()        
        await header.clickJobs()
        await jobs.searchForText("Senior")
        await jobs.clickSearchResult("Seniorkonsulent")
        await jobInfo.applyForJobButton.click()
        await applyJob.firstName.type("Joakim")
        await applyJob.lastName.type("Bjerkheim")
        await applyJob.applyButton.click()

        await expect(page.getByText("E-post er obligatorisk")).toBeVisible()
    })
})