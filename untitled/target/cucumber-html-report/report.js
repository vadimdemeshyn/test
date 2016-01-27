$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("dpath.feature");
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
  "name": "Happy path flow - from entering site to purchase confirmation",
  "description": "",
  "id": "e2e-test;happy-path-flow---from-entering-site-to-purchase-confirmation",
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
  "duration": 8445623120,
  "status": "passed"
});
formatter.match({
  "location": "dpath.I_search_for_needed_product()"
});
formatter.result({
  "duration": 17398162661,
  "status": "passed"
});
formatter.match({
  "location": "dpath.choose_product()"
});
formatter.result({
  "duration": 7772329742,
  "status": "passed"
});
formatter.match({
  "location": "dpath.add_product_to_Cart()"
});
formatter.result({
  "duration": 78454553,
  "status": "passed"
});
formatter.match({
  "location": "dpath.proceed_to_Shopping_Cart_page()"
});
formatter.result({
  "duration": 6580609772,
  "status": "passed"
});
formatter.match({
  "location": "dpath.I_proceed_to_Checkout_page()"
});
formatter.result({
  "duration": 5245138181,
  "status": "passed"
});
formatter.match({
  "location": "dpath.I_login_with_existing_customer()"
});
formatter.result({
  "duration": 12261673775,
  "status": "passed"
});
formatter.match({
  "location": "dpath.I_Place_order()"
});
formatter.result({
  "duration": 40492813318,
  "error_message": "org.openqa.selenium.TimeoutException: Timed out after 40 seconds waiting for visibility of element located by By.cssSelector: #submit-btn\nBuild info: version: \u00272.48.0\u0027, revision: \u0027b7b081a4f1289f17e8ecd38bc67e137c2a12e34a\u0027, time: \u00272015-10-07 09:50:14\u0027\nSystem info: host: \u0027MacBook-Pro-vadim.local\u0027, ip: \u0027192.168.0.155\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.11.2\u0027, java.version: \u00271.8.0_66\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, chrome\u003d{userDataDir\u003d/var/folders/3q/x1_7r_k10j54wk8jdk439m8c0000gn/T/.org.chromium.Chromium.9lpVNW}, takesHeapSnapshot\u003dtrue, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d47.0.2526.111, platform\u003dMAC, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: f54cef61e0a56ea2f70934ab031d70f6\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:80)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:229)\n\tat com.maven.classes.dpath.I_Place_order(dpath.java:123)\n\tat ✽.And I Place order(dpath.feature:12)\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#submit-btn\"}\n  (Session info: chrome\u003d47.0.2526.111)\n  (Driver info: chromedriver\u003d2.20.353124 (035346203162d32c80f1dce587c8154a1efa0c3b),platform\u003dMac OS X 10.11.2 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 9 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.48.0\u0027, revision: \u0027b7b081a4f1289f17e8ecd38bc67e137c2a12e34a\u0027, time: \u00272015-10-07 09:50:14\u0027\nSystem info: host: \u0027MacBook-Pro-vadim.local\u0027, ip: \u0027192.168.0.155\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.11.2\u0027, java.version: \u00271.8.0_66\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, chrome\u003d{userDataDir\u003d/var/folders/3q/x1_7r_k10j54wk8jdk439m8c0000gn/T/.org.chromium.Chromium.9lpVNW}, takesHeapSnapshot\u003dtrue, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d47.0.2526.111, platform\u003dMAC, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: f54cef61e0a56ea2f70934ab031d70f6\n*** Element info: {Using\u003dcss selector, value\u003d#submit-btn}\n\tat sun.reflect.GeneratedConstructorAccessor9.newInstance(Unknown Source)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:647)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:482)\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:430)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:345)\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:861)\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:41)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:205)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:201)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:209)\n\tat com.maven.classes.dpath.I_Place_order(dpath.java:123)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:497)\n\tat cucumber.runtime.Utils$1.call(Utils.java:34)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\n\tat cucumber.runtime.Utils.invoke(Utils.java:30)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:35)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:298)\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:48)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:89)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:40)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:94)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:138)\n\tat org.testng.junit.JUnit4TestRunner.start(JUnit4TestRunner.java:81)\n\tat org.testng.junit.JUnit4TestRunner.run(JUnit4TestRunner.java:69)\n\tat org.testng.TestRunner$1.run(TestRunner.java:682)\n\tat org.testng.TestRunner.runWorkers(TestRunner.java:1005)\n\tat org.testng.TestRunner.privateRunJUnit(TestRunner.java:713)\n\tat org.testng.TestRunner.run(TestRunner.java:614)\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:348)\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:343)\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:305)\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:254)\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1224)\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1149)\n\tat org.testng.TestNG.run(TestNG.java:1057)\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:132)\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.executeSingleClass(TestNGDirectoryTestSuite.java:112)\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.execute(TestNGDirectoryTestSuite.java:99)\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:147)\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:290)\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:242)\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:121)\n",
  "status": "failed"
});
formatter.match({
  "location": "dpath.I_should_see_Confirmation_page()"
});
formatter.result({
  "status": "skipped"
});
});