@smoke
Feature: E2E Test
  Scenario: testing translation for new employee test

    Given I am on default Dollskill page
    When I search for needed product
    And choose product
    And add product to Cart
    And proceed to Shopping Cart page
    And I proceed to Checkout page
    And I login with existing customer
    And I Place order
    Then I should see Confirmation page