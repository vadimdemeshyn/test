
@signin


Feature: User sign in
  @signin
  Scenario: User can login with valid credential
    Given I am on Sign In page
    When I fill Email field with valid email
    And I fill Password firld with valid email
    And I click on Sign In button
    Then I should be logged in successfully
  @signin
  Scenario: User can't login with invalid credential - email
    Given I am on Sign In page
    When I fill Email field with invalid email
    And I fill Password firld with valid email
    And I click on Sign In button
    Then I should see "Warning message"
  @signin
  Scenario: User can't login with invalid credential - pwd
    Given I am on Sign In page
    When I fill Email field with valid email
    And I fill Password firld with invalid pwd
    And I click on Sign In button
    Then I should see "Warning message"



