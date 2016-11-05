@create

Feature: Creating Scenario

  Background:
    Given I am on Sign In page
    When I fill Email field with valid email
    And I fill Password firld with valid email
    And I click on Sign In button

  @create-1
  Scenario: User can create new Scenario on Scenario page
    And I choose organization
    And I click Impairments button
    And I click Scenario button
    And I fill fields with valid info
    And I click Create button
    Then new scenario is added

  @create-2
  Scenario: User can't create new Scenario with existing name
    And I choose organization
    And I click Impairments button
    And I click Scenario button
    And I fill fields with valid info but name field with existing name
    And I click Create button
    Then I get error message stating that Scenario with the same name already exists