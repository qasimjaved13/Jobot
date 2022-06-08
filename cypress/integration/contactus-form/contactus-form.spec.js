import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

const getElement = require("../../fixtures/locators.json")

Given('I navigate to the Jobot website', () => {
    cy.visit('/')
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from failing the test
        return false
    })
})

When('I enter all the information into the form', (datatable) => {
    datatable.hashes().forEach(element => {
        cy.get(getElement.workEmailAddress).type(element.workEmailAddress)
        cy.get(getElement.firstName).type(element.firstName)
        cy.get(getElement.lastName).type(element.lastName)
        cy.get(getElement.workPhone).type(element.workPhone)
        cy.get(getElement.ext).type(element.ext)
        cy.get(getElement.company).type(element.company)
        cy.get(getElement.companyWebsite).type(element.companyWebsite)
        cy.get(getElement.yourJobTitle).type(element.yourJobTitle)
        cy.get(getElement.industry).then(industryDropdown => {
            cy.wrap(industryDropdown).click()
            cy.contains(element.industry).click()
        })
        cy.get(getElement.positions).type(element.positions)
        cy.get(getElement.zipCodeOrLocation).type(element.zipCodeOrLocation)
        cy.get(getElement.remotePosition).click()
        cy.get(getElement.textArea).type(element.textArea)
    });
})

When('I enter {string} into work email address', (workEmailAddress) => {
    cy.get(getElement.workEmailAddress).type(workEmailAddress)
})

When('I click on submit button', () => {
    cy.get(getElement.submitBtn).click()
})

Then('Form should submit successfully', () => {
    cy.get(getElement.confirmationMessage).should('exist')
})

Then('An email validation message should appear', () => {
    cy.get(getElement.emailValidationMessage).should('exist')
})

When('I enter {int} characters into work email address', (workEmailAddress) => {
    cy.get(getElement.workEmailAddress).type(makeLargeString(workEmailAddress))
})

Then('Validation message saying {string} should appear.', (characterLimitValidationMessage) => {
    cy.contains(characterLimitValidationMessage).should('exist')
})

When('I insert {int} characters into ext number', (ext) => {
    cy.get(getElement.ext).type(makeLargeNumber(ext))
})

When('I insert alphabetic & special characters as {string} into ext number', (ext) => {
    cy.get(getElement.ext).type(ext)
})

Then('Validation message saying {string} should appear', (validationMessage) => {
    cy.contains(validationMessage).should('exist')
})

When('I insert {int} characters into company name', (company) => {
    cy.get(getElement.company).type(makeLargeString(company))
})

When('I insert {int} characters into company website', (companyWebsite) => {
    cy.get(getElement.companyWebsite).type(makeLargeString(companyWebsite))
})

When('I insert {int} characters into job title', (yourJobTitle) => {
    cy.get(getElement.yourJobTitle).type(makeLargeString(yourJobTitle))
})

When('I insert {int} characters into zipCodeOrLocation', (zipCodeOrLocation) => {
    cy.get(getElement.zipCodeOrLocation).type(makeLargeNumber(zipCodeOrLocation))
})

When('I insert alphabetic & special characters as {string} into zipCodeOrLocation', (zipCodeOrLocation) => {
    cy.get(getElement.zipCodeOrLocation).type(zipCodeOrLocation)
})

When('I insert less than 5 digits as {string} into zipCodeOrLocation', (zipCodeOrLocation) => {
    cy.get(getElement.zipCodeOrLocation).type(zipCodeOrLocation)
})

When('I insert greater than 5 digits as {string} into zipCodeOrLocation', (zipCodeOrLocation) => {
    cy.get(getElement.zipCodeOrLocation).type(zipCodeOrLocation)
})

When('I insert less than 10 digits as {string} into work phone', (workPhone) => {
    cy.get(getElement.workPhone).type(workPhone)
})

Then('Validation message saying {string} should appear', (validationMessage) => {
    cy.contains(validationMessage).should('exist')
})

Then('Validation message saying {string} should appear', (validationMessage) => {
    cy.contains(validationMessage).should('exist')
})

When('I insert whitespaces as {string} into ext number', (ext) => {
    cy.get(getElement.ext).type(ext)
})

Then('Validation message saying {string} should appear', (validationMessage) => {
    cy.contains(validationMessage).should('exist')
})

When('I insert whitespaces as {string} into company website', (companyWebsite) => {
    cy.get(getElement.companyWebsite).type(companyWebsite)
})

Then('validation message saying {string} should appear', (validationMessage) => {
    cy.contains(validationMessage).should('exist')
})

When('I insert whitespaces as {string} into zipCodeOrLocation', (zipCodeOrLocation) => {
    cy.get(getElement.zipCodeOrLocation).type(zipCodeOrLocation)
})

Then('Validation message saying {string} should appear', (validationMessage) => {
    cy.contains(validationMessage).should('exist')
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

function makeLargeString(charactersLength) {
    var text = "";
    var possible = "abc";
    for (var i = 0; i < charactersLength; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}

function makeLargeNumber(charactersLength) {
    var text = "";
    var possible = "123";
    for (var i = 0; i < charactersLength; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}