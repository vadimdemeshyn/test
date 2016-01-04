$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("dpath.feature");
formatter.feature({
  "id": "e2e-test",
  "tags": [
    {
      "name": "@smoke",
      "line": 1
    }
  ],
  "description": "",
  "name": "E2E Test",
  "keyword": "Feature",
  "line": 2
});
formatter.scenario({
  "id": "e2e-test;testing-translation-for-new-employee-test",
  "description": "",
  "name": "testing translation for new employee test",
  "keyword": "Scenario",
  "line": 3,
  "type": "scenario"
});
formatter.step({
  "name": "I am on default Dollskill page",
  "keyword": "Given ",
  "line": 5
});
formatter.step({
  "name": "I search for needed product",
  "keyword": "When ",
  "line": 6
});
formatter.step({
  "name": "choose product",
  "keyword": "And ",
  "line": 7
});
formatter.step({
  "name": "add product to Cart",
  "keyword": "And ",
  "line": 8
});
formatter.step({
  "name": "proceed to Shopping Cart page",
  "keyword": "And ",
  "line": 9
});
formatter.step({
  "name": "I proceed to Checkout page",
  "keyword": "And ",
  "line": 10
});
formatter.step({
  "name": "I login with existing customer",
  "keyword": "And ",
  "line": 11
});
formatter.step({
  "name": "I Place order",
  "keyword": "And ",
  "line": 12
});
formatter.step({
  "name": "I should see Confirmation page",
  "keyword": "Then ",
  "line": 13
});
formatter.match({
  "location": "dpath.I_am_on_default_Dollskill_page()"
});
formatter.result({
  "duration": 4071094154,
  "status": "passed"
});
formatter.match({
  "location": "dpath.I_search_for_needed_product()"
});
formatter.result({
  "duration": 3699360703,
  "status": "passed"
});
formatter.match({
  "location": "dpath.choose_product()"
});
formatter.result({
  "duration": 3230475572,
  "status": "passed"
});
formatter.match({
  "location": "dpath.add_product_to_Cart()"
});
formatter.result({
  "duration": 10142722512,
  "status": "passed"
});
formatter.match({
  "location": "dpath.proceed_to_Shopping_Cart_page()"
});
formatter.result({
  "duration": 1870818577,
  "status": "passed"
});
formatter.match({
  "location": "dpath.I_proceed_to_Checkout_page()"
});
formatter.result({
  "duration": 2413809232,
  "status": "passed"
});
formatter.match({
  "location": "dpath.I_login_with_existing_customer()"
});
formatter.result({
  "duration": 11373073988,
  "status": "passed"
});
formatter.match({
  "location": "dpath.I_Place_order()"
});
formatter.result({
  "duration": 10285053423,
  "status": "passed"
});
formatter.match({
  "location": "dpath.I_should_see_Confirmation_page()"
});
formatter.result({
  "duration": 77859,
  "status": "passed"
});
});