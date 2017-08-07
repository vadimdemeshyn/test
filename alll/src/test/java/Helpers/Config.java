package Helpers;

import com.google.common.collect.ImmutableMap;
import org.openqa.selenium.By;
import org.openqa.selenium.StaleElementReferenceException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeDriverService;
import org.openqa.selenium.firefox.FirefoxBinary;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.htmlunit.HtmlUnitDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.safari.SafariDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.io.File;
import java.io.IOException;
import java.util.concurrent.TimeUnit;


/**
 * Created by vadimdemeshyn on 01.08.16.
 */
public class Config {

    protected static WebDriver browser;

    static final int DEFAULT_WAIT = 60;
    private static String OS = System.getProperty("os.name").toLowerCase();
    private static String USER_NAME = System.getProperty("user.name").toLowerCase();
    private static String BRW = System.getProperty("browser").toLowerCase();
    private static String Xport = System.getProperty("lmportal.xvfb.id", ":1");


    public static String getDriverPath() {
        String systemDirName = "";
        String path = "";
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
        if (BRW.contains("chrome")){
            path = "bin/" + systemDirName + "/chromedriver";
        }
        else if (BRW.contains("firefox")){
            path = "bin/" + systemDirName + "/geckodriver";
        }

        return path;


    }

    public static WebElement waitForVisible(By by){
        WebDriverWait delay = new WebDriverWait(browser, 60);
        WebElement element = null;
        try {
            element = delay.until(ExpectedConditions.visibilityOfElementLocated(by));
        } catch (StaleElementReferenceException ex) {
            System.err.println(ex.getMessage());
            return waitForVisible(by);
        }

        return element;

    }


    public Config() {
        initialize();
    }

    public void initialize() {
        if (browser == null)
        createNewDriverInstance();
        browser.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
        browser.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);

    }

    private void createNewDriverInstance() {

        if (USER_NAME.contains("vadimdemeshyn")){
            if (BRW.contains("chrome")){
                System.setProperty("webdriver.chrome.driver", Config.getDriverPath());
                Config.browser = new ChromeDriver();
            }
            else if (BRW.contains("firefox")){
                System.setProperty("webdriver.gecko.driver", Config.getDriverPath());
                Config.browser = new FirefoxDriver();
            }
            else if (BRW.contains("ie")){
                Config.browser = new InternetExplorerDriver();
            }
            else if (BRW.contains("remote")){
                Config.browser = new HtmlUnitDriver();
            }
            else if (BRW.contains("safari")){
                Config.browser = new SafariDriver();
            }

        }

        else if (USER_NAME.contains("jenkins")) {
            if (BRW.contains("chrome")){


                ChromeDriverService chromeDriverService = new ChromeDriverService.Builder()
                        .usingDriverExecutable(new File(Config.getDriverPath()))
                        .usingAnyFreePort().withEnvironment(ImmutableMap.of("DISPLAY", ":1")).build();
                try {
                    chromeDriverService.start();
                } catch (IOException e) {
                    e.printStackTrace();
                }

                Config.browser = new ChromeDriver(chromeDriverService);
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
        if (browser == null) initialize();
        return browser;
    }

    public void destroyDriver() {
        browser.quit();
        browser = null;
    }



}
