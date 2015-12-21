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
  "duration": 128913314188,
  "error_message": "org.openqa.selenium.TimeoutException: Timed out after 120 seconds waiting for visibility of element located by By.cssSelector: #pagination\nBuild info: version: \u00272.48.0\u0027, revision: \u0027b7b081a4f1289f17e8ecd38bc67e137c2a12e34a\u0027, time: \u00272015-10-07 09:50:14\u0027\nSystem info: host: \u0027vadim-ПК\u0027, ip: \u0027192.168.0.103\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_60\u0027\nDriver info: org.openqa.selenium.phantomjs.PhantomJSDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, handlesAlerts\u003dfalse, databaseEnabled\u003dfalse, version\u003d1.9.8, platform\u003dXP, browserConnectionEnabled\u003dfalse, proxy\u003d{proxyType\u003ddirect}, nativeEvents\u003dtrue, acceptSslCerts\u003dfalse, driverVersion\u003d1.1.0, locationContextEnabled\u003dfalse, webStorageEnabled\u003dfalse, browserName\u003dphantomjs, takesScreenshot\u003dtrue, driverName\u003dghostdriver, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 4c768610-a7ea-11e5-bfcb-835daf897c3f\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:80)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:229)\r\n\tat com.maven.classes.vbridses.I_am_on_Google_home_paga(vbridses.java:29)\r\n\tat ✽.Given I am on Google home paga(1.feature:4)\r\nCaused by: org.openqa.selenium.NoSuchElementException: {\"errorMessage\":\"Unable to find element with css selector \u0027#pagination\u0027\",\"request\":{\"headers\":{\"Accept-Encoding\":\"gzip,deflate\",\"Connection\":\"Keep-Alive\",\"Content-Length\":\"46\",\"Content-Type\":\"application/json; charset\u003dutf-8\",\"Host\":\"localhost:45460\",\"User-Agent\":\"Apache-HttpClient/4.5 (Java/1.8.0_60)\"},\"httpVersion\":\"1.1\",\"method\":\"POST\",\"post\":\"{\\\"using\\\":\\\"css selector\\\",\\\"value\\\":\\\"#pagination\\\"}\",\"url\":\"/element\",\"urlParsed\":{\"anchor\":\"\",\"query\":\"\",\"file\":\"element\",\"directory\":\"/\",\"path\":\"/element\",\"relative\":\"/element\",\"port\":\"\",\"host\":\"\",\"password\":\"\",\"user\":\"\",\"userInfo\":\"\",\"authority\":\"\",\"protocol\":\"\",\"source\":\"/element\",\"queryKey\":{},\"chunks\":[\"element\"]},\"urlOriginal\":\"/session/4c768610-a7ea-11e5-bfcb-835daf897c3f/element\"}}\nCommand duration or timeout: 319 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.48.0\u0027, revision: \u0027b7b081a4f1289f17e8ecd38bc67e137c2a12e34a\u0027, time: \u00272015-10-07 09:50:14\u0027\nSystem info: host: \u0027vadim-ПК\u0027, ip: \u0027192.168.0.103\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_60\u0027\nDriver info: org.openqa.selenium.phantomjs.PhantomJSDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, handlesAlerts\u003dfalse, databaseEnabled\u003dfalse, version\u003d1.9.8, platform\u003dXP, browserConnectionEnabled\u003dfalse, proxy\u003d{proxyType\u003ddirect}, nativeEvents\u003dtrue, acceptSslCerts\u003dfalse, driverVersion\u003d1.1.0, locationContextEnabled\u003dfalse, webStorageEnabled\u003dfalse, browserName\u003dphantomjs, takesScreenshot\u003dtrue, driverName\u003dghostdriver, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 4c768610-a7ea-11e5-bfcb-835daf897c3f\n*** Element info: {Using\u003dcss selector, value\u003d#pagination}\r\n\tat sun.reflect.GeneratedConstructorAccessor10.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:647)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:482)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:430)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:345)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:861)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:41)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:205)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:201)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:209)\r\n\tat com.maven.classes.vbridses.I_am_on_Google_home_paga(vbridses.java:29)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:497)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:34)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:30)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:35)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:298)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:48)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:89)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:40)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:94)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:138)\r\n\tat org.testng.junit.JUnit4TestRunner.start(JUnit4TestRunner.java:81)\r\n\tat org.testng.junit.JUnit4TestRunner.run(JUnit4TestRunner.java:69)\r\n\tat org.testng.TestRunner$1.run(TestRunner.java:682)\r\n\tat org.testng.TestRunner.runWorkers(TestRunner.java:1005)\r\n\tat org.testng.TestRunner.privateRunJUnit(TestRunner.java:713)\r\n\tat org.testng.TestRunner.run(TestRunner.java:614)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:348)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:343)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:305)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:254)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1224)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1149)\r\n\tat org.testng.TestNG.run(TestNG.java:1057)\r\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:132)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.executeSingleClass(TestNGDirectoryTestSuite.java:134)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.execute(TestNGDirectoryTestSuite.java:118)\r\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:146)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:286)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:240)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:121)\r\nCaused by: org.openqa.selenium.remote.ScreenshotException: Screen shot has been taken\nBuild info: version: \u00272.48.0\u0027, revision: \u0027b7b081a4f1289f17e8ecd38bc67e137c2a12e34a\u0027, time: \u00272015-10-07 09:50:14\u0027\nSystem info: host: \u0027vadim-ПК\u0027, ip: \u0027192.168.0.103\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_60\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:138)\r\n\t... 67 more\r\nCaused by: org.openqa.selenium.NoSuchElementException: {\"errorMessage\":\"Unable to find element with css selector \u0027#pagination\u0027\",\"request\":{\"headers\":{\"Accept-Encoding\":\"gzip,deflate\",\"Connection\":\"Keep-Alive\",\"Content-Length\":\"46\",\"Content-Type\":\"application/json; charset\u003dutf-8\",\"Host\":\"localhost:45460\",\"User-Agent\":\"Apache-HttpClient/4.5 (Java/1.8.0_60)\"},\"httpVersion\":\"1.1\",\"method\":\"POST\",\"post\":\"{\\\"using\\\":\\\"css selector\\\",\\\"value\\\":\\\"#pagination\\\"}\",\"url\":\"/element\",\"urlParsed\":{\"anchor\":\"\",\"query\":\"\",\"file\":\"element\",\"directory\":\"/\",\"path\":\"/element\",\"relative\":\"/element\",\"port\":\"\",\"host\":\"\",\"password\":\"\",\"user\":\"\",\"userInfo\":\"\",\"authority\":\"\",\"protocol\":\"\",\"source\":\"/element\",\"queryKey\":{},\"chunks\":[\"element\"]},\"urlOriginal\":\"/session/4c768610-a7ea-11e5-bfcb-835daf897c3f/element\"}}\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.48.0\u0027, revision: \u0027b7b081a4f1289f17e8ecd38bc67e137c2a12e34a\u0027, time: \u00272015-10-07 09:50:14\u0027\nSystem info: host: \u0027vadim-ПК\u0027, ip: \u0027192.168.0.103\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_60\u0027\nDriver info: driver.version: unknown\r\n",
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
  "duration": 9663789877,
  "status": "passed"
});
formatter.match({
  "location": "dpath.I_search_for_needed_product()"
});
formatter.result({
  "duration": 6493306216,
  "status": "passed"
});
formatter.match({
  "location": "dpath.choose_product()"
});
formatter.result({
  "duration": 7542878702,
  "status": "passed"
});
formatter.match({
  "location": "dpath.add_product_to_Cart()"
});
formatter.result({
  "duration": 127988923,
  "status": "passed"
});
formatter.match({
  "location": "dpath.proceed_to_Shopping_Cart_page()"
});
formatter.result({
  "duration": 9880146360,
  "status": "passed"
});
formatter.match({
  "location": "dpath.I_proceed_to_Checkout_page()"
});
formatter.result({
  "duration": 6652384526,
  "status": "passed"
});
formatter.match({
  "location": "dpath.I_login_with_existing_customer()"
});
formatter.result({
  "duration": 120212432713,
  "error_message": "org.openqa.selenium.TimeoutException: Timed out after 120 seconds waiting for visibility of element located by By.cssSelector: a[class\u003d\"login-button\"]\nBuild info: version: \u00272.48.0\u0027, revision: \u0027b7b081a4f1289f17e8ecd38bc67e137c2a12e34a\u0027, time: \u00272015-10-07 09:50:14\u0027\nSystem info: host: \u0027vadim-ПК\u0027, ip: \u0027192.168.0.103\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_60\u0027\nDriver info: org.openqa.selenium.phantomjs.PhantomJSDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, handlesAlerts\u003dfalse, databaseEnabled\u003dfalse, version\u003d1.9.8, platform\u003dXP, browserConnectionEnabled\u003dfalse, proxy\u003d{proxyType\u003ddirect}, nativeEvents\u003dtrue, acceptSslCerts\u003dfalse, driverVersion\u003d1.1.0, locationContextEnabled\u003dfalse, webStorageEnabled\u003dfalse, browserName\u003dphantomjs, takesScreenshot\u003dtrue, driverName\u003dghostdriver, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 9902edc0-a7ea-11e5-88ea-65cd9b441df5\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:80)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:229)\r\n\tat com.maven.classes.dpath.I_login_with_existing_customer(dpath.java:100)\r\n\tat ✽.And I login with existing customer(dpath.feature:11)\r\nCaused by: org.openqa.selenium.NoSuchElementException: {\"errorMessage\":\"Unable to find element with css selector \u0027a[class\u003d\\\"login-button\\\"]\u0027\",\"request\":{\"headers\":{\"Accept-Encoding\":\"gzip,deflate\",\"Connection\":\"Keep-Alive\",\"Content-Length\":\"60\",\"Content-Type\":\"application/json; charset\u003dutf-8\",\"Host\":\"localhost:56288\",\"User-Agent\":\"Apache-HttpClient/4.5 (Java/1.8.0_60)\"},\"httpVersion\":\"1.1\",\"method\":\"POST\",\"post\":\"{\\\"using\\\":\\\"css selector\\\",\\\"value\\\":\\\"a[class\u003d\\\\\\\"login-button\\\\\\\"]\\\"}\",\"url\":\"/element\",\"urlParsed\":{\"anchor\":\"\",\"query\":\"\",\"file\":\"element\",\"directory\":\"/\",\"path\":\"/element\",\"relative\":\"/element\",\"port\":\"\",\"host\":\"\",\"password\":\"\",\"user\":\"\",\"userInfo\":\"\",\"authority\":\"\",\"protocol\":\"\",\"source\":\"/element\",\"queryKey\":{},\"chunks\":[\"element\"]},\"urlOriginal\":\"/session/9902edc0-a7ea-11e5-88ea-65cd9b441df5/element\"}}\nCommand duration or timeout: 443 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.48.0\u0027, revision: \u0027b7b081a4f1289f17e8ecd38bc67e137c2a12e34a\u0027, time: \u00272015-10-07 09:50:14\u0027\nSystem info: host: \u0027vadim-ПК\u0027, ip: \u0027192.168.0.103\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_60\u0027\nDriver info: org.openqa.selenium.phantomjs.PhantomJSDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, handlesAlerts\u003dfalse, databaseEnabled\u003dfalse, version\u003d1.9.8, platform\u003dXP, browserConnectionEnabled\u003dfalse, proxy\u003d{proxyType\u003ddirect}, nativeEvents\u003dtrue, acceptSslCerts\u003dfalse, driverVersion\u003d1.1.0, locationContextEnabled\u003dfalse, webStorageEnabled\u003dfalse, browserName\u003dphantomjs, takesScreenshot\u003dtrue, driverName\u003dghostdriver, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 9902edc0-a7ea-11e5-88ea-65cd9b441df5\n*** Element info: {Using\u003dcss selector, value\u003da[class\u003d\"login-button\"]}\r\n\tat sun.reflect.GeneratedConstructorAccessor10.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:647)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:482)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:430)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:345)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:861)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:41)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:205)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:201)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:209)\r\n\tat com.maven.classes.dpath.I_login_with_existing_customer(dpath.java:100)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:497)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:34)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:30)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:35)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:298)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:48)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:89)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:40)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:94)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:138)\r\n\tat org.testng.junit.JUnit4TestRunner.start(JUnit4TestRunner.java:81)\r\n\tat org.testng.junit.JUnit4TestRunner.run(JUnit4TestRunner.java:69)\r\n\tat org.testng.TestRunner$1.run(TestRunner.java:682)\r\n\tat org.testng.TestRunner.runWorkers(TestRunner.java:1005)\r\n\tat org.testng.TestRunner.privateRunJUnit(TestRunner.java:713)\r\n\tat org.testng.TestRunner.run(TestRunner.java:614)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:348)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:343)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:305)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:254)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1224)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1149)\r\n\tat org.testng.TestNG.run(TestNG.java:1057)\r\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:132)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.executeSingleClass(TestNGDirectoryTestSuite.java:134)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.execute(TestNGDirectoryTestSuite.java:118)\r\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:146)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:286)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:240)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:121)\r\nCaused by: org.openqa.selenium.remote.ScreenshotException: Screen shot has been taken\nBuild info: version: \u00272.48.0\u0027, revision: \u0027b7b081a4f1289f17e8ecd38bc67e137c2a12e34a\u0027, time: \u00272015-10-07 09:50:14\u0027\nSystem info: host: \u0027vadim-ПК\u0027, ip: \u0027192.168.0.103\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_60\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:138)\r\n\t... 67 more\r\nCaused by: org.openqa.selenium.NoSuchElementException: {\"errorMessage\":\"Unable to find element with css selector \u0027a[class\u003d\\\"login-button\\\"]\u0027\",\"request\":{\"headers\":{\"Accept-Encoding\":\"gzip,deflate\",\"Connection\":\"Keep-Alive\",\"Content-Length\":\"60\",\"Content-Type\":\"application/json; charset\u003dutf-8\",\"Host\":\"localhost:56288\",\"User-Agent\":\"Apache-HttpClient/4.5 (Java/1.8.0_60)\"},\"httpVersion\":\"1.1\",\"method\":\"POST\",\"post\":\"{\\\"using\\\":\\\"css selector\\\",\\\"value\\\":\\\"a[class\u003d\\\\\\\"login-button\\\\\\\"]\\\"}\",\"url\":\"/element\",\"urlParsed\":{\"anchor\":\"\",\"query\":\"\",\"file\":\"element\",\"directory\":\"/\",\"path\":\"/element\",\"relative\":\"/element\",\"port\":\"\",\"host\":\"\",\"password\":\"\",\"user\":\"\",\"userInfo\":\"\",\"authority\":\"\",\"protocol\":\"\",\"source\":\"/element\",\"queryKey\":{},\"chunks\":[\"element\"]},\"urlOriginal\":\"/session/9902edc0-a7ea-11e5-88ea-65cd9b441df5/element\"}}\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.48.0\u0027, revision: \u0027b7b081a4f1289f17e8ecd38bc67e137c2a12e34a\u0027, time: \u00272015-10-07 09:50:14\u0027\nSystem info: host: \u0027vadim-ПК\u0027, ip: \u0027192.168.0.103\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_60\u0027\nDriver info: driver.version: unknown\r\n",
  "status": "failed"
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
  "duration": 1487715906,
  "status": "passed"
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
  "duration": 401346703,
  "error_message": "org.openqa.selenium.NoSuchElementException: {\"errorMessage\":\"Unable to find element with id \u0027lst-ib\u0027\",\"request\":{\"headers\":{\"Accept-Encoding\":\"gzip,deflate\",\"Connection\":\"Keep-Alive\",\"Content-Length\":\"31\",\"Content-Type\":\"application/json; charset\u003dutf-8\",\"Host\":\"localhost:8742\",\"User-Agent\":\"Apache-HttpClient/4.5 (Java/1.8.0_60)\"},\"httpVersion\":\"1.1\",\"method\":\"POST\",\"post\":\"{\\\"using\\\":\\\"id\\\",\\\"value\\\":\\\"lst-ib\\\"}\",\"url\":\"/element\",\"urlParsed\":{\"anchor\":\"\",\"query\":\"\",\"file\":\"element\",\"directory\":\"/\",\"path\":\"/element\",\"relative\":\"/element\",\"port\":\"\",\"host\":\"\",\"password\":\"\",\"user\":\"\",\"userInfo\":\"\",\"authority\":\"\",\"protocol\":\"\",\"source\":\"/element\",\"queryKey\":{},\"chunks\":[\"element\"]},\"urlOriginal\":\"/session/f8bb04a0-a7ea-11e5-b8b9-2bf4219fbecc/element\"}}\nCommand duration or timeout: 399 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.48.0\u0027, revision: \u0027b7b081a4f1289f17e8ecd38bc67e137c2a12e34a\u0027, time: \u00272015-10-07 09:50:14\u0027\nSystem info: host: \u0027vadim-ПК\u0027, ip: \u0027192.168.0.103\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_60\u0027\nDriver info: org.openqa.selenium.phantomjs.PhantomJSDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, handlesAlerts\u003dfalse, databaseEnabled\u003dfalse, version\u003d1.9.8, platform\u003dXP, browserConnectionEnabled\u003dfalse, proxy\u003d{proxyType\u003ddirect}, nativeEvents\u003dtrue, acceptSslCerts\u003dfalse, driverVersion\u003d1.1.0, locationContextEnabled\u003dfalse, webStorageEnabled\u003dfalse, browserName\u003dphantomjs, takesScreenshot\u003dtrue, driverName\u003dghostdriver, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: f8bb04a0-a7ea-11e5-b8b9-2bf4219fbecc\n*** Element info: {Using\u003did, value\u003dlst-ib}\r\n\tat sun.reflect.GeneratedConstructorAccessor10.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:647)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:403)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:218)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:345)\r\n\tat com.maven.classes.googleTestDefs.I_search_text(googleTestDefs.java:30)\r\n\tat ✽.When I search \"google translate\" text(googleTranslate.feature:5)\r\nCaused by: org.openqa.selenium.remote.ScreenshotException: Screen shot has been taken\nBuild info: version: \u00272.48.0\u0027, revision: \u0027b7b081a4f1289f17e8ecd38bc67e137c2a12e34a\u0027, time: \u00272015-10-07 09:50:14\u0027\nSystem info: host: \u0027vadim-ПК\u0027, ip: \u0027192.168.0.103\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_60\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:138)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:647)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:403)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:218)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:345)\r\n\tat com.maven.classes.googleTestDefs.I_search_text(googleTestDefs.java:30)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:497)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:34)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:30)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:35)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:298)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:48)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:89)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:40)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:94)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:138)\r\n\tat org.testng.junit.JUnit4TestRunner.start(JUnit4TestRunner.java:81)\r\n\tat org.testng.junit.JUnit4TestRunner.run(JUnit4TestRunner.java:69)\r\n\tat org.testng.TestRunner$1.run(TestRunner.java:682)\r\n\tat org.testng.TestRunner.runWorkers(TestRunner.java:1005)\r\n\tat org.testng.TestRunner.privateRunJUnit(TestRunner.java:713)\r\n\tat org.testng.TestRunner.run(TestRunner.java:614)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:348)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:343)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:305)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:254)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1224)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1149)\r\n\tat org.testng.TestNG.run(TestNG.java:1057)\r\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:132)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.executeSingleClass(TestNGDirectoryTestSuite.java:134)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.execute(TestNGDirectoryTestSuite.java:118)\r\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:146)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:286)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:240)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:121)\r\nCaused by: org.openqa.selenium.NoSuchElementException: {\"errorMessage\":\"Unable to find element with id \u0027lst-ib\u0027\",\"request\":{\"headers\":{\"Accept-Encoding\":\"gzip,deflate\",\"Connection\":\"Keep-Alive\",\"Content-Length\":\"31\",\"Content-Type\":\"application/json; charset\u003dutf-8\",\"Host\":\"localhost:8742\",\"User-Agent\":\"Apache-HttpClient/4.5 (Java/1.8.0_60)\"},\"httpVersion\":\"1.1\",\"method\":\"POST\",\"post\":\"{\\\"using\\\":\\\"id\\\",\\\"value\\\":\\\"lst-ib\\\"}\",\"url\":\"/element\",\"urlParsed\":{\"anchor\":\"\",\"query\":\"\",\"file\":\"element\",\"directory\":\"/\",\"path\":\"/element\",\"relative\":\"/element\",\"port\":\"\",\"host\":\"\",\"password\":\"\",\"user\":\"\",\"userInfo\":\"\",\"authority\":\"\",\"protocol\":\"\",\"source\":\"/element\",\"queryKey\":{},\"chunks\":[\"element\"]},\"urlOriginal\":\"/session/f8bb04a0-a7ea-11e5-b8b9-2bf4219fbecc/element\"}}\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.48.0\u0027, revision: \u0027b7b081a4f1289f17e8ecd38bc67e137c2a12e34a\u0027, time: \u00272015-10-07 09:50:14\u0027\nSystem info: host: \u0027vadim-ПК\u0027, ip: \u0027192.168.0.103\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_60\u0027\nDriver info: driver.version: unknown\r\n",
  "status": "failed"
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
  "duration": 2674959011,
  "status": "passed"
});
formatter.match({
  "location": "solidOpinionTestClass.I_fill_Name_field_with_correct_info()"
});
formatter.result({
  "duration": 70650841,
  "status": "passed"
});
formatter.match({
  "location": "solidOpinionTestClass.I_fill_Email_field_with_valid_email()"
});
formatter.result({
  "duration": 63910808,
  "status": "passed"
});
formatter.match({
  "location": "solidOpinionTestClass.I_fill_Pwd_field_with_valid_pwd()"
});
formatter.result({
  "duration": 50835815,
  "status": "passed"
});
formatter.match({
  "location": "solidOpinionTestClass.I_fill_Confirm_Email_field_with_valid_pwd()"
});
formatter.result({
  "duration": 47864974,
  "status": "passed"
});
formatter.match({
  "location": "solidOpinionTestClass.I_click_Submit_button()"
});
formatter.result({
  "duration": 57325355,
  "status": "passed"
});
formatter.match({
  "location": "solidOpinionTestClass.I_am_successfully_signed_up_to_system()"
});
formatter.result({
  "duration": 2127996682,
  "status": "passed"
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
  "duration": 2423034374,
  "status": "passed"
});
formatter.match({
  "location": "solidOpinionTestClass.I_fill_Name_field_with_correct_info()"
});
formatter.result({
  "duration": 72863685,
  "status": "passed"
});
formatter.match({
  "location": "solidOpinionTestClass.I_fill_Email_field_with_valid_email()"
});
formatter.result({
  "duration": 60651294,
  "status": "passed"
});
formatter.match({
  "location": "solidOpinionTestClass.I_fill_Pwd_field_with_valid_pwd()"
});
formatter.result({
  "duration": 50245434,
  "status": "passed"
});
formatter.match({
  "location": "solidOpinionTestClass.I_enter_password_in_Confirmation_field_that_differs_from_password_above()"
});
formatter.result({
  "duration": 49488367,
  "status": "passed"
});
formatter.match({
  "location": "solidOpinionTestClass.I_click_Submit_button()"
});
formatter.result({
  "duration": 53978929,
  "status": "passed"
});
formatter.match({
  "location": "solidOpinionTestClass.I_should_get_warning_that_passwords_are_not_the_same()"
});
formatter.result({
  "duration": 556409674,
  "status": "passed"
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
  "duration": 2408303705,
  "status": "passed"
});
formatter.match({
  "location": "solidOpinionTestClass.I_fill_Name_field_with_correct_info()"
});
formatter.result({
  "duration": 75253147,
  "status": "passed"
});
formatter.match({
  "location": "solidOpinionTestClass.I_fill_Email_field_with_invalid_email()"
});
formatter.result({
  "duration": 67066959,
  "status": "passed"
});
formatter.match({
  "location": "solidOpinionTestClass.I_fill_Pwd_field_with_valid_pwd()"
});
formatter.result({
  "duration": 49902442,
  "status": "passed"
});
formatter.match({
  "location": "solidOpinionTestClass.I_fill_Confirm_Email_field_with_valid_pwd()"
});
formatter.result({
  "duration": 49768038,
  "status": "passed"
});
formatter.match({
  "location": "solidOpinionTestClass.I_click_Submit_button()"
});
formatter.result({
  "duration": 54243390,
  "status": "passed"
});
formatter.match({
  "location": "solidOpinionTestClass.I_should_get_warning_that_email_is_invalid()"
});
formatter.result({
  "duration": 556761978,
  "status": "passed"
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
  "duration": 2537491084,
  "status": "passed"
});
formatter.match({
  "location": "solidOpinionTestClass.I_click_Submit_button()"
});
formatter.result({
  "duration": 62377431,
  "status": "passed"
});
formatter.match({
  "location": "solidOpinionTestClass.I_should_get_warning_that_I_should_type_in_credentials()"
});
formatter.result({
  "duration": 555713446,
  "status": "passed"
});
});