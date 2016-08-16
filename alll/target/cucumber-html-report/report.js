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
  "duration": 2416801025,
  "status": "passed"
});
formatter.before({
  "duration": 6536358,
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
  "duration": 3289951584,
  "status": "passed"
});
formatter.match({
  "location": "UserSignIn.iFillEmailFieldWithValidEmail()"
});
formatter.result({
  "duration": 2561422799,
  "status": "passed"
});
formatter.match({
  "location": "UserSignIn.iFillPasswordFirldWithValidEmail()"
});
formatter.result({
  "duration": 2553334712,
  "status": "passed"
});
formatter.match({
  "location": "UserSignIn.iClickOnSignInButton()"
});
formatter.result({
  "duration": 5872603349,
  "status": "passed"
});
formatter.match({
  "location": "UserSignIn.iShouldBeLoggedInSuccessfully()"
});
formatter.result({
  "duration": 2518233814,
  "status": "passed"
});
formatter.after({
  "duration": 94807892,
  "status": "passed"
});
formatter.after({
  "duration": 1726126583,
  "status": "passed"
});
formatter.before({
  "duration": 1316243704,
  "status": "passed"
});
formatter.before({
  "duration": 486645,
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
  "duration": 2572460526,
  "status": "passed"
});
formatter.match({
  "location": "UserSignIn.iFillEmailFieldWithInvalidEmail()"
});
formatter.result({
  "duration": 2557171973,
  "status": "passed"
});
formatter.match({
  "location": "UserSignIn.iFillPasswordFirldWithValidEmail()"
});
formatter.result({
  "duration": 2548261873,
  "status": "passed"
});
formatter.match({
  "location": "UserSignIn.iClickOnSignInButton()"
});
formatter.result({
  "duration": 3057735222,
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
  "duration": 27987394,
  "status": "passed"
});
formatter.after({
  "duration": 88836275,
  "status": "passed"
});
formatter.after({
  "duration": 1395600550,
  "status": "passed"
});
formatter.before({
  "duration": 1308951090,
  "status": "passed"
});
formatter.before({
  "duration": 489527,
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
  "duration": 2055579448,
  "status": "passed"
});
formatter.match({
  "location": "UserSignIn.iFillEmailFieldWithValidEmail()"
});
formatter.result({
  "duration": 2550840108,
  "status": "passed"
});
formatter.match({
  "location": "UserSignIn.iFillPasswordFirldWithInvalidPwd()"
});
formatter.result({
  "duration": 46119330,
  "status": "passed"
});
formatter.match({
  "location": "UserSignIn.iClickOnSignInButton()"
});
formatter.result({
  "duration": 3152361514,
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
  "duration": 26955610,
  "status": "passed"
});
formatter.after({
  "duration": 84273219,
  "status": "passed"
});
formatter.after({
  "duration": 1396312801,
  "status": "passed"
});
});