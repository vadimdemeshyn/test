$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("CreateScenario.feature");
formatter.feature({
  "line": 3,
  "name": "Creating Scenario",
  "description": "",
  "id": "creating-scenario",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@create"
    }
  ]
});
formatter.before({
  "duration": 1077876339,
  "status": "passed"
});
formatter.before({
  "duration": 74363,
  "status": "passed"
});
formatter.before({
  "duration": 7687280,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on Sign In page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I fill Email field with valid email",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I fill Password firld with valid email",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on Sign In button",
  "keyword": "And "
});
formatter.match({
  "location": "UserSignIn.iAmOnSignInPage()"
});
formatter.result({
  "duration": 2141686841,
  "status": "passed"
});
formatter.match({
  "location": "UserSignIn.iFillEmailFieldWithValidEmail()"
});
formatter.result({
  "duration": 85351715,
  "status": "passed"
});
formatter.match({
  "location": "UserSignIn.iFillPasswordFirldWithValidEmail()"
});
formatter.result({
  "duration": 53230856,
  "status": "passed"
});
formatter.match({
  "location": "UserSignIn.iClickOnSignInButton()"
});
formatter.result({
  "duration": 2647465611,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "User can\u0027t create new Scenario with existing name",
  "description": "",
  "id": "creating-scenario;user-can\u0027t-create-new-scenario-with-existing-name",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 20,
      "name": "@create-2"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "I choose organization",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click Impairments button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I click Scenario button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I fill fields with valid info but name field with existing name",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click Create button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I get error message stating that Scenario with the same name already exists",
  "keyword": "Then "
});
formatter.match({
  "location": "CreatingScenario.iChooseOrganization()"
});
formatter.result({
  "duration": 2082408480,
  "status": "passed"
});
formatter.match({
  "location": "CreatingScenario.iClickImpairmentsButton()"
});
formatter.result({
  "duration": 543215070,
  "status": "passed"
});
formatter.match({
  "location": "CreatingScenario.iClickScenarioButton()"
});
formatter.result({
  "duration": 56445632,
  "status": "passed"
});
formatter.match({
  "location": "CreatingScenario.iFillFieldsWithValidInfoButNameFieldWithExistingName()"
});
formatter.result({
  "duration": 1113407216,
  "status": "passed"
});
formatter.match({
  "location": "CreatingScenario.iClickCreateButton()"
});
formatter.result({
  "duration": 882521675,
  "status": "passed"
});
formatter.match({
  "location": "CreatingScenario.iGetErrorMessageStatingThatScenarioWithTheSameNameAlreadyExists()"
});
formatter.result({
  "duration": 11402540,
  "status": "passed"
});
formatter.after({
  "duration": 76339405,
  "status": "passed"
});
formatter.after({
  "duration": 110925,
  "status": "passed"
});
formatter.after({
  "duration": 2726357022,
  "status": "passed"
});
});