package test.steps;

import static org.junit.Assert.assertEquals;

import java.io.File;
import java.io.IOException;
import java.util.concurrent.TimeUnit;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.core.api.Scenario;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.pt.Dado;
import io.cucumber.java.pt.Então;
import io.cucumber.java.pt.Quando;

public class LoginSteps {
	WebDriver driver;

	@Before(order = 0, value = "@web")
	public void inicio() {
		System.setProperty("webdriver.chrome.driver", "src/test/resources/drivers/chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.get("http://automationpractice.com/index.php");
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
	}

	@Dado("que desejo efetuar login")
	public void que_desejo_efetuar_login() {
		driver.findElement(By.xpath("//a[@class='login']")).click();
	}

	@Quando("informo o usuário {string}")
	public void informo_o_usuário(String email) {
		driver.findElement(By.id("email")).sendKeys(email);
	}

	@Quando("a senha {string}")
	public void a_senha(String senha) {
		driver.findElement(By.id("passwd")).sendKeys(senha);
	}

	@Quando("seleciono entrar")
	public void seleciono_entrar() {
		driver.findElement(By.id("SubmitLogin")).click();
	}

	@Então("visualizo a mensagem {string}")
	public void visualizoAMensagem(String msg) {
		String texto = driver.findElement(By.className("info-account")).getText();
		assertEquals(msg, texto);
	}

	@Então("visualizo o erro {string}")
	public void visualizo_o_erro(String msg) {
		String texto = driver.findElement(By.xpath("//*[@id=\"center_column\"]/div[1]/ol/li")).getText();
		assertEquals(msg, texto);
	}

	@After(order = 1, value = "@web")
	public void screenshot(Scenario cenario) {
		File file = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
		try {
			FileUtils.copyFile(file, new File("target/screenshot/" + cenario.getName() + ".jpg"));
			driver.quit();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	@After(order = 0, value = "@web")
	public void fecharBrownser() {
		driver.quit();
	}
}
