import { Given, And, When, Then } from "cypress-cucumber-preprocessor/steps";

const getElement = require("../../fixtures/locators.json")

Given('I navigate to the Jobot website', () => {
    cy.visit('/')
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from failing the test
        return false
    })
})

And('I enter all the information into the form', (datatable) => {
    datatable.hashes().forEach(element => {
        cy.get(getElement.workEmailAddress).type(element.workEmailAddress)
        cy.get(getElement.firstName).type(element.firstName)
        cy.get(getElement.lastName).type(element.lastName)
        cy.get(getElement.workPhone).type(element.workPhone)
        cy.get(getElement.ext).type(element.ext)
        cy.get(getElement.company).type(element.company)
        cy.get(getElement.companyWebsite).type(element.companyWebsite)
        cy.get(getElement.yourJobTitle).type(element.yourJobTitle)
        cy.get(getElement.industry).then(industrydropdown => {
            cy.wrap(industrydropdown).click()
            cy.contains(element.industry).click()
        })
        cy.get(getElement.positions).type(element.positions)
        cy.get(getElement.zipCodeOrLocation).type(element.zipCodeOrLocation)
        cy.get(getElement.remotePosition).click()
        cy.get(getElement.textArea).type(element.textArea)
    });
})

And('I enter valid email address as {string} into work email address', (workEmailAddress) => {
    cy.get(getElement.workEmailAddress).type(workEmailAddress)
})

When('I click on submit button', () => {
    cy.get(getElement.submitBtn).click()
    cy.wait(5000)
})

Then('Form should submit successfully', () => {
    cy.get(getElement.confirmatoinMessage).should('exist')
})

Then('Form should not submit and validation message should appear successfully', () => {
    cy.get(getElement.emailValidationMessage).should('exist')
})

And('I enter whitespaces as {string} into work email address', (workEmailAddress) => {
    cy.get(getElement.workEmailAddress).type(workEmailAddress)
})

And('I enter invalid email address as {string} into work email address', (workEmailAddress) => {
    cy.get(getElement.workEmailAddress).type(workEmailAddress)
})

Then('Validation message should appear and form should not submit', () => {
    cy.wait(5000)
    cy.get(getElement.confirmatoinMessage).should('not.exist')
})

And('I enter more than 256 characters as {string} into work email address', (workEmailAddress) => {
    cy.get(getElement.workEmailAddress).type(workEmailAddress)
})

Then('Validation message should appear in case exceeding characters limit', () => {
    cy.contains('Sorry! you are exceeding the charcaters limit').should('exist')
})

And('I enter {string} into work email address and insert Ext number containing more than 24 characters as {string}', (workEmailAddress, ext) => {
    cy.get(getElement.workEmailAddress).type(workEmailAddress)
    cy.get(getElement.ext).type(ext)
})

And('I enter {string} into work email address and insert alphabetic & special characters as {string} into ext number', (workEmailAddress, ext) => {
    cy.get(getElement.workEmailAddress).type(workEmailAddress)
    cy.get(getElement.ext).type(ext)
})

Then('Validation message should appear for invalid data', () => {
    cy.contains('Alphabets and special characters are not allowed').should('exist')
})

And('I enter {string} into work email address and insert company name containing more than 256 characters as {string}', (workEmailAddress, company) => {
    cy.get(getElement.workEmailAddress).type(workEmailAddress)
    cy.get(getElement.company).type(company)
})

And('I enter {string} into work email address and insert company website containing more than 256 characters as {string}', (workEmailAddress, companyWebsite) => {
    cy.get(getElement.workEmailAddress).type(workEmailAddress)
    cy.get(getElement.companyWebsite).type(companyWebsite)
})

And('I enter {string} into work email address and insert job title containing more than 256 characters as {string}', (workEmailAddress, yourJobTitle) => {
    cy.get(getElement.workEmailAddress).type(workEmailAddress)
    cy.get(getElement.yourJobTitle).type(yourJobTitle)
})

And('I enter {string} into work email address and insert zipCodeOrLocation containing more than 256 characters as {string}', (workEmailAddress, zipCodeOrLocation) => {
    cy.get(getElement.workEmailAddress).type(workEmailAddress)
    cy.get(getElement.zipCodeOrLocation).type(zipCodeOrLocation)
})

And('I enter {string} into work email address and insert alphabetic & special characters as {string} into zipCodeOrLocation', (workEmailAddress, zipCodeOrLocation) => {
    cy.get(getElement.workEmailAddress).type(workEmailAddress)
    cy.get(getElement.zipCodeOrLocation).type(zipCodeOrLocation)
})

And('I enter {string} into work email address and insert less than 5 digits as {string} into zipCodeOrLocation', (workEmailAddress, zipCodeOrLocation) => {
    cy.get(getElement.workEmailAddress).type(workEmailAddress)
    cy.get(getElement.zipCodeOrLocation).type(zipCodeOrLocation)
})

And('I enter {string} into work email address and insert greater than 5 digits as {string} into zipCodeOrLocation', (workEmailAddress, zipCodeOrLocation) => {
    cy.get(getElement.workEmailAddress).type(workEmailAddress)
    cy.get(getElement.zipCodeOrLocation).type(zipCodeOrLocation)
})

And('I enter {string} into work email address and insert less than 10 digits as {string} into work phone', (workEmailAddress, workPhone) => {
    cy.get(getElement.workEmailAddress).type(workEmailAddress)
    cy.get(getElement.workPhone).type(workPhone)
})

Then('Validation message should appear incase incorrect characters length for work phone field', () => {
    cy.contains('Work phone should be 10 characters long').should('exist')
})

Then('Validation message should appear for incase incorrect characters length for zipCodeOrLocation field', () => {
    cy.contains('zipCodeOrLocation should be 5 characters long').should('exist')
})

And('I enter {string} into work email address and insert whitespaces as {string} into ext number', (workEmailAddress, ext) => {
    cy.get(getElement.workEmailAddress).type(workEmailAddress)
    cy.get(getElement.ext).type(ext)
})

Then('Validation message should appear if whitespaces include in ext number textfield', () => {
    cy.contains('Whitespaces are not allowed in ext number textfield').should('exist')
})

And('I enter {string} into work email address and insert whitespaces as {string} into company website', (workEmailAddress, companyWebsite) => {
    cy.get(getElement.workEmailAddress).type(workEmailAddress)
    cy.get(getElement.companyWebsite).type(companyWebsite)
})

Then('Validation message should appear if whitespaces include in company website textfield', () => {
    cy.contains('Whitespaces are not allowed in company website textfield').should('exist')
})

And('I enter {string} into work email address and insert whitespaces as {string} into zipCodeOrLocation', (workEmailAddress, zipCodeOrLocation) => {
    cy.get(getElement.workEmailAddress).type(workEmailAddress)
    cy.get(getElement.zipCodeOrLocation).type(zipCodeOrLocation)
})

Then('Validation message should appear if whitespaces include in zipCodeOrLocation textfield', () => {
    cy.contains('Whitespaces are not allowed in zipCodeOrLocation textfield').should('exist')
})

When('I click on terms and condition link', () => {
    cy.get(getElement.termsAndConditions).click()
})

Then('I should navigate to terms and condition page', () => {
    cy.url().should('be.equal', 'https://uat.jobot.com/terms-and-conditions')
})

When('I click on privay and policy link', () => {
    cy.get(getElement.privayAndPolicy).click()
})

Then('I should navigate to privay and policy page', () => {
    cy.url().should('be.equal', 'https://uat.jobot.com/privacy-policy')
})