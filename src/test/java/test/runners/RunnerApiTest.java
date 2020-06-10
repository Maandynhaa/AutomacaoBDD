package test.runners;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import io.cucumber.junit.CucumberOptions.SnippetType;

@RunWith(Cucumber.class)
@CucumberOptions(
features = "src/test/resources/features/", 
glue = {"test.steps"},
tags = {"@api"},
plugin = {"pretty", "html:target/cucumber-report/runapiat","json:target/cucumber-report/runapiat/cucumber.json"},
monochrome = true,
snippets = SnippetType.CAMELCASE,
dryRun = false,
strict = false
)
public class RunnerApiTest {
	
}
