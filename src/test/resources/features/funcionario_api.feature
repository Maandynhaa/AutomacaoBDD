#language: pt

Funcionalidade: Teste REST api de Funcionário 
@api
Cenário: Adicionar funcionário
Dado defino o ponto de extremidade da API de serviço do funcionário
Quando defino o HEADER
E envio uma solicitaçao HTTP POST 
Então recebo uma resposta válida

Cenário: buscar funcionário
Dado defino o ponto de extremidade da API de serviço do funcionário GET
Quando defino o HEADER
Então localizo funcionário

Cenário: deletar funcionário
Dado defino o ponto de extremidade da API de serviço do funcionário DELETE
Quando defino o HEADER
Então recebo status válido