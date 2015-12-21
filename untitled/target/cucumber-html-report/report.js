$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("dpath.feature");
formatter.feature({
  "line": 2,
  "name": "E2E Test",
  "description": "",
  "id": "e2e-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    }
  ]
});
formatter.scenario({
  "line": 3,
  "name": "testing translation for new employee test",
  "description": "",
  "id": "e2e-test;testing-translation-for-new-employee-test",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I am on default Dollskill page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I search for needed product",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "choose product",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "add product to Cart",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "proceed to Shopping Cart page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I proceed to Checkout page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I login with existing customer",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I Place order",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should see Confirmation page",
  "keyword": "Then "
});
formatter.match({
  "location": "dpath.I_am_on_default_Dollskill_page()"
});
formatter.result({
  "duration": 10013445922,
  "status": "passed"
});
formatter.match({
  "location": "dpath.I_search_for_needed_product()"
});
formatter.result({
  "duration": 32293191431,
  "status": "passed"
});
formatter.match({
  "location": "dpath.choose_product()"
});
formatter.result({
  "duration": 33129767206,
  "status": "passed"
});
formatter.match({
  "location": "dpath.add_product_to_Cart()"
});
formatter.result({
  "duration": 81067255,
  "status": "passed"
});
formatter.match({
  "location": "dpath.proceed_to_Shopping_Cart_page()"
});
formatter.result({
  "duration": 5536730913,
  "status": "passed"
});
formatter.match({
  "location": "dpath.I_proceed_to_Checkout_page()"
});
formatter.result({
  "duration": 3345140030,
  "status": "passed"
});
formatter.match({
  "location": "dpath.I_login_with_existing_customer()"
});
formatter.result({
  "duration": 11822875325,
  "status": "passed"
});
formatter.match({
  "location": "dpath.I_Place_order()"
});
formatter.result({
  "duration": 148140112,
  "status": "passed"
});
formatter.match({
  "location": "dpath.I_should_see_Confirmation_page()"
});
formatter.result({
  "duration": 8053560819,
  "status": "passed"
});
});