$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("dpath.feature");
formatter.feature({
  "id": "e2e-test",
  "tags": [
    {
      "name": "@smoke",
      "line": 1
    }
  ],
  "description": "",
  "name": "E2E Test",
  "keyword": "Feature",
  "line": 2
});
formatter.scenario({
  "id": "e2e-test;testing-translation-for-new-employee-test",
  "description": "",
  "name": "testing translation for new employee test",
  "keyword": "Scenario",
  "line": 3,
  "type": "scenario"
});
formatter.step({
  "name": "I am on default Dollskill page",
  "keyword": "Given ",
  "line": 5
});
formatter.step({
  "name": "I search for needed product",
  "keyword": "When ",
  "line": 6
});
formatter.step({
  "name": "choose product",
  "keyword": "And ",
  "line": 7
});
formatter.step({
  "name": "add product to Cart",
  "keyword": "And ",
  "line": 8
});
formatter.step({
  "name": "proceed to Shopping Cart page",
  "keyword": "And ",
  "line": 9
});
formatter.step({
  "name": "I proceed to Checkout page",
  "keyword": "And ",
  "line": 10
});
formatter.step({
  "name": "I login with existing customer",
  "keyword": "And ",
  "line": 11
});
formatter.step({
  "name": "I Place order",
  "keyword": "And ",
  "line": 12
});
formatter.step({
  "name": "I should see Confirmation page",
  "keyword": "Then ",
  "line": 13
});
formatter.match({
  "location": "dpath.I_am_on_default_Dollskill_page()"
});
formatter.result({
  "duration": 10179571679,
  "status": "passed"
});
formatter.match({
  "location": "dpath.I_search_for_needed_product()"
});
formatter.result({
  "duration": 32740264889,
  "status": "passed"
});
formatter.match({
  "location": "dpath.choose_product()"
});
formatter.result({
  "duration": 4754743272,
  "status": "passed"
});
formatter.match({
  "location": "dpath.add_product_to_Cart()"
});
formatter.result({
  "duration": 255055550,
  "status": "passed"
});
formatter.match({
  "location": "dpath.proceed_to_Shopping_Cart_page()"
});
formatter.result({
  "duration": 6599204990,
  "status": "passed"
});
formatter.match({
  "location": "dpath.I_proceed_to_Checkout_page()"
});
formatter.result({
  "duration": 3910513464,
  "status": "passed"
});
formatter.match({
  "location": "dpath.I_login_with_existing_customer()"
});
formatter.result({
  "duration": 12037563011,
  "status": "passed"
});
formatter.match({
  "location": "dpath.I_Place_order()"
});
formatter.result({
  "duration": 306808083,
  "status": "passed"
});
formatter.match({
  "location": "dpath.I_should_see_Confirmation_page()"
});
formatter.result({
  "duration": 120093585732,
  "status": "failed",
  "error_message": "org.openqa.selenium.TimeoutException: Timed out after 120 seconds waiting for visibility of element located by By.cssSelector: button[title\u003d\"Continue Shopping\"]\nBuild info: version: \u00272.48.0\u0027, revision: \u0027b7b081a4f1289f17e8ecd38bc67e137c2a12e34a\u0027, time: \u00272015-10-07 09:50:14\u0027\nSystem info: host: \u0027N/A\u0027, ip: \u0027N/A\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00273.19.0-25-generic\u0027, java.version: \u00271.7.0_91\u0027\nSession ID: 8b0d4980-a980-11e5-833e-4b096d7df6cf\nDriver info: org.openqa.selenium.phantomjs.PhantomJSDriver\nCapabilities [{platform\u003dLINUX, acceptSslCerts\u003dfalse, javascriptEnabled\u003dtrue, browserName\u003dphantomjs, rotatable\u003dfalse, driverVersion\u003d1.1.0, locationContextEnabled\u003dfalse, version\u003d1.9.7, cssSelectorsEnabled\u003dtrue, databaseEnabled\u003dfalse, handlesAlerts\u003dfalse, browserConnectionEnabled\u003dfalse, proxy\u003d{proxyType\u003ddirect}, nativeEvents\u003dtrue, webStorageEnabled\u003dfalse, driverName\u003dghostdriver, applicationCacheEnabled\u003dfalse, takesScreenshot\u003dtrue}]\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:80)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:229)\n\tat com.maven.classes.dpath.I_should_see_Confirmation_page(dpath.java:132)\n\tat ✽.Then I should see Confirmation page(dpath.feature:13)\nCaused by: org.openqa.selenium.NoSuchElementException: {\"errorMessage\":\"Unable to find element with css selector \u0027button[title\u003d\\\"Continue Shopping\\\"]\u0027\",\"request\":{\"headers\":{\"Accept-Encoding\":\"gzip,deflate\",\"Connection\":\"Keep-Alive\",\"Content-Length\":\"70\",\"Content-Type\":\"application/json; charset\u003dutf-8\",\"Host\":\"localhost:27493\",\"User-Agent\":\"Apache-HttpClient/4.5 (Java/1.7.0_91)\"},\"httpVersion\":\"1.1\",\"method\":\"POST\",\"post\":\"{\\\"using\\\":\\\"css selector\\\",\\\"value\\\":\\\"button[title\u003d\\\\\\\"Continue Shopping\\\\\\\"]\\\"}\",\"url\":\"/element\",\"urlParsed\":{\"anchor\":\"\",\"query\":\"\",\"file\":\"element\",\"directory\":\"/\",\"path\":\"/element\",\"relative\":\"/element\",\"port\":\"\",\"host\":\"\",\"password\":\"\",\"user\":\"\",\"userInfo\":\"\",\"authority\":\"\",\"protocol\":\"\",\"source\":\"/element\",\"queryKey\":{},\"chunks\":[\"element\"]},\"urlOriginal\":\"/session/8b0d4980-a980-11e5-833e-4b096d7df6cf/element\"}}\nCommand duration or timeout: 1.02 seconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.48.0\u0027, revision: \u0027b7b081a4f1289f17e8ecd38bc67e137c2a12e34a\u0027, time: \u00272015-10-07 09:50:14\u0027\nSystem info: host: \u0027N/A\u0027, ip: \u0027N/A\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00273.19.0-25-generic\u0027, java.version: \u00271.7.0_91\u0027\n*** Element info: {Using\u003dcss selector, value\u003dbutton[title\u003d\"Continue Shopping\"]}\nSession ID: 8b0d4980-a980-11e5-833e-4b096d7df6cf\nDriver info: org.openqa.selenium.phantomjs.PhantomJSDriver\nCapabilities [{platform\u003dLINUX, acceptSslCerts\u003dfalse, javascriptEnabled\u003dtrue, browserName\u003dphantomjs, rotatable\u003dfalse, driverVersion\u003d1.1.0, locationContextEnabled\u003dfalse, version\u003d1.9.7, cssSelectorsEnabled\u003dtrue, databaseEnabled\u003dfalse, handlesAlerts\u003dfalse, browserConnectionEnabled\u003dfalse, proxy\u003d{proxyType\u003ddirect}, nativeEvents\u003dtrue, webStorageEnabled\u003dfalse, driverName\u003dghostdriver, applicationCacheEnabled\u003dfalse, takesScreenshot\u003dtrue}]\n\tat sun.reflect.GeneratedConstructorAccessor11.newInstance(Unknown Source)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:526)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:647)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:482)\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:430)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:345)\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:861)\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:41)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:205)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:201)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:209)\n\tat com.maven.classes.dpath.I_should_see_Confirmation_page(dpath.java:132)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:57)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:606)\n\tat cucumber.runtime.Utils$1.call(Utils.java:34)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\n\tat cucumber.runtime.Utils.invoke(Utils.java:30)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:35)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:298)\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:48)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:89)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:40)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:94)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:138)\n\tat org.testng.junit.JUnit4TestRunner.start(JUnit4TestRunner.java:81)\n\tat org.testng.junit.JUnit4TestRunner.run(JUnit4TestRunner.java:69)\n\tat org.testng.TestRunner$1.run(TestRunner.java:682)\n\tat org.testng.TestRunner.runWorkers(TestRunner.java:1005)\n\tat org.testng.TestRunner.privateRunJUnit(TestRunner.java:713)\n\tat org.testng.TestRunner.run(TestRunner.java:614)\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:348)\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:343)\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:305)\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:254)\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1224)\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1149)\n\tat org.testng.TestNG.run(TestNG.java:1057)\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:132)\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.executeSingleClass(TestNGDirectoryTestSuite.java:134)\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.execute(TestNGDirectoryTestSuite.java:118)\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:146)\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:286)\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:240)\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:121)\nCaused by: org.openqa.selenium.remote.ScreenshotException: Screen shot has been taken\nBuild info: version: \u00272.48.0\u0027, revision: \u0027b7b081a4f1289f17e8ecd38bc67e137c2a12e34a\u0027, time: \u00272015-10-07 09:50:14\u0027\nSystem info: host: \u0027N/A\u0027, ip: \u0027N/A\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00273.19.0-25-generic\u0027, java.version: \u00271.7.0_91\u0027\nDriver info: driver.version: RemoteWebDriver\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:138)\n\t... 67 more\nCaused by: org.openqa.selenium.NoSuchElementException: {\"errorMessage\":\"Unable to find element with css selector \u0027button[title\u003d\\\"Continue Shopping\\\"]\u0027\",\"request\":{\"headers\":{\"Accept-Encoding\":\"gzip,deflate\",\"Connection\":\"Keep-Alive\",\"Content-Length\":\"70\",\"Content-Type\":\"application/json; charset\u003dutf-8\",\"Host\":\"localhost:27493\",\"User-Agent\":\"Apache-HttpClient/4.5 (Java/1.7.0_91)\"},\"httpVersion\":\"1.1\",\"method\":\"POST\",\"post\":\"{\\\"using\\\":\\\"css selector\\\",\\\"value\\\":\\\"button[title\u003d\\\\\\\"Continue Shopping\\\\\\\"]\\\"}\",\"url\":\"/element\",\"urlParsed\":{\"anchor\":\"\",\"query\":\"\",\"file\":\"element\",\"directory\":\"/\",\"path\":\"/element\",\"relative\":\"/element\",\"port\":\"\",\"host\":\"\",\"password\":\"\",\"user\":\"\",\"userInfo\":\"\",\"authority\":\"\",\"protocol\":\"\",\"source\":\"/element\",\"queryKey\":{},\"chunks\":[\"element\"]},\"urlOriginal\":\"/session/8b0d4980-a980-11e5-833e-4b096d7df6cf/element\"}}\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.48.0\u0027, revision: \u0027b7b081a4f1289f17e8ecd38bc67e137c2a12e34a\u0027, time: \u00272015-10-07 09:50:14\u0027\nSystem info: host: \u0027N/A\u0027, ip: \u0027N/A\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00273.19.0-25-generic\u0027, java.version: \u00271.7.0_91\u0027\nDriver info: driver.version: unknown\n"
});
});