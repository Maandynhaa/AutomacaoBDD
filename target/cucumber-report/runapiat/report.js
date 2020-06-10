$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/funcionario_api.feature");
formatter.feature({
  "name": "Teste REST api de Funcionário",
  "description": "",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "name": "@api"
    }
  ]
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
  "status": "passed"
});
formatter.scenario({
  "name": "buscar funcionário",
  "description": "",
  "keyword": "Cenário",
  "tags": [
    {
      "name": "@api"
    }
  ]
});
formatter.step({
  "name": "defino o ponto de extremidade da API de serviço do funcionário GET",
  "keyword": "Dado "
});
formatter.match({
  "location": "FuncionarioSteps.definoOPontoDeExtremidadeDaAPIDeServiçoDoFuncionárioGET()"
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
  "name": "localizo funcionário",
  "keyword": "Então "
});
formatter.match({
  "location": "FuncionarioSteps.localizo_funcionário()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "deletar funcionário",
  "description": "",
  "keyword": "Cenário",
  "tags": [
    {
      "name": "@api"
    }
  ]
});
formatter.step({
  "name": "defino o ponto de extremidade da API de serviço do funcionário DELETE",
  "keyword": "Dado "
});
formatter.match({
  "location": "FuncionarioSteps.definoOPontoDeExtremidadeDaAPIDeServiçoDoFuncionárioDELETE()"
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
  "name": "recebo status válido",
  "keyword": "Então "
});
formatter.match({
  "location": "FuncionarioSteps.receboStatusVálido()"
});
formatter.result({
  "status": "passed"
});
});