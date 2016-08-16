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
  "duration": 2766564940,
  "status": "passed"
});
formatter.before({
  "duration": 95757,
  "status": "passed"
});
formatter.before({
  "duration": 6871867,
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
  "duration": 3393592585,
  "status": "passed"
});
formatter.match({
  "location": "UserSignIn.iFillEmailFieldWithValidEmail()"
});
formatter.result({
  "duration": 2607187588,
  "status": "passed"
});
formatter.match({
  "location": "UserSignIn.iFillPasswordFirldWithValidEmail()"
});
formatter.result({
  "duration": 2712445414,
  "status": "passed"
});
formatter.match({
  "location": "UserSignIn.iClickOnSignInButton()"
});
formatter.result({
  "duration": 4491209728,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "User can create new Scenario on Scenario page",
  "description": "",
  "id": "creating-scenario;user-can-create-new-scenario-on-scenario-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@create-1"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I choose organization",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click Impairments button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click Scenario button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I fill fields with valid info",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click Create button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "new scenario is added",
  "keyword": "Then "
});
formatter.match({
  "location": "CreatingScenario.iChooseOrganization()"
});
formatter.result({
  "duration": 3197019086,
  "status": "passed"
});
formatter.match({
  "location": "CreatingScenario.iClickImpairmentsButton()"
});
formatter.result({
  "duration": 3185082013,
  "status": "passed"
});
formatter.match({
  "location": "CreatingScenario.iClickScenarioButton()"
});
formatter.result({
  "duration": 2581819552,
  "status": "passed"
});
formatter.match({
  "location": "CreatingScenario.iFillFieldsWithValidInfo()"
});
formatter.result({
  "duration": 2570723085,
  "status": "passed"
});
formatter.match({
  "location": "CreatingScenario.iClickCreateButton()"
});
formatter.result({
  "duration": 3376103247,
  "status": "passed"
});
formatter.match({
  "location": "CreatingScenario.newScenarioIsAdded()"
});
formatter.result({
  "duration": 2544920195,
  "status": "passed"
});
formatter.after({
  "duration": 84114352,
  "status": "passed"
});
formatter.after({
  "duration": 89702,
  "status": "passed"
});
formatter.after({
  "duration": 2093801319,
  "status": "passed"
});
});