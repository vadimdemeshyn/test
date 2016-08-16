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
  "duration": 2110136045,
  "status": "passed"
});
formatter.before({
  "duration": 7521453,
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
  "duration": 2812782084,
  "status": "passed"
});
formatter.match({
  "location": "UserSignIn.iFillEmailFieldWithValidEmail()"
});
formatter.result({
  "duration": 2555098672,
  "status": "passed"
});
formatter.match({
  "location": "UserSignIn.iFillPasswordFirldWithValidEmail()"
});
formatter.result({
  "duration": 2553361415,
  "status": "passed"
});
formatter.match({
  "location": "UserSignIn.iClickOnSignInButton()"
});
formatter.result({
  "duration": 5934002371,
  "status": "passed"
});
formatter.match({
  "location": "UserSignIn.iShouldBeLoggedInSuccessfully()"
});
formatter.result({
  "duration": 2515294302,
  "status": "passed"
});
formatter.after({
  "duration": 79971586,
  "status": "passed"
});
formatter.after({
  "duration": 1734422332,
  "status": "passed"
});
formatter.before({
  "duration": 1318980817,
  "status": "passed"
});
formatter.before({
  "duration": 3584287,
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
  "duration": 2255737942,
  "status": "passed"
});
formatter.match({
  "location": "UserSignIn.iFillEmailFieldWithInvalidEmail()"
});
formatter.result({
  "duration": 2553720293,
  "status": "passed"
});
formatter.match({
  "location": "UserSignIn.iFillPasswordFirldWithValidEmail()"
});
formatter.result({
  "duration": 2550966791,
  "status": "passed"
});
formatter.match({
  "location": "UserSignIn.iClickOnSignInButton()"
});
formatter.result({
  "duration": 3162235666,
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
  "duration": 31160982,
  "error_message": "java.lang.AssertionError: expected [×\nInvalid email or password.] but found [× Invalid email or password.]\n\tat org.testng.Assert.fail(Assert.java:94)\n\tat org.testng.Assert.failNotEquals(Assert.java:494)\n\tat org.testng.Assert.assertEquals(Assert.java:123)\n\tat org.testng.Assert.assertEquals(Assert.java:176)\n\tat org.testng.Assert.assertEquals(Assert.java:186)\n\tat PageObject.SignInPage.getWARNING_MESSAGE(SignInPage.java:89)\n\tat TestCode.UserSignIn.iShouldSee(UserSignIn.java:97)\n\tat ✽.Then I should see \"Warning message\"(UserSighIn.feature:19)\n",
  "status": "failed"
});
formatter.after({
  "duration": 93763518,
  "status": "passed"
});
formatter.after({
  "duration": 1398914711,
  "status": "passed"
});
formatter.before({
  "duration": 1309479523,
  "status": "passed"
});
formatter.before({
  "duration": 656096,
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
  "duration": 2565919747,
  "status": "passed"
});
formatter.match({
  "location": "UserSignIn.iFillEmailFieldWithValidEmail()"
});
formatter.result({
  "duration": 2553408001,
  "status": "passed"
});
formatter.match({
  "location": "UserSignIn.iFillPasswordFirldWithInvalidPwd()"
});
formatter.result({
  "duration": 44563027,
  "status": "passed"
});
formatter.match({
  "location": "UserSignIn.iClickOnSignInButton()"
});
formatter.result({
  "duration": 3358460544,
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
  "duration": 29718438,
  "error_message": "java.lang.AssertionError: expected [×\nInvalid email or password.] but found [× Invalid email or password.]\n\tat org.testng.Assert.fail(Assert.java:94)\n\tat org.testng.Assert.failNotEquals(Assert.java:494)\n\tat org.testng.Assert.assertEquals(Assert.java:123)\n\tat org.testng.Assert.assertEquals(Assert.java:176)\n\tat org.testng.Assert.assertEquals(Assert.java:186)\n\tat PageObject.SignInPage.getWARNING_MESSAGE(SignInPage.java:89)\n\tat TestCode.UserSignIn.iShouldSee(UserSignIn.java:97)\n\tat ✽.Then I should see \"Warning message\"(UserSighIn.feature:26)\n",
  "status": "failed"
});
formatter.after({
  "duration": 83408259,
  "status": "passed"
});
formatter.after({
  "duration": 1400541974,
  "status": "passed"
});
});