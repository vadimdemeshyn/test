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
  "duration": 1663197263,
  "status": "failed",
  "error_message": "org.openqa.selenium.remote.UnreachableBrowserException: Could not start a new session. Possible causes are invalid address of the remote server or browser start-up failure.\nBuild info: version: \u00272.48.0\u0027, revision: \u0027b7b081a4f1289f17e8ecd38bc67e137c2a12e34a\u0027, time: \u00272015-10-07 09:50:14\u0027\nSystem info: host: \u0027N/A\u0027, ip: \u0027N/A\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00273.19.0-25-generic\u0027, java.version: \u00271.7.0_91\u0027\nDriver info: driver.version: PhantomJSDriver\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:641)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:247)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:129)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:142)\n\tat org.openqa.selenium.phantomjs.PhantomJSDriver.\u003cinit\u003e(PhantomJSDriver.java:115)\n\tat org.openqa.selenium.phantomjs.PhantomJSDriver.\u003cinit\u003e(PhantomJSDriver.java:104)\n\tat com.maven.classes.Config.\u003cinit\u003e(Config.java:32)\n\tat com.maven.classes.dpath.\u003cinit\u003e(dpath.java:21)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:57)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:526)\n\tat org.picocontainer.injectors.AbstractInjector.newInstance(AbstractInjector.java:145)\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:342)\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:698)\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:646)\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:677)\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:35)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:35)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:298)\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:48)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:89)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:40)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:94)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:138)\n\tat org.testng.junit.JUnit4TestRunner.start(JUnit4TestRunner.java:81)\n\tat org.testng.junit.JUnit4TestRunner.run(JUnit4TestRunner.java:69)\n\tat org.testng.TestRunner$1.run(TestRunner.java:682)\n\tat org.testng.TestRunner.runWorkers(TestRunner.java:1005)\n\tat org.testng.TestRunner.privateRunJUnit(TestRunner.java:713)\n\tat org.testng.TestRunner.run(TestRunner.java:614)\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:348)\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:343)\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:305)\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:254)\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1224)\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1149)\n\tat org.testng.TestNG.run(TestNG.java:1057)\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:132)\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.executeSingleClass(TestNGDirectoryTestSuite.java:134)\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.execute(TestNGDirectoryTestSuite.java:118)\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:146)\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:286)\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:240)\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:121)\n\tat ✽.Given I am on default Dollskill page(dpath.feature:5)\nCaused by: org.openqa.selenium.WebDriverException: org.apache.http.conn.HttpHostConnectException: Connect to localhost:27776 [localhost/127.0.0.1, localhost/0:0:0:0:0:0:0:1] failed: Connection refused\nBuild info: version: \u00272.48.0\u0027, revision: \u0027b7b081a4f1289f17e8ecd38bc67e137c2a12e34a\u0027, time: \u00272015-10-07 09:50:14\u0027\nSystem info: host: \u0027N/A\u0027, ip: \u0027N/A\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00273.19.0-25-generic\u0027, java.version: \u00271.7.0_91\u0027\nDriver info: driver.version: PhantomJSDriver\n\tat org.openqa.selenium.phantomjs.PhantomJSCommandExecutor.execute(PhantomJSCommandExecutor.java:91)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:620)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:247)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:129)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:142)\n\tat org.openqa.selenium.phantomjs.PhantomJSDriver.\u003cinit\u003e(PhantomJSDriver.java:115)\n\tat org.openqa.selenium.phantomjs.PhantomJSDriver.\u003cinit\u003e(PhantomJSDriver.java:104)\n\tat com.maven.classes.Config.\u003cinit\u003e(Config.java:32)\n\tat com.maven.classes.dpath.\u003cinit\u003e(dpath.java:21)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:57)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:526)\n\tat org.picocontainer.injectors.AbstractInjector.newInstance(AbstractInjector.java:145)\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:342)\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:698)\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:646)\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:677)\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:35)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:35)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:298)\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:48)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:89)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:40)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:94)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:138)\n\tat org.testng.junit.JUnit4TestRunner.start(JUnit4TestRunner.java:81)\n\tat org.testng.junit.JUnit4TestRunner.run(JUnit4TestRunner.java:69)\n\tat org.testng.TestRunner$1.run(TestRunner.java:682)\n\tat org.testng.TestRunner.runWorkers(TestRunner.java:1005)\n\tat org.testng.TestRunner.privateRunJUnit(TestRunner.java:713)\n\tat org.testng.TestRunner.run(TestRunner.java:614)\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:348)\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:343)\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:305)\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:254)\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1224)\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1149)\n\tat org.testng.TestNG.run(TestNG.java:1057)\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:132)\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.executeSingleClass(TestNGDirectoryTestSuite.java:134)\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.execute(TestNGDirectoryTestSuite.java:118)\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:146)\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:286)\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:240)\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:121)\nCaused by: org.apache.http.conn.HttpHostConnectException: Connect to localhost:27776 [localhost/127.0.0.1, localhost/0:0:0:0:0:0:0:1] failed: Connection refused\n\tat org.apache.http.impl.conn.DefaultHttpClientConnectionOperator.connect(DefaultHttpClientConnectionOperator.java:151)\n\tat org.apache.http.impl.conn.PoolingHttpClientConnectionManager.connect(PoolingHttpClientConnectionManager.java:353)\n\tat org.apache.http.impl.execchain.MainClientExec.establishRoute(MainClientExec.java:380)\n\tat org.apache.http.impl.execchain.MainClientExec.execute(MainClientExec.java:236)\n\tat org.apache.http.impl.execchain.ProtocolExec.execute(ProtocolExec.java:184)\n\tat org.apache.http.impl.execchain.RetryExec.execute(RetryExec.java:88)\n\tat org.apache.http.impl.execchain.RedirectExec.execute(RedirectExec.java:110)\n\tat org.apache.http.impl.client.InternalHttpClient.doExecute(InternalHttpClient.java:184)\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:71)\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:55)\n\tat org.openqa.selenium.remote.internal.ApacheHttpClient.fallBackExecute(ApacheHttpClient.java:143)\n\tat org.openqa.selenium.remote.internal.ApacheHttpClient.execute(ApacheHttpClient.java:89)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:142)\n\tat org.openqa.selenium.phantomjs.PhantomJSCommandExecutor.execute(PhantomJSCommandExecutor.java:82)\n\t... 71 more\nCaused by: java.net.ConnectException: Connection refused\n\tat java.net.PlainSocketImpl.socketConnect(Native Method)\n\tat java.net.AbstractPlainSocketImpl.doConnect(AbstractPlainSocketImpl.java:339)\n\tat java.net.AbstractPlainSocketImpl.connectToAddress(AbstractPlainSocketImpl.java:200)\n\tat java.net.AbstractPlainSocketImpl.connect(AbstractPlainSocketImpl.java:182)\n\tat java.net.SocksSocketImpl.connect(SocksSocketImpl.java:392)\n\tat java.net.Socket.connect(Socket.java:579)\n\tat org.apache.http.conn.socket.PlainConnectionSocketFactory.connectSocket(PlainConnectionSocketFactory.java:74)\n\tat org.apache.http.impl.conn.DefaultHttpClientConnectionOperator.connect(DefaultHttpClientConnectionOperator.java:134)\n\t... 84 more\n"
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
});