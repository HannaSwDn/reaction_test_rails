Feature: User can take the test and see his reaction time

    As a User
    In order to have fun
    I would like to take the reaction test

    Scenario: User plays the game
        Given I visit the home page
        And I click on 'play'
        And I wait 3 seconds
        Then show me the page
        And I click on the red screen
        Then I should see 'Your reaction time was: 1 second'