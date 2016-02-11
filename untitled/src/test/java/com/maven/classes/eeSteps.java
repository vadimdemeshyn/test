package com.maven.classes;

import com.maven.classes.Config;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.deps.com.thoughtworks.xstream.converters.collections.CollectionConverter;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.testng.Assert;

import static com.codeborne.selenide.Selenide.open;

/**
 * Created by vadimdemeshyn on 01.02.16.
 */
public class eeSteps extends Config {
    @Given("^I am on Dollskill page$")
    public void iAmOnDollskillPage() throws Throwable {

        browser.get("http://ee.dollskill.com/");

        browser.manage().window().maximize();
        js.executeScript("cbar_close_popup(9728);");
    }

    @When("^search for needed product$")
    public void searchForNeededProduct() throws Throwable {
        WebElement searchIcon = delay.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("#show_header_search")));
        searchIcon.click();

        WebElement searchField = delay.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("#search")));
        searchField.click();
        searchField.sendKeys("Never Say Never Dreamie Bra");

        WebElement searchSubmitIcon = delay.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector(".search-button")));
        searchSubmitIcon.click();
    }

    @And("^I choose product$")
    public void iChooseProduct() throws Throwable {
        Assert.assertEquals("http://dkstage.dollskill.com/catalogsearch/result/?q=Test+Product", browser.getCurrentUrl());
        WebElement searchedProduct = delay.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("a[href='http://dkstage.dollskill.com/test-product.html']")));
        Assert.assertTrue(searchedProduct.isDisplayed());
        searchedProduct.click();
    }

    @And("^I add product to Cart$")
    public void iAddProductToCart() throws Throwable {
        WebElement addToCartButton = delay.until(ExpectedConditions.visibilityOfElementLocated(By.id("product-addtocart-button")));
        addToCartButton.click();
    }

    @And("^I proceed to Shopping Cart page$")
    public void iProceedToShoppingCartPage() throws Throwable {
        WebElement clickButton = delay.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector(".viewcart-button")));

        clickButton.click();
    }

    @And("^proceed to Checkout page$")
    public void proceedToCheckoutPage() throws Throwable {
        WebElement checkoutButton = delay.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("button[title=\"Proceed to Checkout\"]")));
        checkoutButton.click();
    }

    @And("^login with existing customer$")
    public void loginWithExistingCustomer() throws Throwable {
        WebElement loginForm = delay.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("a[class=\"login-button\"]")));
        loginForm.click();

        browser.switchTo().activeElement();

        WebElement emailField = delay.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("#popup-email")));
        emailField.sendKeys("kaigreene9@gmail.com");

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

    @And("^Place order$")
    public void placeOrder() throws Throwable {
        WebElement finalSbmtButtn = delay.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("#submit-btn")));
        finalSbmtButtn.click();

        System.out.println("clicked final Submit button");

        try {
            Thread.sleep(10000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    @Then("^should see Confirmation page$")
    public void shouldSeeConfirmationPage() throws Throwable {
        System.out.println("wait was");
    }
}
