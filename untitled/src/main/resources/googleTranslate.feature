Feature: E2E Test
  Scenario: testing translation for new employee test

    Given I am on Google home page
    When I search "google translate" text
    And Open result page that is linked to "translate.google.com"
    And I Enter phrase "my test task" into textarea field
    And I Select right language to 'Polish' and click on 'Translate' button
    Then I should ensure that result contains "zadaniem testu" string
