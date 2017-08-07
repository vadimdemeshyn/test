package TestCode;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

/**
 * Created by vadimdemeshyn on 03.06.16.
 */


@RunWith(Cucumber.class)
@CucumberOptions(

        strict = false,

        plugin = {

                "pretty",
                "html:target/cucumber-html-report",
                "json:target/cucumber.json"
        },
        features =  { "src/test/resources/FeatureFiles/" },
        glue =  { "TestCode/" }
        //tags = {"@signin","@signin-2","@signin-3" }

)

public class RunTest {


}
