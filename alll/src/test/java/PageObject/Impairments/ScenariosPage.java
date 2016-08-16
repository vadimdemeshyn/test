package PageObject.Impairments;

import Helpers.Config;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;

import java.util.Iterator;
import java.util.Set;

import static org.hamcrest.CoreMatchers.containsString;
import static org.junit.Assert.assertThat;

/**
 * Created by vadimdemeshyn on 05.08.16.
 */
public class ScenariosPage extends Config {



    private WebDriver browser;


    private static String PAGE_URL="https://upland-logic-staging.herokuapp.com/organizations/31/impairment_solver/scenarios";


    public String getSigInPageUrl(){

        return this.PAGE_URL;
    }

    @FindBy(css = "a[href='/organizations/31/impairment_solver/scenarios/new']")
    private WebElement addScenarioButton;

    @FindBy(id = "impairment_solver_scenario_name")
    private WebElement scenarioNameField;

    @FindBy(css = "input[name='impairment_solver_scenario[for]']")
    private WebElement importImpairmentsFromDate;

    @FindBy(css = "input[name='impairment_solver_scenario[for]']")
    private  WebElement importAssetRecordsFromDate;

    @FindBy(xpath = ".//*[@id='new_impairment_solver_scenario']/div[2]/div/button[2]")
    private WebElement createScenarioButton;

    @FindBy(css= ".alert-info")
    private WebElement warningMessageField;

    public ScenariosPage(WebDriver browser){

        this.browser = browser;

        PageFactory.initElements(browser, this);

    }


        public void clickScenarioButton(){
            addScenarioButton.click();
        }

        public void fillFieldsWithValidInfo(){
            WebDriverWait wait = new WebDriverWait(browser, 40);
            wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("#impairment_solver_scenario_name")));

           scenarioNameField.sendKeys("test");
       }

        public void clickCreateButton(){
            createScenarioButton.click();
        }

        public void getWARNING_MESSAGE(){
            WebDriverWait wait = new WebDriverWait(browser, 40);
            wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector(".alert-info")));

            String js = "arguments[0].style.height='auto'; arguments[0].style.visibility='visible';";

            ((JavascriptExecutor) browser).executeScript(js, warningMessageField);

            String WARNING_MESSAGE = "Scenario was successfully created";

            assertThat(WARNING_MESSAGE, containsString("Scenario was successfully created"));



        }

        public void getAlreadyExistingMessage() throws InterruptedException {


            String WARNING_MESSAGE = "Name has already been taken";

            assertThat(WARNING_MESSAGE, containsString("Name has already been taken"));

        }



}


