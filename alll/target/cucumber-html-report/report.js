$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("UserSighIn.feature");
formatter.feature({
  "line": 5,
  "name": "User sign in",
  "description": "",
  "id": "user-sign-in",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@signin"
    }
  ]
});
formatter.before({
  "duration": 2336412301,
  "status": "passed"
});
formatter.before({
  "duration": 6825087,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Successful logout",
  "description": "",
  "id": "user-sign-in;successful-logout",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 30,
      "name": "@signin-4"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "I am on Sign In page",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "I fill Email field with valid email",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "I fill Password firld with valid email",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I perform log out",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "I should be not logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "UserSignIn.iAmOnSignInPage()"
});
formatter.result({
  "duration": 3004060359,
  "status": "passed"
});
formatter.match({
  "location": "UserSignIn.iFillEmailFieldWithValidEmail()"
});
formatter.result({
  "duration": 2604487554,
  "status": "passed"
});
formatter.match({
  "location": "UserSignIn.iFillPasswordFirldWithValidEmail()"
});
formatter.result({
  "duration": 47498810,
  "status": "passed"
});
formatter.match({
  "location": "UserSignIn.iClickOnSignInButton()"
});
formatter.result({
  "duration": 1892132555,
  "status": "passed"
});
formatter.match({
  "location": "UserSignIn.iPerformLogOut()"
});
formatter.result({
  "duration": 18246632,
  "status": "passed"
});
formatter.match({
  "location": "UserSignIn.iShouldBeNotLoggedIn()"
});
formatter.result({
  "duration": 228931992,
  "status": "passed"
});
formatter.after({
  "duration": 83622534,
  "status": "passed"
});
formatter.after({
  "duration": 1877422581,
  "status": "passed"
});
});