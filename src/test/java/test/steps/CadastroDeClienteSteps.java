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
import io.cucumber.java.pt.Então;
import io.cucumber.java.pt.Quando;

public class CadastroDeClienteSteps {

	private AndroidDriver driver;

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

	@Dado("que esteja na tela de início")
	public void que_esteja_na_tela_de_início() throws MalformedURLException {

		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		driver.findElementById("com.android.packageinstaller:id/permission_allow_button").click();
		MobileElement el2 = (MobileElement) driver.findElementByXPath(
				"/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.ImageButton");
		el2.click();
		driver.findElementById("br.com.dudstecnologia.cadastrodeclientes:id/floating_novo").click();
	}

	@Quando("informo o dados {string},{string},{string},{string},{string} ,{string},{string},{string},{string},{string},{string}")
	public void informo_o_dados(String nome, String rg, String cpf, String dataNasc, String rua, String numero,
			String bairro, String cep, String cidade, String telefone, String email) {
		driver.findElementById("br.com.dudstecnologia.cadastrodeclientes:id/editNome").sendKeys("Amanda Teste");
		driver.findElementById("br.com.dudstecnologia.cadastrodeclientes:id/editRg").sendKeys("12.123.425-2");
		driver.findElementById("br.com.dudstecnologia.cadastrodeclientes:id/editCpf").sendKeys("27.199.140-9");
		driver.findElementById("br.com.dudstecnologia.cadastrodeclientes:id/editData").sendKeys("01/01/2000");
		driver.findElementById("br.com.dudstecnologia.cadastrodeclientes:id/editEndereco").sendKeys("Rua Doze");
		driver.findElementById("br.com.dudstecnologia.cadastrodeclientes:id/editNumero").sendKeys("123");
		driver.findElementById("br.com.dudstecnologia.cadastrodeclientes:id/editBairro").sendKeys("Capixaba");
		driver.findElementById("br.com.dudstecnologia.cadastrodeclientes:id/editCep").sendKeys("69922-000");
		driver.findElementById("br.com.dudstecnologia.cadastrodeclientes:id/editCidade").sendKeys("Acre");
		driver.findElementById("br.com.dudstecnologia.cadastrodeclientes:id/editTelefone1").sendKeys("112554-7474");
		driver.findElementById("br.com.dudstecnologia.cadastrodeclientes:id/editEmail").sendKeys("amanda@teste.com");
	}

	@Quando("seleciono salvar")
	public void seleciono_salvar() {
		driver.findElementById("br.com.dudstecnologia.cadastrodeclientes:id/btnSalvar").click();
	}

	@Então("visualizo a mensagem de sucesso")
	public void visualizo_a_mensagem_de_sucesso() {
		MobileElement msg = (MobileElement) driver.findElementById("android:id/message");
		assertEquals("Cadastro efetuado com sucesso", msg.getText());
		driver.findElementById("android:id/button1").click();
	}

	@Então("retorna msg de sucesso")
	public void retorna_msg_de_sucesso() {
		MobileElement msg = (MobileElement) driver.findElementById("android:id/message");
		assertEquals("Cadastro efetuado com sucesso", msg.getText());
		driver.findElementById("android:id/button1").click();
	}

	@After(value = "@mobile")
	public void fechar() {
		driver.quit();
	}

}
