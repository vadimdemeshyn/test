package com.maven.classes;

import org.testng.annotations.Test;

import static com.jayway.restassured.RestAssured.expect;
import static org.hamcrest.CoreMatchers.equalTo;
import static org.junit.Assert.assertThat;

/**
 * Created by vadimdemeshyn on 11.02.16.
 */
public class testtesttest {

    @Test

    public void testGetSingleUser() {



        expect().
                statusCode(200).
                body(
                        "userId", equalTo(1),
                        "id", equalTo(1),
                        "title", equalTo("sunt aut facere repellat provident occaecati excepturi optio reprehenderit"),
                        "body", equalTo("quia et suscipit\\nsuscipit recusandae consequuntur expedita et cum\\nreprehenderit molestiae ut ut quas totam\\nnostrum rerum est autem sunt rem eveniet architecto")).
                when().
                get("http://jsonplaceholder.typicode.com/posts/1");
    }



    public void main(String[] args) {
        this.testGetSingleUser();
    }
}
