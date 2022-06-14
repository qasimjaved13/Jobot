Feature: Job Apply

    I want to validate the job applying feature

    Background: Login
        Given I navigate to the Jobot website
        When I click on sign in button to navigate to sign in page
        And I click on sign in with email tab
        And I enter "achook789@gmail.com" into email address
        And I click on continue with email button
        And I enter "Test123!" into password
        And I click on sign in button
        Then I should login successfully

    Scenario: Verify the validation message when user doesn't upload the resume
        When I enter "Software Engineer" job into search
        And I enter "California" into location
        And I click on search button
        Then I should see the jobs list
        And I select the "Cloud Software Engineer" Job
        Then I should press Easy Apply Now button
        And I click on Easy Apply Now button
        Then Validation message saying "Resume is required" should appear

    Scenario: User should not be able to apply job if resume is not uploaded
        When I enter "Software Engineer" job into search
        And I enter "California" into location
        And I click on search button
        Then I should see the jobs list
        And I select the "Cloud Software Engineer" Job
        Then I should press Easy Apply Now button
        And I click on Job Profile tab
        And I click on Complete Profile button
        Then Success message saying "Thank you for applying with Jobot" should not appear

    Scenario: User should be able to apply to job via Easy Job Apply
        When I enter "Software Engineer" job into search
        And I enter "California" into location
        And I click on search button
        Then I should see the jobs list
        And I select the "Senior Software Engineer - Node, Vue" Job
        Then I should press Easy Apply Now button
        And I upload the resume
        And I click on Easy Apply Now button
        And I click on Complete Profile button
        Then Success message saying "Thank you for applying with Jobot" should appear

    Scenario: User should be able to apply to job via 1-Click Apply
        When I enter "Software Engineer" job into search
        And I enter "California" into location
        And I click on search button
        Then I should see the jobs list
        And I select the "Senior Embedded Software Engineer" Job
        Then I should press 1-Click Apply button
        Then Success message saying "Thank you for applying with Jobot" should appear

    Scenario: Verify the validation if user already applied to any job
        When I enter "Software Engineer" job into search
        And I enter "California" into location
        And I click on search button
        Then I should see the jobs list
        And I select the "Senior Software Engineer - Node, Vue" Job
        Then I should press View Application button
        Then Confirmation message saying "You applied to this job" should appear
