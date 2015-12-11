package com.maven.classes;

import cucumber.api.java.en.Given;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;

import java.util.List;

/**
 * Created by vadim on 13.11.2015.
 */
public class vbridses extends Config {

    @Given("^I am on Google home paga$")

    public void I_am_on_Google_home_paga() throws Throwable {
       browser.get("http://support.victoriabrides.com");
        WebElement email = delay.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("input[id=\"email\"]")));
        WebElement pwd = delay.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("input[id=\"password\"]")));
        email.sendKeys("elvibrau@gmail.com");
        pwd.sendKeys("a9b1e50cb");

        browser.findElement(By.cssSelector("button[title=\"Sign in\"]")).click();
        WebElement logo = delay.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("html/body/nav/div/div[1]/a")));
        logo.click();
        WebElement lmsbn = delay.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("#pagination")));
        Thread.sleep(3000);
        List<WebElement> numbers = browser.findElements(By.xpath(".//*[@id='pagination']/a"));

        for (WebElement items : numbers){
            System.out.print(items.getText().substring(2));
        }

    }
}
