
@signin


Feature: User sign in
  @signin-1
  Scenario: User can login with valid credential
    Given I am on Sign In page
    When I fill Email field with valid email
    And I fill Password firld with valid email
    And I click on Sign In button
    Then I should be logged in successfully

  @signin-2
  Scenario: User can't login with invalid credential - email
    Given I am on Sign In page
    When I fill Email field with invalid email
    And I fill Password firld with valid email
    And I click on Sign In button
    Then I should see "Warning message"

  @signin-3
  Scenario: User can't login with invalid credential - pwd
    Given I am on Sign In page
    When I fill Email field with valid email
    And I fill Password firld with invalid pwd
    And I click on Sign In button
    Then I should see "Warning message"

  @signin-4
  Scenario: Successful logout
    Given I am on Sign In page
    When I fill Email field with valid email
    And I fill Password firld with valid email
    And I click on Sign In button
    When I perform log out
    Then I should be not logged in

  @signin-5
  Scenario: Failed login because of missing credentials
    Given I am on Sign In page
    And I click on Sign In button
    Then I should not be logged in

  @signin-6
  Scenario: Failed login because of invalid user
    Given I am on Sign In page
    When I fill Email field with invalid email
    And I fill Password firld with invalid pwd
    And I click on Sign In button
    Then I should see "Warning message"