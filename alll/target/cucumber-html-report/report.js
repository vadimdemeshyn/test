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
  "duration": 1072165953,
  "status": "passed"
});
formatter.before({
  "duration": 3230669,
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
      "name": "@signin-1"
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
  "duration": 3542917959,
  "status": "passed"
});
formatter.match({
  "location": "UserSignIn.iFillEmailFieldWithValidEmail()"
});
formatter.result({
  "duration": 2694817005,
  "status": "passed"
});
formatter.match({
  "location": "UserSignIn.iFillPasswordFirldWithValidEmail()"
});
formatter.result({
  "duration": 117298101,
  "status": "passed"
});
formatter.match({
  "location": "UserSignIn.iClickOnSignInButton()"
});
formatter.result({
  "duration": 18198408,
  "status": "passed"
});
formatter.match({
  "location": "UserSignIn.iShouldBeLoggedInSuccessfully()"
});
formatter.result({
  "duration": 5838023,
  "error_message": "java.lang.AssertionError: expected [https://upland-logic-staging.herokuapp.com/users/sign_in] but found [https://upland-logic-staging.herokuapp.com/organizations]\n\tat org.testng.Assert.fail(Assert.java:94)\n\tat org.testng.Assert.failNotEquals(Assert.java:513)\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:135)\n\tat org.testng.Assert.assertEquals(Assert.java:116)\n\tat org.testng.Assert.assertEquals(Assert.java:190)\n\tat org.testng.Assert.assertEquals(Assert.java:200)\n\tat TestCode.UserSignIn.iShouldBeLoggedInSuccessfully(UserSignIn.java:80)\n\tat ✽.Then I should be logged in successfully(UserSighIn.feature:12)\n",
  "status": "failed"
});
formatter.after({
  "duration": 75767822,
  "status": "passed"
});
});