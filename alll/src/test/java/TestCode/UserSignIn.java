

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
import static org.hamcrest.CoreMatchers.containsString;
import static org.junit.Assert.assertThat;

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
    public void iFillEmailFieldWithValidEmail() throws InterruptedException {
        Thread.sleep(2500);

        signInPage.fillEmail();
    }

    @And("^I fill Password firld with valid email$")
    public void iFillPasswordFirldWithValidEmail() throws InterruptedException {

        signInPage.fillPwd();
    }

    @And("^I click on Sign In button$")
    public void iClickOnSignInButton() throws InterruptedException {

        signInPage.clickSignInButton();
    }

    @Then("^I should be logged in successfully$")
    public void iShouldBeLoggedInSuccessfully() throws InterruptedException {

        Assert.assertEquals("https://upland-logic-staging.herokuapp.com/organizations", browser.getCurrentUrl());
    }


    @When("^I fill Email field with invalid email$")
    public void iFillEmailFieldWithInvalidEmail() throws InterruptedException {

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



    @Then("^I should not be logged in$")
    public void iShouldNotBeLoggedIn() throws Throwable {
        signInPage.getWARNING_MESSAGE();
    }

    @When("^I perform log out$")
    public void iPerformLogOut() throws Throwable {
        signInPage.performLogout();
    }

    @Then("^I should be not logged in$")
    public void iShouldBeNotLoggedIn() throws Throwable {
        assertThat(browser.getCurrentUrl(), containsString("https://upland-logic-staging.herokuapp.com/users/sign_out") );
    }

    @Before("@signIn")
    public void signupSetup() {
        System.out.println("This should run everytime before any of the @Signup-DataDriven tagged scenario is going to run");
    }

    @After("@signIn")
    public void signupTeardown() {
        System.out.println("This should run everytime after any of the @Signup-DataDriven tagged scenario has run");
    }
}
