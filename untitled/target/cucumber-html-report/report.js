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
  "duration": 7767295156,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d47.0.2526.73)\n  (Driver info: chromedriver\u003d2.12.301325 (962dea43ddd90e7e4224a03fa3c36a421281abb7),platform\u003dWindows NT 10.0 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 2.01 seconds\nBuild info: version: \u00272.47.0\u0027, revision: \u00270e4837e94b1fad0db93e88cd972ed3e235a22892\u0027, time: \u00272015-07-29 15:58:41\u0027\nSystem info: host: \u0027vadim-ПК\u0027, ip: \u0027192.168.0.103\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_60\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, chrome\u003d{userDataDir\u003dC:\\Users\\vadim\\AppData\\Local\\Temp\\scoped_dir4596_16019}, takesHeapSnapshot\u003dtrue, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d47.0.2526.73, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: abc17e9cf66e766c031977bcd273eb2a\n*** Element info: {Using\u003dcss selector, value\u003dinput[id\u003d\"email\"]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:348)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:437)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:426)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:340)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:861)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:41)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:205)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:201)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:209)\r\n\tat com.maven.classes.vbridses.I_am_on_Google_home_paga(vbridses.java:19)\r\n\tat ✽.Given I am on Google home paga(1.feature:4)\r\n",
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
  "duration": 3189187864,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d47.0.2526.73)\n  (Driver info: chromedriver\u003d2.12.301325 (962dea43ddd90e7e4224a03fa3c36a421281abb7),platform\u003dWindows NT 10.0 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 4 milliseconds\nBuild info: version: \u00272.47.0\u0027, revision: \u00270e4837e94b1fad0db93e88cd972ed3e235a22892\u0027, time: \u00272015-07-29 15:58:41\u0027\nSystem info: host: \u0027vadim-ПК\u0027, ip: \u0027192.168.0.103\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_60\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, chrome\u003d{userDataDir\u003dC:\\Users\\vadim\\AppData\\Local\\Temp\\scoped_dir2468_21380}, takesHeapSnapshot\u003dtrue, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d47.0.2526.73, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 4800f9787efb91d8d09904e766b11782\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.executeScript(RemoteWebDriver.java:504)\r\n\tat com.maven.classes.dpath.I_am_on_default_Dollskill_page(dpath.java:26)\r\n\tat ✽.Given I am on default Dollskill page(dpath.feature:5)\r\n",
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
  "duration": 3361827319,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: cannot get automation extension\nfrom chrome not reachable\n  (Session info: chrome\u003d47.0.2526.73)\n  (Driver info: chromedriver\u003d2.12.301325 (962dea43ddd90e7e4224a03fa3c36a421281abb7),platform\u003dWindows NT 10.0 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 1.16 seconds\nBuild info: version: \u00272.47.0\u0027, revision: \u00270e4837e94b1fad0db93e88cd972ed3e235a22892\u0027, time: \u00272015-07-29 15:58:41\u0027\nSystem info: host: \u0027vadim-ПК\u0027, ip: \u0027192.168.0.103\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_60\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, chrome\u003d{userDataDir\u003dC:\\Users\\vadim\\AppData\\Local\\Temp\\scoped_dir10796_934}, takesHeapSnapshot\u003dtrue, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d47.0.2526.73, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 7e681fb7c71d90ac55dab9953db0a85d\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:833)\r\n\tat com.maven.classes.googleTestDefs.I_am_on_Google_home_page(googleTestDefs.java:24)\r\n\tat ✽.Given I am on Google home page(googleTranslate.feature:4)\r\n",
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
formatter.result({
  "duration": 3896664399,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: cannot get automation extension\nfrom chrome not reachable\n  (Session info: chrome\u003d47.0.2526.73)\n  (Driver info: chromedriver\u003d2.12.301325 (962dea43ddd90e7e4224a03fa3c36a421281abb7),platform\u003dWindows NT 10.0 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 1.13 seconds\nBuild info: version: \u00272.47.0\u0027, revision: \u00270e4837e94b1fad0db93e88cd972ed3e235a22892\u0027, time: \u00272015-07-29 15:58:41\u0027\nSystem info: host: \u0027vadim-ПК\u0027, ip: \u0027192.168.0.103\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_60\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, chrome\u003d{userDataDir\u003dC:\\Users\\vadim\\AppData\\Local\\Temp\\scoped_dir15220_5471}, takesHeapSnapshot\u003dtrue, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d47.0.2526.73, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: da21236b05e1659d1987806319d38d96\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:833)\r\n\tat com.maven.classes.solidOpinionTestClass.I_am_on_SolidOpinion_registration_page(solidOpinionTestClass.java:22)\r\n\tat ✽.Given I am on SolidOpinion registration page(userRegistrationForm.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "solidOpinionTestClass.I_fill_Name_field_with_correct_info()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "solidOpinionTestClass.I_fill_Email_field_with_valid_email()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "solidOpinionTestClass.I_fill_Pwd_field_with_valid_pwd()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "solidOpinionTestClass.I_fill_Confirm_Email_field_with_valid_pwd()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "solidOpinionTestClass.I_click_Submit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "solidOpinionTestClass.I_am_successfully_signed_up_to_system()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 13,
  "name": "Entered passwords in Pwdd and Confirm Pwd are not the same",
  "description": "",
  "id": "user-login-test;entered-passwords-in-pwdd-and-confirm-pwd-are-not-the-same",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "I am on SolidOpinion registration page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I fill Name field with correct info",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I fill Email field with valid email",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I fill Pwd field with valid pwd",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter password in Confirmation field that differs from password above",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click Submit button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I should get warning that passwords are not the same",
  "keyword": "Then "
});
formatter.match({
  "location": "solidOpinionTestClass.I_am_on_SolidOpinion_registration_page()"
});
formatter.result({
  "duration": 4098004463,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: cannot get automation extension\nfrom chrome not reachable\n  (Session info: chrome\u003d47.0.2526.73)\n  (Driver info: chromedriver\u003d2.12.301325 (962dea43ddd90e7e4224a03fa3c36a421281abb7),platform\u003dWindows NT 10.0 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 1.14 seconds\nBuild info: version: \u00272.47.0\u0027, revision: \u00270e4837e94b1fad0db93e88cd972ed3e235a22892\u0027, time: \u00272015-07-29 15:58:41\u0027\nSystem info: host: \u0027vadim-ПК\u0027, ip: \u0027192.168.0.103\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_60\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, chrome\u003d{userDataDir\u003dC:\\Users\\vadim\\AppData\\Local\\Temp\\scoped_dir3316_8231}, takesHeapSnapshot\u003dtrue, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d47.0.2526.73, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: bd19adda38d5e3f79b61344b978ca47d\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:833)\r\n\tat com.maven.classes.solidOpinionTestClass.I_am_on_SolidOpinion_registration_page(solidOpinionTestClass.java:22)\r\n\tat ✽.Given I am on SolidOpinion registration page(userRegistrationForm.feature:14)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "solidOpinionTestClass.I_fill_Name_field_with_correct_info()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "solidOpinionTestClass.I_fill_Email_field_with_valid_email()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "solidOpinionTestClass.I_fill_Pwd_field_with_valid_pwd()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "solidOpinionTestClass.I_enter_password_in_Confirmation_field_that_differs_from_password_above()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "solidOpinionTestClass.I_click_Submit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "solidOpinionTestClass.I_should_get_warning_that_passwords_are_not_the_same()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 22,
  "name": "User tries to register with incorrect mail",
  "description": "",
  "id": "user-login-test;user-tries-to-register-with-incorrect-mail",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 23,
  "name": "I am on SolidOpinion registration page",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I fill Name field with correct info",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "I fill Email field with invalid email",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I fill Pwd field with valid pwd",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I fill Confirm Email field with valid pwd",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click Submit button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I should get warning that email is invalid",
  "keyword": "Then "
});
formatter.match({
  "location": "solidOpinionTestClass.I_am_on_SolidOpinion_registration_page()"
});
formatter.result({
  "duration": 3556354079,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: cannot get automation extension\nfrom chrome not reachable\n  (Session info: chrome\u003d47.0.2526.73)\n  (Driver info: chromedriver\u003d2.12.301325 (962dea43ddd90e7e4224a03fa3c36a421281abb7),platform\u003dWindows NT 10.0 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 1.14 seconds\nBuild info: version: \u00272.47.0\u0027, revision: \u00270e4837e94b1fad0db93e88cd972ed3e235a22892\u0027, time: \u00272015-07-29 15:58:41\u0027\nSystem info: host: \u0027vadim-ПК\u0027, ip: \u0027192.168.0.103\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_60\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, chrome\u003d{userDataDir\u003dC:\\Users\\vadim\\AppData\\Local\\Temp\\scoped_dir8068_31606}, takesHeapSnapshot\u003dtrue, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d47.0.2526.73, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 86427d3539abe50ee532dce15a7a86a4\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:833)\r\n\tat com.maven.classes.solidOpinionTestClass.I_am_on_SolidOpinion_registration_page(solidOpinionTestClass.java:22)\r\n\tat ✽.Given I am on SolidOpinion registration page(userRegistrationForm.feature:23)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "solidOpinionTestClass.I_fill_Name_field_with_correct_info()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "solidOpinionTestClass.I_fill_Email_field_with_invalid_email()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "solidOpinionTestClass.I_fill_Pwd_field_with_valid_pwd()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "solidOpinionTestClass.I_fill_Confirm_Email_field_with_valid_pwd()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "solidOpinionTestClass.I_click_Submit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "solidOpinionTestClass.I_should_get_warning_that_email_is_invalid()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 31,
  "name": "User tries to register without credentials",
  "description": "",
  "id": "user-login-test;user-tries-to-register-without-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 32,
  "name": "I am on SolidOpinion registration page",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "I click Submit button",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I should get warning that I should type in credentials",
  "keyword": "Then "
});
formatter.match({
  "location": "solidOpinionTestClass.I_am_on_SolidOpinion_registration_page()"
});
formatter.result({
  "duration": 4054440612,
  "status": "passed"
});
formatter.match({
  "location": "solidOpinionTestClass.I_click_Submit_button()"
});
formatter.result({
  "duration": 54810300,
  "status": "passed"
});
formatter.match({
  "location": "solidOpinionTestClass.I_should_get_warning_that_I_should_type_in_credentials()"
});
formatter.result({
  "duration": 580522212,
  "status": "passed"
});
});