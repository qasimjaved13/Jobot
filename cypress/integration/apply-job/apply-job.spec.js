import { Given, When, Then, Before } from "cypress-cucumber-preprocessor/steps";

const getElement = require("../../fixtures/locators.json")
const filePath = "cypress/fixtures/TestResume.txt"

Given('I navigate to the Jobot website', () => {
    cy.visit('/')
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from failing the test
        return false
    })
})

When('I click on sign in button to navigate to sign in page', () => {
    cy.get(getElement.signInNavigateBtn).click()
})

When('I click on sign in with email tab', () => {
    cy.get(getElement.signInWithEmail).click()
})

When('I enter {string} into email address', (emailAddress) => {
    cy.get(getElement.emailAddressTxt).type(emailAddress)
})

When('I click on continue with email button', () => {
    cy.get(getElement.continueWithEmailBtn).click()
})

When('I enter {string} into password', (password) => {
    cy.get(getElement.passwordTxt).type(password)
})

When('I click on sign in button', () => {
    cy.get(getElement.signInSubmitBtn).click()
})

Then('I should login successfully', () => {
    cy.get(getElement.userAvatar).should('exist')
})


When('I enter {string} job into search', (jobsearch) => {
    cy.get(getElement.searchTxt).type(jobsearch)
})

When('I enter {string} into location', (location) => {
    cy.get(getElement.locationTxt).type(location)
})

When('I click on search button', () => {
    cy.get(getElement.searchBtn).click()
})

Then('I should see the jobs list', () => {
    cy.get(getElement.searchedJobList, { timeout: 10000 }).should('have.length.greaterThan', 0)
})

When('I select the {string} Job', (jobName) => {
    cy.get(getElement.searchedJobList).each(($el, index, $list) => {
        if ($el.text() === jobName) {
            cy.wrap($el).click();
        }
    })
})

Then('I should press 1-Click Apply button', () => {
    cy.get(getElement.clickApplyBtn).should('contain', '1-Click Apply').click()
})

Then('Success message saying {string} should appear', (successMessage) => {
    cy.get(getElement.successMessage).should('include.text', successMessage)
})

Then('I should press View Application button', () => {
    cy.get(getElement.clickApplyBtn).should('contain', 'View Application').click()
})

Then('Confirmation message saying {string} should appear', (confirmationMessage) => {
    cy.get(getElement.jobAppliedConfirmation).should('include.text', confirmationMessage)
})

Then('I should press Easy Apply Now button', () => {
    cy.get(getElement.clickApplyBtn).should('contain', 'Easy Apply Now').click()
    cy.wait(3000)
})

When('I click on Easy Apply Now button', () => {
    cy.get(getElement.easyApplyNowBtn).click()
})

When('Validation message saying {string} should appear', (resumeValidationMessage) => {
    cy.get(getElement.resumeValidation).should('contain', resumeValidationMessage)
})

When('I upload the resume', () => {
    cy.get(getElement.uploadResume).selectFile(filePath, { force: true })
    cy.wait(3000)
})

When('I click on Complete Profile button', () => {
    cy.get(getElement.completeProfileBtn).click({ multiple: true })
})

When('I click on Job Profile tab', () => {
    cy.get(getElement.jobotProfileTab).click()
})

Then('Success message saying {string} should not appear', () => {
    cy.get(getElement.successMessage).should('not.exist');
})
