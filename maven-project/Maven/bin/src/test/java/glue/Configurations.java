package glue;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.WebDriverWait;


/**
 * Created by vadim on 13.01.2015.
 */
public class Configurations {

// Class with global configuration data. Can be easily extended and used in any other Java class.



    public WebDriver browser = new FirefoxDriver();

    public WebDriverWait delay = new WebDriverWait(browser, 10);



}


