$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/funcionario_api.feature");
formatter.feature({
  "name": "Teste REST api de Funcionário",
  "description": "",
  "keyword": "Funcionalidade"
});
formatter.scenario({
  "name": "Adicionar funcionário",
  "description": "",
  "keyword": "Cenário",
  "tags": [
    {
      "name": "@api"
    }
  ]
});
formatter.step({
  "name": "defino o ponto de extremidade da API de serviço do funcionário",
  "keyword": "Dado "
});
formatter.match({
  "location": "FuncionarioSteps.definoOPontoDeExtremidadeDaAPIDeServiçoDoFuncionário()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "defino o HEADER",
  "keyword": "Quando "
});
formatter.match({
  "location": "FuncionarioSteps.defino_o_HEADER()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "envio uma solicitaçao HTTP POST",
  "keyword": "E "
});
formatter.match({
  "location": "FuncionarioSteps.envio_uma_solicitaçao_HTTP_POST()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "recebo uma resposta válida",
  "keyword": "Então "
});
formatter.match({
  "location": "FuncionarioSteps.recebo_uma_resposta_válida()"
});
formatter.result({
  "error_message": "com.fasterxml.jackson.core.JsonParseException: Unexpected character (\u0027\u003c\u0027 (code 60)): expected a valid value (JSON String, Number, Array, Object or token \u0027null\u0027, \u0027true\u0027 or \u0027false\u0027)\n at [Source: (org.apache.http.client.entity.LazyDecompressingInputStream); line: 1, column: 2]\r\n\tat com.fasterxml.jackson.core.JsonParser._constructError(JsonParser.java:1851)\r\n\tat com.fasterxml.jackson.core.base.ParserMinimalBase._reportError(ParserMinimalBase.java:707)\r\n\tat com.fasterxml.jackson.core.base.ParserMinimalBase._reportUnexpectedChar(ParserMinimalBase.java:632)\r\n\tat com.fasterxml.jackson.core.json.UTF8StreamJsonParser._handleUnexpectedValue(UTF8StreamJsonParser.java:2683)\r\n\tat com.fasterxml.jackson.core.json.UTF8StreamJsonParser._nextTokenNotInObject(UTF8StreamJsonParser.java:865)\r\n\tat com.fasterxml.jackson.core.json.UTF8StreamJsonParser.nextToken(UTF8StreamJsonParser.java:757)\r\n\tat com.fasterxml.jackson.databind.ObjectMapper._readTreeAndClose(ObjectMapper.java:4511)\r\n\tat com.fasterxml.jackson.databind.ObjectMapper.readTree(ObjectMapper.java:2921)\r\n\tat test.steps.FuncionarioSteps.recebo_uma_resposta_válida(FuncionarioSteps.java:63)\r\n\tat ✽.recebo uma resposta válida(file:src/test/resources/features/funcionario_api.feature:9)\r\n",
  "status": "failed"
});
});