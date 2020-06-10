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
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que esteja na tela de início",
  "keyword": "Dado "
});
formatter.match({
  "location": "CadastroClienteSteps.que_esteja_na_tela_de_início()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informo o dados \"Amanda Teste\",\"12123425-2\",\"2719140-9\",\"01/01/2000\",\"Rua Doze\" ,\"123\",\"Capixaba\",\"69922-000\",\"Acre\",\"112554-7474\",\"amanda@teste.com\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "CadastroClienteSteps.informo_o_dados(String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seleciono salvar",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroClienteSteps.seleciono_salvar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "retorna msg de sucesso",
  "keyword": "Então "
});
formatter.match({
  "location": "CadastroClienteSteps.retorna_msg_de_sucesso()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/exportar_dados.feature");
formatter.feature({
  "name": "Realizar exportação de dados",
  "description": " -exportar excel \n -backup completo\n -restaurar backup",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "name": "@mobile"
    }
  ]
});
formatter.scenarioOutline({
  "name": "exportação com sucesso",
  "description": "",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "name": "seleciono \u003cbotao\u003e",
  "keyword": "Quando "
});
formatter.step({
  "name": "retorna \u003cmsg\u003e de exportação com sucesso",
  "keyword": "Então "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Exemplos",
  "rows": [
    {
      "cells": [
        "botao",
        "msg"
      ]
    },
    {
      "cells": [
        "\"btnExportar\"",
        "\"Perfeito\""
      ]
    },
    {
      "cells": [
        "\"btnBackup\"",
        "\"Perfeito!\""
      ]
    },
    {
      "cells": [
        "\"btnRestaurar\"",
        "\"Perfeito!\""
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que esteja na tela de exportar dados",
  "keyword": "Dado "
});
formatter.match({
  "location": "ExportarDadosSteps.que_esteja_na_tela_de_exportar_dados()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "exportação com sucesso",
  "description": "",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "name": "@mobile"
    }
  ]
});
formatter.step({
  "name": "seleciono \"btnExportar\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "ExportarDadosSteps.seleciono(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "retorna \"Perfeito\" de exportação com sucesso",
  "keyword": "Então "
});
formatter.match({
  "location": "ExportarDadosSteps.retorna_de_exportação_com_sucesso(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que esteja na tela de exportar dados",
  "keyword": "Dado "
});
formatter.match({
  "location": "ExportarDadosSteps.que_esteja_na_tela_de_exportar_dados()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "exportação com sucesso",
  "description": "",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "name": "@mobile"
    }
  ]
});
formatter.step({
  "name": "seleciono \"btnBackup\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "ExportarDadosSteps.seleciono(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "retorna \"Perfeito!\" de exportação com sucesso",
  "keyword": "Então "
});
formatter.match({
  "location": "ExportarDadosSteps.retorna_de_exportação_com_sucesso(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que esteja na tela de exportar dados",
  "keyword": "Dado "
});
formatter.match({
  "location": "ExportarDadosSteps.que_esteja_na_tela_de_exportar_dados()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "exportação com sucesso",
  "description": "",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "name": "@mobile"
    }
  ]
});
formatter.step({
  "name": "seleciono \"btnRestaurar\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "ExportarDadosSteps.seleciono(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "retorna \"Perfeito!\" de exportação com sucesso",
  "keyword": "Então "
});
formatter.match({
  "location": "ExportarDadosSteps.retorna_de_exportação_com_sucesso(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});