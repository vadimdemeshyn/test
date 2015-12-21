package com.maven.classes;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

/**
 * Created by vadim on 10.12.2015.
 */



@RunWith(Cucumber.class)
//@PowerMockIgnore("org.apache.log4j.*")
@CucumberOptions(
        format = {"pretty", "html:target/cucumber", "json:target/cucumber/cucumber.json"},
        features = ("src/test/resources/com.maven.resources"),
        glue = {"src/test/java/com.maven.classes"}
)

public class RunTest {
}
