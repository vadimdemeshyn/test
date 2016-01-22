package com.maven.classes;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.BeforeClass;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.testng.Assert;

import java.io.*;
import java.util.concurrent.TimeUnit;

/**
 * Created by vadim on 08.12.2015.
 */



public class dpath extends Config {


    @Given("^I am on default Dollskill page$")
    public void I_am_on_default_Dollskill_page() {


        browser.get("http://dkdev1ee.dollskill.com/");

        browser.manage().window().maximize();
        js.executeScript("cbar_close_popup(9728);");


    }

    @When("^I search for needed product$")
    public void I_search_for_needed_product() {


        WebElement searchIcon = delay.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("#show_header_search")));
        searchIcon.click();

        WebElement searchField = delay.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("#search")));
        searchField.click();
        searchField.sendKeys("test simple product");

        WebElement searchSubmitIcon = delay.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector(".search-button")));
        searchSubmitIcon.click();

    }

    @And("^choose product$")
    public void choose_product() {


        Assert.assertEquals("http://dkdev1ee.dollskill.com/catalogsearch/result/?q=test+simple+product", browser.getCurrentUrl());

        WebElement searchedProduct = delay.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("a[href=\"http://dkdev1ee.dollskill.com/test-simple-product.html\"]")));
        searchedProduct.click();


    }

    @And("^add product to Cart$")
    public void add_product_to_Cart() {

        WebElement addToCartButton = delay.until(ExpectedConditions.visibilityOfElementLocated(By.id("product-addtocart-button")));
        addToCartButton.click();
        try {
            Thread.sleep(10000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

    }

    @And("^proceed to Shopping Cart page$")
    public void proceed_to_Shopping_Cart_page() {

        WebElement clickButton = delay.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector(".viewcart-button")));

        clickButton.click();
    }

    @And("^I proceed to Checkout page$")
    public void I_proceed_to_Checkout_page() {
        WebElement checkoutButton = delay.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("button[title=\"Proceed to Checkout\"]")));
        checkoutButton.click();

    }

    @And("^I login with existing customer$")
    public void I_login_with_existing_customer() {

        WebElement loginForm = delay.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("a[class=\"login-button\"]")));
        loginForm.click();

        browser.switchTo().activeElement();

        WebElement emailField = delay.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("#email")));
        emailField.sendKeys("testmail@google.com");

        WebElement sbmtBttn = delay.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("#step-login-email-submit")));
        sbmtBttn.click();

        WebElement pwdField = delay.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("#login-password")));
        pwdField.sendKeys("28101991");

        WebElement finalLoginButton = delay.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("#step-login-password-submit")));
        finalLoginButton.click();
        try {
            Thread.sleep(10000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

    }

    @And("^I Place order$")
    public void I_Place_order() throws IOException {

        WebElement finalSbmtButtn = delay.until(ExpectedConditions.visibilityOfElementLocated(By.id("submit-btn")));
        finalSbmtButtn.click();

        System.out.println("clicked final Submit button");

        try {
            Thread.sleep(10000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        

    }

    @Then("^I should see Confirmation page$")
    public void I_should_see_Confirmation_page() throws InterruptedException {
        System.out.println("wait was");

    }
}
