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
  "duration": 1056518639,
  "status": "passed"
});
formatter.before({
  "duration": 7639160,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "User can login with valid credential",
  "description": "",
  "id": "user-sign-in;user-can-login-with-valid-credential",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@signin"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I am on Sign In page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I fill Email field with valid email",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I fill Password firld with valid email",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I should be logged in successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "UserSignIn.iAmOnSignInPage()"
});
formatter.result({
  "duration": 1885377115,
  "status": "passed"
});
formatter.match({
  "location": "UserSignIn.iFillEmailFieldWithValidEmail()"
});
formatter.result({
  "duration": 85627889,
  "status": "passed"
});
formatter.match({
  "location": "UserSignIn.iFillPasswordFirldWithValidEmail()"
});
formatter.result({
  "duration": 55488303,
  "status": "passed"
});
formatter.match({
  "location": "UserSignIn.iClickOnSignInButton()"
});
formatter.result({
  "duration": 1892233927,
  "status": "passed"
});
formatter.match({
  "location": "UserSignIn.iShouldBeLoggedInSuccessfully()"
});
formatter.result({
  "duration": 18856635,
  "status": "passed"
});
formatter.after({
  "duration": 73256449,
  "status": "passed"
});
formatter.after({
  "duration": 2720398534,
  "status": "passed"
});
formatter.before({
  "duration": 619245534,
  "status": "passed"
});
formatter.before({
  "duration": 676108,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "User can\u0027t login with invalid credential - email",
  "description": "",
  "id": "user-sign-in;user-can\u0027t-login-with-invalid-credential---email",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@signin"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I am on Sign In page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I fill Email field with invalid email",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I fill Password firld with valid email",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I should see \"Warning message\"",
  "keyword": "Then "
});
formatter.match({
  "location": "UserSignIn.iAmOnSignInPage()"
});
formatter.result({
  "duration": 1921749458,
  "status": "passed"
});
formatter.match({
  "location": "UserSignIn.iFillEmailFieldWithInvalidEmail()"
});
formatter.result({
  "duration": 89877172,
  "status": "passed"
});
formatter.match({
  "location": "UserSignIn.iFillPasswordFirldWithValidEmail()"
});
formatter.result({
  "duration": 72975992,
  "status": "passed"
});
formatter.match({
  "location": "UserSignIn.iClickOnSignInButton()"
});
formatter.result({
  "duration": 753320437,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Warning message",
      "offset": 14
    }
  ],
  "location": "UserSignIn.iShouldSee(String)"
});
formatter.result({
  "duration": 53989781,
  "status": "passed"
});
formatter.after({
  "duration": 73057819,
  "status": "passed"
});
formatter.after({
  "duration": 2749952633,
  "status": "passed"
});
formatter.before({
  "duration": 598646936,
  "status": "passed"
});
formatter.before({
  "duration": 427562,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "User can\u0027t login with invalid credential - pwd",
  "description": "",
  "id": "user-sign-in;user-can\u0027t-login-with-invalid-credential---pwd",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 20,
      "name": "@signin"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "I am on Sign In page",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I fill Email field with valid email",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I fill Password firld with invalid pwd",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I click on Sign In button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I should see \"Warning message\"",
  "keyword": "Then "
});
formatter.match({
  "location": "UserSignIn.iAmOnSignInPage()"
});
formatter.result({
  "duration": 2909086116,
  "status": "passed"
});
formatter.match({
  "location": "UserSignIn.iFillEmailFieldWithValidEmail()"
});
formatter.result({
  "duration": 84569362,
  "status": "passed"
});
formatter.match({
  "location": "UserSignIn.iFillPasswordFirldWithInvalidPwd()"
});
formatter.result({
  "duration": 79482322,
  "status": "passed"
});
formatter.match({
  "location": "UserSignIn.iClickOnSignInButton()"
});
