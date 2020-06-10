$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/cadastro_de_cliente.feature");
formatter.feature({
  "name": "Realizar cadastro de cliente",
  "description": "",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "name": "@mobile"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Cadastro de cliente com sucesso",
  "description": "",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "name": "que esteja na tela de início",
  "keyword": "Dado "
});
formatter.step({
  "name": "informo o dados \u003cnome\u003e,\u003crg\u003e,\u003ccpf\u003e,\u003cdata_nasci\u003e,\u003crua\u003e ,\u003cnumero\u003e,\u003cbairro\u003e,\u003ccep\u003e,\u003ccidade\u003e,\u003ctelefone\u003e,\u003cemail\u003e",
  "keyword": "Quando "
});
formatter.step({
  "name": "seleciono salvar",
  "keyword": "E "
});
formatter.step({
  "name": "retorna msg de sucesso",
  "keyword": "Então "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Exemplos",
  "rows": [
    {
      "cells": [
        "nome",
        "rg",
        "cpf",
        "data_nasci",
        "rua",
        "numero",
        "bairro",
        "cep",
        "cidade",
        "telefone",
        "email"
      ]
    },
    {
      "cells": [
        "\"Amanda Teste\"",
        "\"12123425-2\"",
        "\"2719140-9\"",
        "\"01/01/2000\"",
        "\"Rua Doze\"",
        "\"123\"",
        "\"Capixaba\"",
        "\"69922-000\"",
        "\"Acre\"",
        "\"112554-7474\"",
        "\"amanda@teste.com\""
      ]
    }
  ]
});
formatter.scenario({
  "name": "Cadastro de cliente com sucesso",
  "description": "",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "name": "@mobile"
    }
  ]
});
formatter.before({
  "status": "passed"
});
