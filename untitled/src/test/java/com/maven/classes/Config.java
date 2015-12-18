package com.maven.classes;

import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.annotations.AfterClass;
import org.testng.annotations.AfterTest;

import java.io.File;
import java.net.URL;


/**
 * Created by vadim on 29.09.2015.
 */



public class Config {

    DesiredCapabilities capability = DesiredCapabilities.internetExplorer();




    File file = new File("D:/untitled/src/chromedriver.exe");
    final String chromeProperties = System.setProperty("webdriver.chrome.driver", file.getAbsolutePath());
    WebDriver browser = new ChromeDriver();

    JavascriptExecutor js = (JavascriptExecutor) browser;

    //WebDriver browser = new FirefoxDriver();

    public WebDriverWait delay = new WebDriverWait(browser, 60);

    //Btw are there invalid symbols which are forbidden to use in fields?

    public final String startPage = "https://my-release.solidopinion.com/";

    public String validEmail(){
        String[]first = {"av", "ab", "ev", "4f", "f8"};
        String[] second = {"av", "ab", "ev", "4f", "f8"};
        String[] third = {"av", "ab", "ev", "4f", "f8"};
        String[] fourth = {"gmail.com", "rambler.ru", "mail.ru", "yahoo.com", "aol.com"};


        int a = (int)Math.floor(Math.random() * first.length);
        int b = (int)Math.floor(Math.random() * second.length);
        int c = (int)Math.floor(Math.random() * third.length);
        int d = (int)Math.floor(Math.random() * fourth.length);


        return (first[a] + second[b] + third[c] + "@"+ fourth[d]);
    }

    public String validPwd(){
        String[]first = {"av", "ab", "ev", "4f", "f8"};
        String[] second = {"av", "ab", "ev", "4f", "f8"};
        String[] third = {"av", "ab", "ev", "4f", "f8"};


        int a = (int)Math.floor(Math.random() * first.length);
        int b = (int)Math.floor(Math.random() * second.length);
        int c = (int)Math.floor(Math.random() * third.length);


        return (first[a] + second[b] + third[c]);
    }

    public final String password = validPwd();

    public final  String validName(){
        String[]first = {"Sam", "Pete", "John", "Arne", "Bhavarat"};
        String[] second = {"Boolie", "Rest", "Arnie", "Losse", "Boo"};
        String[] third = {"Fishman", "Petrov", "Sidorov", "Yerohin", "Bitardov"};

        int e = (int)Math.floor(Math.random() * first.length);
        int g = (int)Math.floor(Math.random() * second.length);
        int h = (int)Math.floor(Math.random() * third.length);

        return (first[e] + " " + second[g] + " " + third[h]);

    }





}




