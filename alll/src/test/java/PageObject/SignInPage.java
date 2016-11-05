package PageObject;

import Helpers.Config;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.FindBys;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;
import java.util.List;

import static org.hamcrest.CoreMatchers.containsString;
import static org.junit.Assert.assertThat;

/**
 * Created by vadimdemeshyn on 03.06.16.
 */
public class SignInPage extends Config {

    private WebDriver browser;

    private static String PAGE_URL="https://upland-logic-staging.herokuapp.com/users/sign_in";

    private static String EMAIL = "v.demeshyn@svitla.com";
    private static String PASSWORD = "12345678qw";


    @FindBy(how = How.ID, using = "user_email")
    private WebElement emailField;

    @FindBy(id = "user_password")
    private WebElement pwdField;

    @FindBy(css = "a[href=\"/users/password/new\"]")
    private WebElement forgottPwdLink;

    @FindBy(css= "a[href='/help']")
    private WebElement helpLink;

    @FindBy(xpath = ".//*[@id='new_user']/button")
    private WebElement signInButton;

    @FindBys(@FindBy(css="p"))
    private List<WebElement> searchForNeededCopyrightLine;

    @FindBy(css= ".alert-warning")
    private WebElement warningMessageField;

//    private WebElement pwdField = browser.waitForVisible(By.id("user_password"));


    public SignInPage(WebDriver browser){

        this.browser = browser;

        PageFactory.initElements(browser, this);
    }

    public void fillEmail(){

        emailField.sendKeys(EMAIL);
    }
    public void fillInvalidEmail(){
        emailField.sendKeys(EMAIL + "invalid");
    }

    public void fillPwd(){
        pwdField.sendKeys(PASSWORD);
    }
    public void fillInvalidPwd(){
        pwdField.sendKeys(PASSWORD + "invalid");
    }

    public void clickSignInButton(){
        signInButton.click();
    }

    public void navigateToSignInPage(){
        browser.get(PAGE_URL);
    }

    public void performLogout(){
        browser.get("https://upland-logic-staging.herokuapp.com/users/sign_out");
    }

    public void getWARNING_MESSAGE(){
         String WARNING_MESSAGE = "×\n" +
                 "Invalid email or password.";

        assertThat(WARNING_MESSAGE, containsString("Invalid email or password"));


    }


}
