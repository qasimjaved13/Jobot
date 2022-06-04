Feature: Contact us form

    I want to validate contact us form

    Background:
        Given I navigate to the Jobot website

    Scenario: User should be able to submit the form containing all fields information
        And I enter all the information into the form
            | workEmailAddress  | firstName | lastName | workPhone  | ext | company     | companyWebsite         | yourJobTitle | industry   | positions          | zipCodeOrLocation | textArea                                  |
            | test123@ymail.com | test      | user     | 1234567890 | 123 | Company-ABC | https://uat.jobot.com/ | SQA Engineer | Automotive | Senior SQA Analyst | 44000             | hi, i want to get this job, please assist |
        When I click on submit button
        Then Form should submit successfully

    Scenario: User should be able to submit the form only with manadatory fields i-e Work Email Address
        And I enter valid email address as "test123@ymail.com" into work email address
        When I click on submit button
        Then Form should submit successfully

    Scenario: Validate manadatory field validation i-e Work Email Address
        When I click on submit button
        Then Form should not submit and validation message should appear successfully

    Scenario: User should not be able to submit the form if email address syntax is not in proper format
        And I enter invalid email address as "abc def ghi" into work email address
        When I click on submit button
        Then Validation message should appear and form should not submit

    Scenario: User should not be able to submit the form only with whitespace in work email address
        And I enter whitespaces as " " into work email address
        When I click on submit button
        Then Validation message should appear and form should not submit

    Scenario: Validation message should appear if email address field exceed 256 characters in length
        And I enter more than 256 characters as "aaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeeeffffffffffgggggggggghhhhhhhhhhiiiiiiiiiijjjjjjjjjjaaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeeeffffffffffgggggggggghhhhhhhhhhiiiiiiiiiijjjjjjjjjjaaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeee@ymail.com" into work email address
        When I click on submit button
        Then Validation message should appear in case exceeding characters limit

    Scenario: Validation message should appear if Ext. field exceed 24 characters in length
        And I enter "test123@ymail.com" into work email address and insert Ext number containing more than 24 characters as "1111111111222222222233333"
        When I click on submit button
        Then Validation message should appear in case exceeding characters limit

    Scenario: Validation message should appear if user insert alphabetic and special characters in ext number field
        And I enter "test123@ymail.com" into work email address and insert alphabetic & special characters as "abc!@#$" into ext number
        When I click on submit button
        Then Validation message should appear for invalid data

    Scenario: Validation message should appear if Company name textfield exceed 256 characters in length
        And I enter "test123@ymail.com" into work email address and insert company name containing more than 256 characters as "aaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeeeffffffffffgggggggggghhhhhhhhhhiiiiiiiiiijjjjjjjjjjaaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeeeffffffffffgggggggggghhhhhhhhhhiiiiiiiiiijjjjjjjjjjaaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeeefffffff"
        When I click on submit button
        Then Validation message should appear in case exceeding characters limit

    Scenario: Validation message should appear if Company website textfield exceed 256 characters in length
        And I enter "test123@ymail.com" into work email address and insert company website containing more than 256 characters as "aaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeeeffffffffffgggggggggghhhhhhhhhhiiiiiiiiiijjjjjjjjjjaaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeeeffffffffffgggggggggghhhhhhhhhhiiiiiiiiiijjjjjjjjjjaaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeeefff.com"
        When I click on submit button
        Then Validation message should appear in case exceeding characters limit

    Scenario: Validation message should appear if job title textfield exceed 256 characters in length
        And I enter "test123@ymail.com" into work email address and insert job title containing more than 256 characters as "aaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeeeffffffffffgggggggggghhhhhhhhhhiiiiiiiiiijjjjjjjjjjaaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeeeffffffffffgggggggggghhhhhhhhhhiiiiiiiiiijjjjjjjjjjaaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeeefffffff"
        When I click on submit button
        Then Validation message should appear in case exceeding characters limit

    Scenario: Validation message should appear if zipCodeOrLocation textfield exceed 256 characters in length
        And I enter "test123@ymail.com" into work email address and insert zipCodeOrLocation containing more than 256 characters as "aaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeeeffffffffffgggggggggghhhhhhhhhhiiiiiiiiiijjjjjjjjjjaaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeeeffffffffffgggggggggghhhhhhhhhhiiiiiiiiiijjjjjjjjjjaaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeeefffffff"
        When I click on submit button
        Then Validation message should appear in case exceeding characters limit

    Scenario: Validation message should appear if user insert less than 5 digits in zipCodeOrLocation textfield
        And I enter "test123@ymail.com" into work email address and insert less than 5 digits as "123" into zipCodeOrLocation
        When I click on submit button
        Then Validation message should appear for incase incorrect characters length for zipCodeOrLocation field

    Scenario: Validation message should appear if user insert greater than 5 digits in zipCodeOrLocation textfield
        And I enter "test123@ymail.com" into work email address and insert greater than 5 digits as "1235678" into zipCodeOrLocation
        When I click on submit button
        Then Validation message should appear for incase incorrect characters length for zipCodeOrLocation field

    Scenario: Validation message should appear if user insert alphabetic and special characters in zipCodeOrLocation textfield
        And I enter "test123@ymail.com" into work email address and insert alphabetic & special characters as "abc!@#$" into zipCodeOrLocation
        When I click on submit button
        Then Validation message should appear for invalid data

    Scenario: Validation message should appear if user insert less than 10 digits in work phone textfield
        And I enter "test123@ymail.com" into work email address and insert less than 10 digits as "65051322" into work phone
        When I click on submit button
        Then Validation message should appear incase incorrect characters length for work phone field

    Scenario: Validation message should appear if user insert whitespaces in ext number textfield i-e 1 2 3
        And I enter "test123@ymail.com" into work email address and insert whitespaces as "1 2 3" into ext number
        When I click on submit button
        Then Validation message should appear if whitespaces include in ext number textfield

    Scenario: Validation message should appear if user insert whitespaces in company website textfield i-e www .jobot. com
        And I enter "test123@ymail.com" into work email address and insert whitespaces as "www .jobot. com" into company website
        When I click on submit button
        Then Validation message should appear if whitespaces include in company website textfield

    Scenario: Validation message should appear if user insert whitespaces in zipCodeOrLocation textfield i-e 12  345
        And I enter "test123@ymail.com" into work email address and insert whitespaces as "12  345" into zipCodeOrLocation
        When I click on submit button
        Then Validation message should appear if whitespaces include in zipCodeOrLocation textfield

    Scenario: Validate terms and condition link
        When I click on terms and condition link
        Then I should navigate to terms and condition page

    Scenario: Validate privay and policy link
        When I click on privay and policy link
        Then I should navigate to privay and policy page
