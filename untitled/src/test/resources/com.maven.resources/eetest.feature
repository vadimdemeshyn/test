@ee
Feature: E2E Test
  Scenario: Happy path flow - from entering site to purchase confirmation

    Given I am on Dollskill page
    When search for needed product
    And I choose product
    And I add product to Cart
    And I proceed to Shopping Cart page
    And  proceed to Checkout page
    And login with existing customer
    And Place order
    Then should see Confirmation page