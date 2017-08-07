$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("UserSighIn.feature");
formatter.feature({
  "line": 2,
  "name": "",
  "description": "User sign in",
  "id": "",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@signin"
    }
  ]
});
formatter.before({
  "duration": 1162599242,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "User can login with valid credential",
  "description": "",
  "id": ";user-can-login-with-valid-credential",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@signin-1"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on Sign In page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I fill Email field with valid email",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I fill Password firld with valid email",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I should be logged in successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "UserSignIn.iAmOnSignInPage()"
});
formatter.result({
  "duration": 3105769380,
  "status": "passed"
});
formatter.match({
  "location": "UserSignIn.iFillEmailFieldWithValidEmail()"
});
formatter.result({
  "duration": 4340249077,
  "status": "passed"
});
formatter.match({
  "location": "UserSignIn.iFillPasswordFirldWithValidEmail()"
});
formatter.result({
  "duration": 104168956,
  "status": "passed"
});
formatter.match({
  "location": "UserSignIn.iClickOnSignInButton()"
});
formatter.result({
  "duration": 25249405,
  "status": "passed"
});
formatter.match({
  "location": "UserSignIn.iShouldBeLoggedInSuccessfully()"
});
formatter.result({
  "duration": 3014572215,
  "status": "passed"
});
formatter.after({
  "duration": 85612356,
  "status": "passed"
});
});