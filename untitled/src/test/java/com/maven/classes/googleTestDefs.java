package com.maven.classes;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;

import java.util.List;

/**
 * Created by vadim on 13.01.2015.
 */
public class googleTestDefs extends Config {



    @Given("^I am on Google home page$")
    public void I_am_on_Google_home_page() {

        browser.get("https://www.google.com");
        browser.manage().window().maximize();

    }

    @When("^I search \"([^\"]*)\" text$")
    public void I_search_text(String arg1) {
        browser.findElement(By.id("lst-ib")).sendKeys(arg1);
        browser.findElement(By.cssSelector("#sblsbb .lsb")).click();
    }

    @And("^Open result page that is linked to \"([^\"]*)\"$")
    public void Open_result_page_that_is_linked_to(String arg1) {
        WebElement element1 = delay.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("#rso a[href^=\"http://translate.google.com/\"]")));
        element1.click();
    }

    @And("^I Enter phrase \"([^\"]*)\" into textarea field$")
    public void I_Enter_phrase_into_textarea_field(String arg1) {
        WebElement elem = delay.until(ExpectedConditions.visibilityOfElementLocated(By.id("source")));
        elem.sendKeys(arg1);

    }

    @And("^I Select right language to 'Polish' and click on 'Translate' button$")
    public void I_Select_right_language_to_Polish_and_click_on_Translate_button() throws IndexOutOfBoundsException {


        WebElement element1 = browser.findElement(By.cssSelector("#gt-tl-gms"));
        element1.click();
       // WebElement element2 = browser.findElement(By.xpath("//div[contains(text(), \"��������\") and @class=\"goog-menuitem-content\"]"));
        //element2.click();
        List<WebElement> languages = browser.findElements(By.cssSelector("div[class=\"goog-menuitem-content\"]"));

        for (WebElement checkbox : languages) {
            System.out.println(checkbox.getText());
            String arty = checkbox.getText();
            String SubStr1 = new String("��������");



        }

        for (WebElement language : languages) {
        }


    };

    @Then("^I should ensure that result contains \"([^\"]*)\" string$")
    public void I_should_ensure_that_result_contains_string(String arg1) {
    }


}
