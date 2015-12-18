$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("1.feature");
formatter.feature({
  "line": 1,
  "name": "E2E Test",
  "description": "",
  "id": "e2e-test",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "testing translation for new employee testqw",
  "description": "",
  "id": "e2e-test;testing-translation-for-new-employee-testqw",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I am on Google home paga",
  "keyword": "Given "
});
formatter.match({
  "location": "vbridses.I_am_on_Google_home_paga()"
});
formatter.result({
  "duration": 6702865839,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d47.0.2526.106)\n  (Driver info: chromedriver\u003d2.12.301325 (962dea43ddd90e7e4224a03fa3c36a421281abb7),platform\u003dWindows NT 10.0 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 2.01 seconds\nBuild info: version: \u00272.48.0\u0027, revision: \u0027b7b081a4f1289f17e8ecd38bc67e137c2a12e34a\u0027, time: \u00272015-10-07 09:50:14\u0027\nSystem info: host: \u0027vadim-ПК\u0027, ip: \u0027192.168.0.103\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_60\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, chrome\u003d{userDataDir\u003dC:\\Users\\vadim\\AppData\\Local\\Temp\\scoped_dir1716_936}, takesHeapSnapshot\u003dtrue, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d47.0.2526.106, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 244a1f95a8389d28614bf2b3822ff0c2\n*** Element info: {Using\u003dcss selector, value\u003dinput[id\u003d\"email\"]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:647)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:482)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:430)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:345)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:861)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:41)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:205)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:201)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:209)\r\n\tat com.maven.classes.vbridses.I_am_on_Google_home_paga(vbridses.java:21)\r\n\tat ✽.Given I am on Google home paga(1.feature:4)\r\n",
  "status": "failed"
});
formatter.uri("dpath.feature");
formatter.feature({
  "line": 2,
  "name": "E2E Test",
  "description": "",
  "id": "e2e-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    }
  ]
});
formatter.scenario({
  "line": 3,
  "name": "testing translation for new employee test",
  "description": "",
  "id": "e2e-test;testing-translation-for-new-employee-test",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I am on default Dollskill page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I search for needed product",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "choose product",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "add product to Cart",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "proceed to Shopping Cart page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I proceed to Checkout page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I login with existing customer",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I Place order",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should see Confirmation page",
  "keyword": "Then "
});
formatter.match({
  "location": "dpath.I_am_on_default_Dollskill_page()"
});
formatter.result({
  "duration": 7574614039,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: cannot get automation extension\nfrom chrome not reachable\n  (Session info: chrome\u003d47.0.2526.106)\n  (Driver info: chromedriver\u003d2.12.301325 (962dea43ddd90e7e4224a03fa3c36a421281abb7),platform\u003dWindows NT 10.0 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 1.00 seconds\nBuild info: version: \u00272.48.0\u0027, revision: \u0027b7b081a4f1289f17e8ecd38bc67e137c2a12e34a\u0027, time: \u00272015-10-07 09:50:14\u0027\nSystem info: host: \u0027vadim-ПК\u0027, ip: \u0027192.168.0.103\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_60\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, chrome\u003d{userDataDir\u003dC:\\Users\\vadim\\AppData\\Local\\Temp\\scoped_dir17112_17414}, takesHeapSnapshot\u003dtrue, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d47.0.2526.106, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: a78c669fa077958e2e216df6c4465ce0\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:647)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:907)\r\n\tat com.maven.classes.dpath.I_am_on_default_Dollskill_page(dpath.java:25)\r\n\tat ✽.Given I am on default Dollskill page(dpath.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "dpath.I_search_for_needed_product()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "dpath.choose_product()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "dpath.add_product_to_Cart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "dpath.proceed_to_Shopping_Cart_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "dpath.I_proceed_to_Checkout_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "dpath.I_login_with_existing_customer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "dpath.I_Place_order()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "dpath.I_should_see_Confirmation_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("googleTranslate.feature");
formatter.feature({
  "line": 1,
  "name": "E2E Test",
  "description": "",
  "id": "e2e-test",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "testing translation for new employee test",
  "description": "",
  "id": "e2e-test;testing-translation-for-new-employee-test",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I am on Google home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I search \"google translate\" text",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Open result page that is linked to \"translate.google.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I Enter phrase \"my test task\" into textarea field",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I Select right language to \u0027Polish\u0027 and click on \u0027Translate\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I should ensure that result contains \"zadaniem testu\" string",
  "keyword": "Then "
});
formatter.match({
  "location": "googleTestDefs.I_am_on_Google_home_page()"
});
formatter.result({
  "duration": 3431967703,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: cannot get automation extension\nfrom chrome not reachable\n  (Session info: chrome\u003d47.0.2526.106)\n  (Driver info: chromedriver\u003d2.12.301325 (962dea43ddd90e7e4224a03fa3c36a421281abb7),platform\u003dWindows NT 10.0 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 1.13 seconds\nBuild info: version: \u00272.48.0\u0027, revision: \u0027b7b081a4f1289f17e8ecd38bc67e137c2a12e34a\u0027, time: \u00272015-10-07 09:50:14\u0027\nSystem info: host: \u0027vadim-ПК\u0027, ip: \u0027192.168.0.103\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_60\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, chrome\u003d{userDataDir\u003dC:\\Users\\vadim\\AppData\\Local\\Temp\\scoped_dir18900_17417}, takesHeapSnapshot\u003dtrue, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d47.0.2526.106, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 69603e9771e44fe8459c8e2393a0deb5\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:647)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:907)\r\n\tat com.maven.classes.googleTestDefs.I_am_on_Google_home_page(googleTestDefs.java:24)\r\n\tat ✽.Given I am on Google home page(googleTranslate.feature:4)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "google translate",
      "offset": 10
    }
  ],
  "location": "googleTestDefs.I_search_text(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "translate.google.com",
      "offset": 36
    }
  ],
  "location": "googleTestDefs.Open_result_page_that_is_linked_to(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "my test task",
      "offset": 16
    }
  ],
  "location": "googleTestDefs.I_Enter_phrase_into_textarea_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "googleTestDefs.I_Select_right_language_to_Polish_and_click_on_Translate_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "zadaniem testu",
      "offset": 38
    }
  ],
  "location": "googleTestDefs.I_should_ensure_that_result_contains_string(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("userRegistrationForm.feature");
formatter.feature({
  "line": 1,
  "name": "User Login Test",
  "description": "",
  "id": "user-login-test",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "User registers with valid credentials",
  "description": "",
  "id": "user-login-test;user-registers-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I am on SolidOpinion registration page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I fill Name field with correct info",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I fill Email field with valid email",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I fill Pwd field with valid pwd",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I fill Confirm Email field with valid pwd",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click Submit button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I am successfully signed up to system",
  "keyword": "Then "
});
formatter.match({
  "location": "solidOpinionTestClass.I_am_on_SolidOpinion_registration_page()"
});
