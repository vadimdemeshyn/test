package PageObject;

import Helpers.Config;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.FindBys;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;
import java.util.List;

/**
 * Created by vadimdemeshyn on 03.06.16.
 */
public class SignInPage extends Config {

    private WebDriver browser;

    private static String PAGE_URL="https://upland-logic-development.herokuapp.com/users/sign_in";


    public String getSigInPageUrl(){

        return this.PAGE_URL;
    }

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

    public void getWARNING_MESSAGE(){
         String WARNING_MESSAGE = "×\n" +
                 "Invalid email or password.";

        String actual = warningMessageField.getText();

        Assert.assertEquals(WARNING_MESSAGE, actual);


    }


}
