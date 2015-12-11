Feature: User Login Test


  Scenario: User registers with valid credentials
    Given I am on SolidOpinion registration page
    When I fill Name field with correct info
    And I fill Email field with valid email
    And I fill Pwd field with valid pwd
    And I fill Confirm Email field with valid pwd
    And I click Submit button
    Then I am successfully signed up to system

  Scenario: Entered passwords in Pwdd and Confirm Pwd are not the same
     Given I am on SolidOpinion registration page
     When I fill Name field with correct info
     And I fill Email field with valid email
     And I fill Pwd field with valid pwd
     And I enter password in Confirmation field that differs from password above
     And I click Submit button
     Then I should get warning that passwords are not the same

  Scenario: User tries to register with incorrect mail
     Given I am on SolidOpinion registration page
     When I fill Name field with correct info
     And I fill Email field with invalid email
     And I fill Pwd field with valid pwd
     And I fill Confirm Email field with valid pwd
     And I click Submit button
     Then I should get warning that email is invalid

  Scenario: User tries to register without credentials
    Given I am on SolidOpinion registration page
    And I click Submit button
    Then I should get warning that I should type in credentials