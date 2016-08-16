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
  "duration": 1061969175,
  "status": "passed"
});
formatter.before({
  "duration": 77583,
  "status": "passed"
});
formatter.before({
  "duration": 9013150,
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
  "duration": 2090119910,
  "status": "passed"
});
formatter.match({
  "location": "UserSignIn.iFillEmailFieldWithValidEmail()"
});
formatter.result({
  "duration": 85526974,
  "status": "passed"
});
formatter.match({
  "location": "UserSignIn.iFillPasswordFirldWithValidEmail()"
});
formatter.result({
  "duration": 60545704,
  "status": "passed"
});
formatter.match({
  "location": "UserSignIn.iClickOnSignInButton()"
});
formatter.result({
  "duration": 3857702387,
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
  "duration": 6825566923,
  "status": "passed"
});
formatter.match({
  "location": "CreatingScenario.iClickImpairmentsButton()"
});
formatter.result({
  "duration": 5493789995,
  "status": "passed"
});
formatter.match({
  "location": "CreatingScenario.iClickScenarioButton()"
});
formatter.result({
  "duration": 5060468191,
  "status": "passed"
});
formatter.match({
  "location": "CreatingScenario.iFillFieldsWithValidInfo()"
});
formatter.result({
  "duration": 5089225461,
  "status": "passed"
});
formatter.match({
  "location": "CreatingScenario.iClickCreateButton()"
});
formatter.result({
  "duration": 5808115539,
  "status": "passed"
});
formatter.match({
  "location": "CreatingScenario.newScenarioIsAdded()"
});
formatter.result({
  "duration": 5046651506,
  "status": "passed"
});
formatter.after({
  "duration": 76950973,
  "status": "passed"
});
formatter.after({
  "duration": 79299,
  "status": "passed"
});
formatter.after({
  "duration": 2751351752,
  "status": "passed"
});
});