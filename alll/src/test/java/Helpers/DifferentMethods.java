package Helpers;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

/**
 * Created by vadimdemeshyn on 04.11.16.
 */
public class DifferentMethods extends Config {

    WebDriver driver = getDriver();
    final static long WAITTIME = 60;
    WebDriverWait wait = new WebDriverWait(driver, WAITTIME);

    public WebElement waitForLoad(WebElement element, By by) {

        wait.until(ExpectedConditions.presenceOfElementLocated(by));

        return element;


    }


}
