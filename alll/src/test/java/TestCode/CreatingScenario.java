package TestCode;

import Helpers.Config;
import Helpers.DifferentMethods;
import PageObject.Impairments.ScenariosPage;
import PageObject.OrganizationInnerPage;
import PageObject.Organizations;
import PageObject.SignInPage;
import cucumber.api.PendingException;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import org.testng.annotations.Test;

/**
 * Created by vadimdemeshyn on 11.08.16.
 */




public class CreatingScenario extends Config {


    private WebDriver browser;
    private Organizations organizations;
    private OrganizationInnerPage organizationInnerPage;
    private ScenariosPage scenariosPage;



    /* @Before("@create")
    public void setBrowser(){
        config = new Config();
        browser = config.getBrowser();
        signInPage = new SignInPage(browser);
        organizations = new Organizations(browser);
        organizationInnerPage = new OrganizationInnerPage(browser);
        scenariosPage = new ScenariosPage(browser);
        PageFactory.initElements(browser, this);


    } */

    @Before("@create")
    public void beforeScenario() {
        browser = new Config().getDriver();
        System.out.println(getDriverPath());
        System.out.println("this will run before the actual scenario");
        organizations = new Organizations(browser);
        organizationInnerPage = new OrganizationInnerPage(browser);
        scenariosPage = new ScenariosPage(browser);
    }

        @And("^I choose organization$")
        public void iChooseOrganization ()throws Throwable {

            organizations.chooseOrganization();
        }

        @And("^I click Impairments button$")
        public void iClickImpairmentsButton ()throws Throwable {

            organizationInnerPage.clickImpairmentsButton();
        }

        @And("^I click Scenario button$")
        public void iClickScenarioButton ()throws Throwable {

            scenariosPage.clickScenarioButton();
        }

        @And("^I fill fields with valid info$")
        public void iFillFieldsWithValidInfo ()throws Throwable {

            scenariosPage.fillFieldsWithValidInfo();
        }

        @And("^I click Create button$")
        public void iClickCreateButton ()throws Throwable {

            scenariosPage.clickCreateButton();
        }

        @Then("^new scenario is added$")
        public void newScenarioIsAdded ()throws Throwable {

            scenariosPage.getWARNING_MESSAGE();
        }

        @And("^I fill fields with valid info but name field with existing name$")
        public void iFillFieldsWithValidInfoButNameFieldWithExistingName ()throws Throwable {

            scenariosPage.fillFieldsWithValidInfo();
        }

        @Then("^I get error message stating that Scenario with the same name already exists$")
        public void iGetErrorMessageStatingThatScenarioWithTheSameNameAlreadyExists ()throws Throwable {

            scenariosPage.getAlreadyExistingMessage();

        }

     @After("@create")
    public void closeBrowser(){

         new Config().destroyDriver();
         browser = null;
    }

//    @Before("@create")
//    public void signupSetup() {
//        System.out.println("This should run everytime before any of the @Signup-DataDriven tagged scenario is going to run");
//    }
//
//    @After("@create")
//    public void signupTeardown() {
//        System.out.println("This should run everytime after any of the @Signup-DataDriven tagged scenario has run");
//    }

    @And("^I fill fields with valid info, name field with existing name but with another dataset$")
    public void iFillFieldsWithValidInfoNameFieldWithExistingNameButWithAnotherDataset() {

    scenariosPage.fillFieldsWithValidInfoButAnotherDataset();

    }
}


