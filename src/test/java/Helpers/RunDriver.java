package Helpers;

import org.openqa.selenium.*;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by vadimdemeshyn on 01.08.16.
 */
public interface RunDriver extends WebDriver {
    static final int DEFAULT_WAIT = 60;

    @Override
    void close();

    void deleteAllCookies();

    WebElement waitForVisible(By by);
    List<WebElement> waitForVisible(By by, boolean isList);
    boolean hasFlashEnabled();


    //TODO: might be better to do this in another way
    class RunDriverDefaultImp {
        private RunDriverDefaultImp(){

        }

        public static WebElement waitForVisible(RunDriver self, By by){
            WebElement element = null;

            WebDriverWait wait = new WebDriverWait(self, DEFAULT_WAIT);
            try {
                element = wait.until(ExpectedConditions.visibilityOfElementLocated(by));
            } catch (StaleElementReferenceException ex) {
                System.err.println(ex.getMessage());
                return waitForVisible(self, by);
            }

            return element;
        }
    }
}
