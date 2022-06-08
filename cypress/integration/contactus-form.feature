Feature: Contact us form

    I want to validate contact us form

    Background:
        Given I navigate to the Jobot website

    Scenario: User should be able to submit the form containing all fields information
        When I enter all the information into the form
            | workEmailAddress  | firstName | lastName | workPhone  | ext | company     | companyWebsite         | yourJobTitle | industry   | positions          | zipCodeOrLocation | textArea                                  |
            | test123@ymail.com | test      | user     | 1234567890 | 123 | Company-ABC | https://uat.jobot.com/ | SQA Engineer | Automotive | Senior SQA Analyst | 44000             | hi, i want to get this job, please assist |
        And I click on submit button
        Then Form should submit successfully

    Scenario: User should be able to submit the form only with manadatory fields i-e Work Email Address
        When I enter "test123@ymail.com" into work email address
        And I click on submit button
        Then Form should submit successfully

    Scenario: Validate manadatory field validation i-e Work Email Address
        When I click on submit button
        Then An email validation message should appear

    Scenario: Validation message should appear if email address field exceed 256 characters in length
        When I enter 257 characters into work email address
        And I click on submit button
        Then Validation message saying "Sorry! you are exceeding the characters limit" should appear.

    Scenario: Validation message should appear if Ext. field exceed 24 characters in length
        When I enter "test123@ymail.com" into work email address
        And I insert 26 characters into ext number
        And I click on submit button
        Then Validation message saying "Sorry! you are exceeding the characters limit" should appear.

    Scenario: Validation message should appear if user insert alphabetic and special characters in ext number field
        When I enter "test123@ymail.com" into work email address
        And I insert alphabetic & special characters as "abc!@#$" into ext number
        And I click on submit button
        Then Validation message saying "Alphabets and special characters are not allowed" should appear

    Scenario: Validation message should appear if Company name textfield exceed 256 characters in length
        When I enter "test123@ymail.com" into work email address
        And I insert 258 characters into company name
        And I click on submit button
        Then Validation message saying "Sorry! you are exceeding the characters limit" should appear.

    Scenario: Validation message should appear if Company website textfield exceed 256 characters in length
        When I enter "test123@ymail.com" into work email address
        And I insert 258 characters into company website
        And I click on submit button
        Then Validation message saying "Sorry! you are exceeding the characters limit" should appear.

    Scenario: Validation message should appear if job title textfield exceed 256 characters in length
        When I enter "test123@ymail.com" into work email address
        And I insert 258 characters into job title
        And I click on submit button
        Then Validation message saying "Sorry! you are exceeding the characters limit" should appear.

    Scenario: Validation message should appear if zipCodeOrLocation textfield exceed 256 characters in length
        When I enter "test123@ymail.com" into work email address
        And I insert 258 characters into zipCodeOrLocation
        And I click on submit button
        Then Validation message saying "Sorry! you are exceeding the characters limit" should appear.

    Scenario: Validation message should appear if user insert less than 5 digits in zipCodeOrLocation textfield
        When I enter "test123@ymail.com" into work email address
        And I insert less than 5 digits as "123" into zipCodeOrLocation
        And I click on submit button
        Then Validation message saying "zipCodeOrLocation should be 5 characters long" should appear 

    Scenario: Validation message should appear if user insert greater than 5 digits in zipCodeOrLocation textfield
        When I enter "test123@ymail.com" into work email address
        And I insert greater than 5 digits as "1235678" into zipCodeOrLocation
        And I click on submit button
        Then Validation message saying "zipCodeOrLocation should be 5 characters long" should appear

    Scenario: Validation message should appear if user insert alphabetic and special characters in zipCodeOrLocation textfield
        When I enter "test123@ymail.com" into work email address
        And I insert alphabetic & special characters as "abc!@#$" into zipCodeOrLocation
        And I click on submit button
        Then Validation message saying "Alphabets and special characters are not allowed" should appear

    Scenario: Validation message should appear if user insert less than 10 digits in work phone textfield
        When I enter "test123@ymail.com" into work email address
        And I insert less than 10 digits as "65051322" into work phone
        And I click on submit button
        Then Validation message saying "Work phone should be 10 characters long" should appear

    Scenario: Validation message should appear if user insert whitespaces in ext number textfield i-e 1 2 3
        When I enter "test123@ymail.com" into work email address
        And I insert whitespaces as "1 2 3" into ext number
        And I click on submit button
        Then Validation message saying "Whitespaces are not allowed in ext number" should appear

    Scenario: Validation message should appear if user insert whitespaces in company website textfield i-e www .jobot. com
        When I enter "test123@ymail.com" into work email address
        And I insert whitespaces as "www .jobot. com" into company website
        And I click on submit button
        Then validation message saying "Whitespaces are not allowed in company website" should appear

    Scenario: Validation message should appear if user insert whitespaces in zipCodeOrLocation textfield i-e 12  345
        When I enter "test123@ymail.com" into work email address
        And I insert whitespaces as "12  345" into zipCodeOrLocation
        And I click on submit button
        Then Validation message saying "Whitespaces are not allowed in zipCodeOrLocation" should appear

    Scenario: Validate terms and condition link
        When I click on terms and condition link
        Then I should navigate to terms and condition page

    Scenario: Validate privay and policy link
        When I click on privay and policy link
        Then I should navigate to privay and policy page
