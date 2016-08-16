package PageObject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

/**
 * Created by vadimdemeshyn on 03.06.16.
 */
public class OrganizationInnerPage {

    private WebDriver browser;

    @FindBy(css = "a[href='/organizations/31/impairment_solver/scenarios']")
    private WebElement impairmentsButton;


    // ------------------------------------------------------------------------------------------------

    public OrganizationInnerPage(WebDriver browser){
        this.browser = browser;
        PageFactory.initElements(browser, this);
    }

    public void clickImpairmentsButton(){
        impairmentsButton.click();
    }


}
