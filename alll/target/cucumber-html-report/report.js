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
  "duration": 2289955762,
  "status": "passed"
});
formatter.before({
  "duration": 5612129,
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
  "duration": 3126436988,
  "status": "passed"
});
formatter.match({
  "location": "UserSignIn.iFillEmailFieldWithValidEmail()"
});
formatter.result({
  "duration": 2606542880,
  "status": "passed"
});
formatter.match({
  "location": "UserSignIn.iFillPasswordFirldWithValidEmail()"
});
formatter.result({
  "duration": 51301634,
  "status": "passed"
});
formatter.match({
  "location": "UserSignIn.iClickOnSignInButton()"
});
formatter.result({
  "duration": 1605339911,
  "status": "passed"
});
formatter.match({
  "location": "UserSignIn.iPerformLogOut()"
});
formatter.result({
  "duration": 551422950,
  "status": "passed"
});
formatter.match({
  "location": "UserSignIn.iShouldBeNotLoggedIn()"
});
formatter.result({
  "duration": 128502811,
  "status": "passed"
});
formatter.after({
  "duration": 75257870,
  "status": "passed"
});
formatter.after({
  "duration": 1856572306,
  "status": "passed"
});
});