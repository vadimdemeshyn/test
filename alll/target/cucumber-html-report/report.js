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
  "duration": 642361604,
  "status": "passed"
});
formatter.before({
  "duration": 5810681,
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
  "duration": 1643012664,
  "status": "passed"
});
formatter.match({
  "location": "UserSignIn.iFillEmailFieldWithValidEmail()"
});
formatter.result({
  "duration": 3217038455,
  "status": "passed"
});
formatter.match({
  "location": "UserSignIn.iFillPasswordFirldWithValidEmail()"
});
formatter.result({
  "duration": 3769585,
  "status": "passed"
});
formatter.match({
  "location": "UserSignIn.iClickOnSignInButton()"
});
formatter.result({
  "duration": 1375746716,
  "status": "passed"
});
formatter.match({
  "location": "UserSignIn.iShouldBeLoggedInSuccessfully()"
});
formatter.result({
  "duration": 1745082,
  "status": "passed"
});
formatter.after({
  "duration": 1624383,
  "status": "passed"
});
formatter.after({
  "duration": 4328610,
  "status": "passed"
});
formatter.before({
  "duration": 5035737,
  "status": "passed"
});
formatter.before({
  "duration": 279089,
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
  "duration": 584100415,
  "status": "passed"
});
formatter.match({
  "location": "UserSignIn.iFillEmailFieldWithInvalidEmail()"
});
formatter.result({
  "duration": 457877270,
  "status": "passed"
});
formatter.match({
  "location": "UserSignIn.iFillPasswordFirldWithValidEmail()"
});
formatter.result({
  "duration": 1988445,
  "status": "passed"
});
formatter.match({
  "location": "UserSignIn.iClickOnSignInButton()"
});
formatter.result({
  "duration": 273717212,
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
  "duration": 5671231,
  "status": "passed"
});
formatter.after({
  "duration": 530884,
  "status": "passed"
});
formatter.after({
  "duration": 4789192,
  "status": "passed"
});
formatter.before({
  "duration": 6466505,
  "status": "passed"
});
formatter.before({
  "duration": 227454,
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
  "duration": 572393172,
  "status": "passed"
});
formatter.match({
  "location": "UserSignIn.iFillEmailFieldWithValidEmail()"
});
formatter.result({
  "duration": 2972394143,
  "status": "passed"
});
formatter.match({
  "location": "UserSignIn.iFillPasswordFirldWithInvalidPwd()"
});
formatter.result({
  "duration": 1752597,
  "status": "passed"
});
formatter.match({
  "location": "UserSignIn.iClickOnSignInButton()"
});
formatter.result({
  "duration": 350358980,
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
  "duration": 261549,
  "status": "passed"
});
formatter.after({
  "duration": 529431,
  "status": "passed"
});
formatter.after({
  "duration": 3397924,
  "status": "passed"
});
});