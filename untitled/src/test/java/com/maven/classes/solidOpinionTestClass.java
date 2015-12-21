package com.maven.classes;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.testng.Assert;

/**
 * Created by vadim on 29.09.2015.
 */
public class solidOpinionTestClass extends Config {



    @Given("^I am on SolidOpinion registration page$")
    public void I_am_on_SolidOpinion_registration_page() {
        browser.get(startPage + "signup");
        browser.manage().window().maximize();

    }

    @When("^I fill Name field with correct info$")
    public void I_fill_Name_field_with_correct_info()  {
        WebElement nameField = delay.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector(".wrap-placeholder input[id=name]")));
        nameField.sendKeys(validName());
    }

    @And("^I fill Email field with valid email$")
    public void I_fill_Email_field_with_valid_email() throws Throwable {
        WebElement emailField = delay.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector(".wrap-placeholder input[id=email]")));
        emailField.sendKeys(validEmail());

    }

    @And("^I fill Pwd field with valid pwd$")
    public void I_fill_Pwd_field_with_valid_pwd() throws Throwable {
        WebElement pwdField = delay.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector(".wrap-placeholder input[id=password]")));
    pwdField.sendKeys(password);
    }

    @And("^I fill Confirm Email field with valid pwd$")
    public void I_fill_Confirm_Email_field_with_valid_pwd() throws Throwable {
        WebElement pwdField = delay.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector(".wrap-placeholder input[id=password2]")));
        pwdField.sendKeys(password);
    }

    @And("^I click Submit button$")
    public void I_click_Submit_button() throws Throwable {
        WebElement submitButton = delay.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector(".wrap-button-signup  button[id=go_signup]")));
        submitButton.click();


    }

    @Then("^I am successfully signed up to system$")
    public void I_am_successfully_signed_up_to_system(){
        WebElement welcomeMsg = delay.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("#page_container .welcome-title")));
        String str = welcomeMsg.getText();
        Assert.assertEquals(str, "Welcome to SolidOpinion!");
        Assert.assertTrue(browser.getCurrentUrl().contains("welcome"));


    }


    @And("^I enter password in Confirmation field that differs from password above$")
    public void I_enter_password_in_Confirmation_field_that_differs_from_password_above() {
        WebElement pwdField = delay.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector(".wrap-placeholder input[id=password2]")));
        pwdField.sendKeys(validPwd());
    }


    @Then("^I should get warning that passwords are not the same$")
    public void I_should_get_warning_that_passwords_are_not_the_same(){
        WebElement refusePwds = delay.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector(".alert span[class=inner]")));
        String  refuse = refusePwds.getText();
        Assert.assertEquals(refuse, "Oops! Your passwords don’t match, try again.");

    }

    @And("^I fill Email field with invalid email$")
    public void I_fill_Email_field_with_invalid_email() throws Throwable {
        WebElement emailField = delay.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector(".wrap-placeholder input[id=email]")));
        emailField.sendKeys("aaaaaaaaaaaaaaaaaaaaa");
    }

    @Then("^I should get warning that email is invalid$")
    public void I_should_get_warning_that_email_is_invalid() throws Throwable {

        WebElement invalidEmail = delay.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector(".alert span[class=inner]")));
        String inv = invalidEmail.getText();
        Assert.assertEquals(inv, "Please enter a valid email address.");

    }

    @Then("^I should get warning that I should type in credentials$")
    public void I_should_get_warning_that_I_should_type_in_credentials() throws Throwable {
        WebElement warningField = delay.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector(".alert span[class=inner]")));
        String warning = warningField.getText();
        Assert.assertEquals(warning, "All fields are required.");
    }
}


