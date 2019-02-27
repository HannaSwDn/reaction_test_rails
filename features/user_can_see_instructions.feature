Feature: User can see instructions

    As a User
    In order to know how to play
    I would like to see instructions

    Scenario: User can see instructions
        Given I visit the home page
        And I click on "instructions"
        Then I should see "How to take the test:"