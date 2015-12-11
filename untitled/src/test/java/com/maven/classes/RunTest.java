package com.maven.classes;

import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

/**
 * Created by vadim on 10.12.2015.
 */

@RunWith(Cucumber.class)
@Cucumber.Options(format = {
        "pretty",
        "html:target/cucumber-html-report",
},
        features = "D:\\untitled\\src\\test\\resources\\com.maven.resources")

public class RunTest {
}
