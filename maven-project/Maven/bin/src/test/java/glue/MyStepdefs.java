package glue;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.junit.Assert;



/**
 * Created by vadim on 13.01.2015.
 */
public class MyStepdefs extends Configurations {

    @Given("^I am on Google home page$")
    public void I_am_on_Google_home_page() throws Throwable {

         browser.get("https://www.google.com");
    }

    @When("^I search \"([^\"]*)\" text$")
    public void I_search_text(String arg1) throws Throwable {
        browser.findElement(By.id("gbqfq")).sendKeys(arg1);
    }

    @And("^Open result page that is linked to \"([^\"]*)\"$")
    public void Open_result_page_that_is_linked_to(String arg1) throws Throwable {
        WebElement element1 = delay.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("id('rso')//li[2]/div/h3/a")));
        element1.click();
    }

    @And("^I Enter phrase \"([^\"]*)\" into textarea field$")
    public void I_Enter_phrase_into_textarea_field(String arg1) throws Throwable {
        WebElement elem = delay.until(ExpectedConditions.visibilityOfElementLocated(By.id("source")));
        elem.sendKeys(arg1);

    }

    @And("^I Select right language to 'Polish' and click on 'Translate' button$")
    public void I_Select_right_language_to_Polish_and_click_on_Translate_button() throws Throwable {
        browser.findElement(By.id("gt-tl-gms")).click();
        browser.findElement(By.id(":4с")).click();
    }


    @Then("^I should ensure that result contains \"([^\"]*)\" string$")
    public void I_should_ensure_that_result_contains_string(String arg1) throws Throwable {
        String elemCheck = browser.findElement(By.id("result_box")).getText();

        Assert.assertTrue("Zadaniem testu", elemCheck.contains("Zadaniem testu"));
        browser.close();
    }

}
