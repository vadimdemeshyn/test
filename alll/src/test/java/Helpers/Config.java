package Helpers;

import org.openqa.selenium.By;
import org.openqa.selenium.StaleElementReferenceException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxBinary;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.htmlunit.HtmlUnitDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.phantomjs.PhantomJSDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;


/**
 * Created by vadimdemeshyn on 01.08.16.
 */
public class Config {

    static final int DEFAULT_WAIT = 60;
    private static String OS = System.getProperty("os.name").toLowerCase();
    private static String USER_NAME = System.getProperty("user.name").toLowerCase();
    private static String BRW = System.getProperty("browser").toLowerCase();
    private static String Xport = System.getProperty("lmportal.xvfb.id", ":1");


    public static String getChromeDriverPath() {
        String systemDirName = "";
        if (OS.contains("win")) {
            systemDirName = "win32";
        } else if (OS.contains("mac")) {
            systemDirName = "mac";
        } else if (OS.contains("nix") || OS.contains("nux") || OS.indexOf("aix") > 0) {
            String arch = System.getProperty("sun.arch.data.model");
            if (arch.equals("32") ) {
                systemDirName = "linux/32";
            }
            else {
                systemDirName = "linux/64";
            }
        }

        return "bin/" + systemDirName + "/chromedriver";
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


   /* protected static WebDriver browser;



    public static void initializeBrowser(){
        System.setProperty("webdriver.chrome.driver", Config.getChromeDriverPath());
        Config.browser = new ChromeDriver();
    }



    public WebDriver getBrowser(){

            Config.initializeBrowser();

        return browser;
    } */


    protected static WebDriver browser;


    public Config() {
        initialize();
    }

    public void initialize() {
        if (browser == null)
            createNewDriverInstance();
    }

    private void createNewDriverInstance() {

        if (USER_NAME.contains("vadimdemeshyn")){
            if (BRW.contains("chrome")){
                System.setProperty("webdriver.chrome.driver", Config.getChromeDriverPath());
                Config.browser = new ChromeDriver();
            }
            else if (BRW.contains("firefox")){
                Config.browser = new FirefoxDriver();
            }
            else if (BRW.contains("ie")){
                Config.browser = new InternetExplorerDriver();
            }
            else if (BRW.contains("remote")){
                Config.browser = new HtmlUnitDriver();
            }

        }

        else if (USER_NAME.contains("jenkins")) {
            if (BRW.contains("chrome")){
                System.setProperty("webdriver.chrome.driver", Config.getChromeDriverPath());
                Config.browser = new ChromeDriver();
            }
            else if (BRW.contains("firefox")){
                FirefoxBinary firefoxBinary = new FirefoxBinary();
                firefoxBinary.setEnvironmentProperty("DISPLAY", Xport);
                Config.browser = new FirefoxDriver(firefoxBinary, null);
            }
            else if (BRW.contains("ie")){
                Config.browser = new InternetExplorerDriver();
            }

            else if (BRW.contains("remote")){
                Config.browser = new HtmlUnitDriver();
            }
        }

    }

    public WebDriver getDriver() {
        return browser;
    }

    public void destroyDriver() {
        browser.quit();
        browser = null;
    }



}
