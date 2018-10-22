package com.koldenfrozen.goals;

import com.koldenfrozen.goals.model.Goal;
import org.apache.commons.lang3.StringUtils;
import org.fluentlenium.adapter.junit.FluentTest;
import org.fluentlenium.core.domain.FluentWebElement;
import org.fluentlenium.core.hook.wait.Wait;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.fluentlenium.core.filter.FilterConstructor.withName;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@Wait
public class GoalsUAT extends FluentTest {
    @Value("${local.server.port}")
    private String port;
    @Autowired
    private GoalRepository repository;

    @Override
    public WebDriver newWebDriver() {
        ChromeOptions opt = new ChromeOptions();
        opt.addArguments("--headless");
        opt.addArguments("--disable-gpu");
        opt.addArguments("--no-sandbox");
        String path = System.getenv("GOOGLE_CHROME_BIN"); // heroku-specific
        if (!StringUtils.isEmpty(System.getenv("GOOGLE_CHROME_BIN"))) {
            System.out.println("Setting binary path to: " + path);
            opt.setBinary(path);
        }
        WebDriver driver = new ChromeDriver(opt);
        return driver;
    }

    @Before
    public void before() {
        repository.deleteAll();
    }

    @After
    public void after() {
        repository.deleteAll();
    }


    @Test
    public void shouldSeeGoalList() {
        // Setup
        Goal testGoal = new Goal("Read books");
        repository.save(testGoal);

        // Exercise
        goTo("http://localhost:" + this.port + "/");
        await().until(() -> $("p").present());

        // Assert
        FluentWebElement goal = $("li").get(0);
        assertThat(goal.text()).isEqualTo("Read books");
    }

    @Test
    public void shouldNavToAdd() {
        // Setup
        Goal testGoal = new Goal("Read books");
        repository.save(testGoal);

        // Exercise
        goTo("http://localhost:" + this.port + "/");
        await().until(() -> $(".GoalList").present());
        FluentWebElement div = $(".GoalList").get(0);
        div.$("button").click();
        await().untilPage().isLoaded();

        // Assert
        assertThat($(".GoalAdd")).isNotNull();
    }

    @Test
    public void shouldNavToEdit() {
        // Setup
        Goal testGoal = new Goal("Read books");
        repository.save(testGoal);

        // Exercise
        goTo("http://localhost:" + this.port + "/");
        await().until(() -> $("li").present());
        FluentWebElement btn = $(".onEdit").get(0);
        btn.click();
        await().untilPage().isLoaded();

        // Assert
        FluentWebElement goalToEdit = $(".GoalEdit").get(0);
        assertThat(goalToEdit.$("input").value()).isEqualTo("Read books");


    }

    @Test
    public void shouldEditGoal() {
        // TODO: make this pass
        // Setup
        Goal testGoal = new Goal("Read books");
        repository.save(testGoal);
        goTo("http://localhost:" + this.port + "/goals/1");
        await().untilPage().isLoaded();
        FluentWebElement input = $("input", withName("name")).get(0);

        // Exercise: Edit goal
        input.fill().withText("Read one million books");

        // Exercise: Save changes
        $("button", withName("save")).click();
        await().until(() -> $(".GoalList").present());

        // Assert
        FluentWebElement editedGoal = $("li").get(0);
        assertThat(editedGoal.text()).isEqualTo("Read one million books");

    }
}
