Feature: User can see instructions

    As a User
    In order to know how to play
    I would like to see instructions

    Scenario: User can open the modal
        Given I visit the home page
        And I click on "instructions"
        Then I should see "How to take the test:"

    Scenario: User can close the modal
        Given I visit the home page
        And I click on "instructions"
        And I click on "X"
        Then I should not see "How to take the test:"
