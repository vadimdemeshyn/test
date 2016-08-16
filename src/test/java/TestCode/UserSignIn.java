

package TestCode;

import Helpers.Config;
import PageObject.*;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.WebDriver;
import org.testng.Assert;
import org.testng.annotations.Test;

/**
 * Created by vadimdemeshyn on 06.06.16.
 */
public class UserSignIn  extends Config {

    WebDriver browser;
    SignInPage signInPage;


    /* @Before("@signin")
    public void setBrowser(){
        browser = config.getBrowser();
        signInPage= new SignInPage(browser);

    }
    */
    @Before
    public void beforeScenario() {
        browser = new Config().getDriver();
        System.out.println("this will run before the actual scenario");
        signInPage= new SignInPage(browser);

    }

    @After
    public void afterScenario() {
        new Config().destroyDriver();
        System.out.println("this will run after scneario is finished, even if it failed");
    }


    @Given("^I am on Sign In page$")
    public void iAmOnSignInPage()  {
        signInPage.navigateToSignInPage();

    }

    @When("^I fill Email field with valid email$")
    public void iFillEmailFieldWithValidEmail()  {
        signInPage.fillEmail();
    }

    @And("^I fill Password firld with valid email$")
    public void iFillPasswordFirldWithValidEmail() {
        signInPage.fillPwd();
    }

    @And("^I click on Sign In button$")
    public void iClickOnSignInButton()  {
        signInPage.clickSignInButton();
    }

    @Then("^I should be logged in successfully$")
    public void iShouldBeLoggedInSuccessfully(){

        Assert.assertEquals("https://upland-logic-development.herokuapp.com/organizations", browser.getCurrentUrl());
    }


    @When("^I fill Email field with invalid email$")
    public void iFillEmailFieldWithInvalidEmail(){
        signInPage.fillInvalidEmail();
    }

    @And("^I fill Password firld with invalid pwd$")
    public void iFillPasswordFirldWithInvalidPwd() throws Throwable {
        signInPage.fillInvalidPwd();
    }

    @Then("^I should see \"([^\"]*)\"$")
    public void iShouldSee(String arg0) throws Throwable {
        signInPage.getWARNING_MESSAGE();
    }

    /* @After("@signin")
    public void closeBrowser(){

        browser.quit();
    } */
    @Before("@signIn")
    public void signupSetup() {
        System.out.println("This should run everytime before any of the @Signup-DataDriven tagged scenario is going to run");
    }

    @After("@signIn")
    public void signupTeardown() {
        System.out.println("This should run everytime after any of the @Signup-DataDriven tagged scenario has run");
    }
}
