package PageObject;

import Helpers.Config;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

/**
 * Created by vadimdemeshyn on 03.06.16.
 */
public class Organizations extends Config {

    private WebDriver browser;

    private static String PAGE_URL = "https://upland-logic-development.herokuapp.com/organizations";

    @FindBy(css = "a[href='/organizations/new']")
    private WebElement createOrganizationButton;

    @FindBy(css = "select[name=\"organizations-table_length\"]")
    private WebElement showQuantityOfElementsDropdown;

    @FindBy(xpath = ".//*[@id='organizations-table_filter']/label/input")
    private WebElement searchField;

    @FindBy(css = "a[href='/organizations/31']")
    private WebElement svitlaOrganization;

    @FindBy(id = "organizations-table_paginate")
    private WebElement paginationTable;

    @FindBy(id = "organizations-table_info")
    private WebElement organizationTableInfo;

    @FindBy(css = "a[href=\"#fat-menu\"]")
    private WebElement ClosedloggedUserDropdown;

    @FindBy(css = "ul[class=\"dropdown-menu\"]")
    private WebElement openedLoggedUserDropdownMenu;

    @FindBy(css = "a[href=\"/users/edit\"]")
    private WebElement profileEditLink;

    @FindBy(css = "a[href=\"/users/sign_out\"]")
    private WebElement signOutLink;



        public Organizations (WebDriver browser) {
            this.browser = browser;
            PageFactory.initElements(browser, this);


        }


        public void createOrganization(){
            createOrganizationButton.click();
        }

        public void chooseOrganization(){
            browser.get(PAGE_URL);
            searchField.sendKeys("31");
            svitlaOrganization.click();
        }



}
