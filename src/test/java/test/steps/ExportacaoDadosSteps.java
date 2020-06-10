package test.steps;

import static org.junit.Assert.assertEquals;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.remote.DesiredCapabilities;

import io.appium.java_client.MobileElement;
import io.appium.java_client.android.AndroidDriver;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.pt.Dado;
import io.cucumber.java.pt.Entao;
import io.cucumber.java.pt.Quando;

public class ExportacaoDadosSteps {
	private AndroidDriver<MobileElement> driver;

	@Before(value = "@mobile")
	public void setUp() throws MalformedURLException {
		DesiredCapabilities desiredCapabilities = new DesiredCapabilities();
		desiredCapabilities.setCapability("platformName", "Android");
		desiredCapabilities.setCapability("deviceName", "emulator-5554");
		desiredCapabilities.setCapability("automationName", "uiautomator2");
		desiredCapabilities.setCapability("appPackage", "br.com.dudstecnologia.cadastrodeclientes");
		desiredCapabilities.setCapability("appActivity", "br.com.dudstecnologia.cadastrodeclientes.MainClientes");

		URL remoteUrl = new URL("http://127.0.0.1:4723/wd/hub");

		driver = new AndroidDriver(remoteUrl, desiredCapabilities);
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
	}

	@Dado("que esteja na tela de exportar dados")
	public void que_esteja_na_tela_de_exportar_dados() {
		driver.findElementById("com.android.packageinstaller:id/permission_allow_button").click();
		driver.findElementByXPath(
				"/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.ImageButton")
				.click();
		driver.findElementById("br.com.dudstecnologia.cadastrodeclientes:id/floating_exportar").click();
	}

	@Quando("seleciono {string}")
	public void seleciono(String botao) {
		String caminhoID = "br.com.dudstecnologia.cadastrodeclientes:id/";
		driver.findElementById(caminhoID + botao).click();
	}

	@Entao("retorna {string} de sucesso")
	public void retorna_de_sucesso(String msg) {
		MobileElement msg2 = (MobileElement) driver
				.findElementById("br.com.dudstecnologia.cadastrodeclientes:id/alertTitle");
		assertEquals(msg, msg2.getText());
		driver.findElementById("android:id/button1").click();
	}

	@After(order = 0, value = "@mobile")
	public void fechar() {
		driver.quit();
	}

}
