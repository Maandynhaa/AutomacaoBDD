package test.steps;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

import java.io.IOException;

import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpDelete;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.HttpClientBuilder;
import org.springframework.http.HttpHeaders;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

import io.cucumber.java.pt.Dado;
import io.cucumber.java.pt.Entao;
import io.cucumber.java.pt.Quando;

public class FuncionarioSteps {

	private HttpHeaders headers;
	private CloseableHttpResponse httpResponse;
	private HttpPost requestPost;
	private HttpGet requestGet;
	private HttpDelete requestDelete;

	private static int CREATED_ID;
	private static String CREATED_NAME = "Amanda";
	public static final String GET_URL = "http://dummy.restapiexample.com/api/v1/employee/";
	public static final String CREATE_URL = "http://dummy.restapiexample.com/api/v1/create";
	public static final String UPDATE_URL = "http://dummy.restapiexample.com/api/v1/update/";
	public static final String DELETE_URL = "http://dummy.restapiexample.com/api/v1/delete/";
	public static final int RESPONSE_200 = 200;

	@Dado("defino o ponto de extremidade da API de serviço do funcionario")
	public void definoOPontoDeExtremidadeDaAPIDeServiçoDoFuncionario() {
		requestPost = new HttpPost(CREATE_URL);

	}

	@Quando("defino o HEADER")
	public void defino_o_HEADER() {
		headers = new HttpHeaders();
		headers.add("Accept", "application/json");
		headers.add("Content-Type", "application/json");
	}

	@Quando("envio uma solicitaçao HTTP POST")
	public void envio_uma_solicitaçao_HTTP_POST() throws ClientProtocolException, IOException {
		StringEntity body = new StringEntity("{\"name\":\"" + CREATED_NAME + "\",\"salary\":\"1000\",\"age\":\"26\"}");
		requestPost.setEntity(body);
		httpResponse = HttpClientBuilder.create().build().execute(requestPost);

	}

	@Entao("recebo uma resposta valida")
	public void recebo_uma_resposta_valida() throws IOException {
		JsonNode jsonNode = new ObjectMapper().readTree(httpResponse.getEntity().getContent());
		JsonNode rootnode = jsonNode.get("data");
		rootnode.has("id");
		CREATED_ID = rootnode.get("id").intValue();
		assertEquals(200, httpResponse.getStatusLine().getStatusCode());
		assertNotNull(CREATED_ID);
	}

	@Dado("defino o ponto de extremidade da API de serviço do funcionario GET")
	public void definoOPontoDeExtremidadeDaAPIDeServiçoDoFuncionarioGET() {
		requestGet = new HttpGet(GET_URL + 1);
	}

	@Entao("localizo funcionario")
	public void localizo_funcionario() throws UnsupportedOperationException, IOException {
		CloseableHttpResponse httpResponse = HttpClientBuilder.create().build().execute(requestGet);
		JsonNode jsonNode = new ObjectMapper().readTree(httpResponse.getEntity().getContent());
		assertNotNull(jsonNode);
		assertEquals(CREATED_NAME, "Amanda");

	}

	@Dado("defino o ponto de extremidade da API de serviço do funcionário DELETE")
	public void definoOPontoDeExtremidadeDaAPIDeServiçoDoFuncionárioDELETE() {
		requestDelete = new HttpDelete(DELETE_URL + CREATED_ID);

	}

	@Entao("recebo status valido")
	public void receboStatusValido() throws ClientProtocolException, IOException {
		CloseableHttpResponse httpResponse = HttpClientBuilder.create().build().execute(requestDelete);
		JsonNode jsonNode = new ObjectMapper().readTree(httpResponse.getEntity().getContent());
		assertNotNull(jsonNode);
		assertEquals(RESPONSE_200, httpResponse.getStatusLine().getStatusCode());
	}

}
