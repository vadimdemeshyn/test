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
  "id": "e2e-test;happy-path-flow---from-entering-site-to-purchase-confirmation",
  "description": "",
  "name": "Happy path flow - from entering site to purchase confirmation",
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
  "duration": 3075502832,
  "status": "passed"
});
formatter.match({
  "location": "dpath.I_search_for_needed_product()"
});
formatter.result({
  "duration": 3380727167,
  "status": "passed"
});
formatter.match({
  "location": "dpath.choose_product()"
});
formatter.result({
  "duration": 5016185470,
  "status": "failed",
  "error_message": "org.openqa.selenium.InvalidElementStateException: Error Message \u003d\u003e \u0027Element is not currently interactable and may not be manipulated\u0027\n caused by Request \u003d\u003e {\"headers\":{\"Accept-Encoding\":\"gzip,deflate\",\"Connection\":\"Keep-Alive\",\"Content-Length\":\"45\",\"Content-Type\":\"application/json; charset\u003dutf-8\",\"Host\":\"localhost:15479\",\"User-Agent\":\"Apache-HttpClient/4.5 (Java/1.7.0_91)\"},\"httpVersion\":\"1.1\",\"method\":\"POST\",\"post\":\"{\\\"id\\\":\\\":wdc:1454596822065\\\",\\\"value\\\":[\\\"SMALL\\\"]}\",\"url\":\"/value\",\"urlParsed\":{\"anchor\":\"\",\"query\":\"\",\"file\":\"value\",\"directory\":\"/\",\"path\":\"/value\",\"relative\":\"/value\",\"port\":\"\",\"host\":\"\",\"password\":\"\",\"user\":\"\",\"userInfo\":\"\",\"authority\":\"\",\"protocol\":\"\",\"source\":\"/value\",\"queryKey\":{},\"chunks\":[\"value\"]},\"urlOriginal\":\"/session/32aa9ab0-cb4d-11e5-b52b-93333275a86e/element/%3Awdc%3A1454596822065/value\"}\nCommand duration or timeout: 1.21 seconds\nBuild info: version: \u00272.48.0\u0027, revision: \u0027b7b081a4f1289f17e8ecd38bc67e137c2a12e34a\u0027, time: \u00272015-10-07 09:50:14\u0027\nSystem info: host: \u002768CFE259.nexcess.net\u0027, ip: \u0027104.207.226.89\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00272.6.32-573.7.1.el6.centos.plus.x86_64\u0027, java.version: \u00271.7.0_91\u0027\nSession ID: 32aa9ab0-cb4d-11e5-b52b-93333275a86e\nDriver info: org.openqa.selenium.phantomjs.PhantomJSDriver\nCapabilities [{platform\u003dLINUX, acceptSslCerts\u003dfalse, javascriptEnabled\u003dtrue, browserName\u003dphantomjs, rotatable\u003dfalse, driverVersion\u003d1.0.4, locationContextEnabled\u003dfalse, version\u003d1.9.2, cssSelectorsEnabled\u003dtrue, databaseEnabled\u003dfalse, handlesAlerts\u003dfalse, browserConnectionEnabled\u003dfalse, proxy\u003d{proxyType\u003ddirect}, nativeEvents\u003dtrue, webStorageEnabled\u003dfalse, driverName\u003dghostdriver, applicationCacheEnabled\u003dfalse, takesScreenshot\u003dtrue}]\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:57)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:526)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:647)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:326)\n\tat org.openqa.selenium.remote.RemoteWebElement.sendKeys(RemoteWebElement.java:121)\n\tat com.maven.classes.dpath.choose_product(dpath.java:70)\n\tat ✽.And choose product(dpath.feature:7)\nCaused by: org.openqa.selenium.remote.ScreenshotException: Screen shot has been taken\nBuild info: version: \u00272.48.0\u0027, revision: \u0027b7b081a4f1289f17e8ecd38bc67e137c2a12e34a\u0027, time: \u00272015-10-07 09:50:14\u0027\nSystem info: host: \u002768CFE259.nexcess.net\u0027, ip: \u0027104.207.226.89\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00272.6.32-573.7.1.el6.centos.plus.x86_64\u0027, java.version: \u00271.7.0_91\u0027\nDriver info: driver.version: RemoteWebDriver\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:138)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:647)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:326)\n\tat org.openqa.selenium.remote.RemoteWebElement.sendKeys(RemoteWebElement.java:121)\n\tat com.maven.classes.dpath.choose_product(dpath.java:70)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:57)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:606)\n\tat cucumber.runtime.Utils$1.call(Utils.java:34)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\n\tat cucumber.runtime.Utils.invoke(Utils.java:30)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:35)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:298)\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:48)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:89)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:40)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:94)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:138)\n\tat org.testng.junit.JUnit4TestRunner.start(JUnit4TestRunner.java:81)\n\tat org.testng.junit.JUnit4TestRunner.run(JUnit4TestRunner.java:69)\n\tat org.testng.TestRunner$1.run(TestRunner.java:682)\n\tat org.testng.TestRunner.runWorkers(TestRunner.java:1005)\n\tat org.testng.TestRunner.privateRunJUnit(TestRunner.java:713)\n\tat org.testng.TestRunner.run(TestRunner.java:614)\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:348)\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:343)\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:305)\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:254)\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1224)\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1149)\n\tat org.testng.TestNG.run(TestNG.java:1057)\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:132)\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.executeSingleClass(TestNGDirectoryTestSuite.java:112)\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.execute(TestNGDirectoryTestSuite.java:99)\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:147)\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:290)\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:242)\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:121)\nCaused by: org.openqa.selenium.InvalidElementStateException: Error Message \u003d\u003e \u0027Element is not currently interactable and may not be manipulated\u0027\n caused by Request \u003d\u003e {\"headers\":{\"Accept-Encoding\":\"gzip,deflate\",\"Connection\":\"Keep-Alive\",\"Content-Length\":\"45\",\"Content-Type\":\"application/json; charset\u003dutf-8\",\"Host\":\"localhost:15479\",\"User-Agent\":\"Apache-HttpClient/4.5 (Java/1.7.0_91)\"},\"httpVersion\":\"1.1\",\"method\":\"POST\",\"post\":\"{\\\"id\\\":\\\":wdc:1454596822065\\\",\\\"value\\\":[\\\"SMALL\\\"]}\",\"url\":\"/value\",\"urlParsed\":{\"anchor\":\"\",\"query\":\"\",\"file\":\"value\",\"directory\":\"/\",\"path\":\"/value\",\"relative\":\"/value\",\"port\":\"\",\"host\":\"\",\"password\":\"\",\"user\":\"\",\"userInfo\":\"\",\"authority\":\"\",\"protocol\":\"\",\"source\":\"/value\",\"queryKey\":{},\"chunks\":[\"value\"]},\"urlOriginal\":\"/session/32aa9ab0-cb4d-11e5-b52b-93333275a86e/element/%3Awdc%3A1454596822065/value\"}\nBuild info: version: \u00272.48.0\u0027, revision: \u0027b7b081a4f1289f17e8ecd38bc67e137c2a12e34a\u0027, time: \u00272015-10-07 09:50:14\u0027\nSystem info: host: \u002768CFE259.nexcess.net\u0027, ip: \u0027104.207.226.89\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00272.6.32-573.7.1.el6.centos.plus.x86_64\u0027, java.version: \u00271.7.0_91\u0027\nDriver info: driver.version: unknown\n"
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
});