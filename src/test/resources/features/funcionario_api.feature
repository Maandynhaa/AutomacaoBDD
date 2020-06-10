#language: pt
@api
Funcionalidade: Teste REST api de Funcionário 

Cenário: Adicionar funcionario
Dado defino o ponto de extremidade da API de serviço do funcionario
Quando defino o HEADER
E envio uma solicitaçao HTTP POST 
Entao recebo uma resposta valida

Cenário: buscar funcionario
Dado defino o ponto de extremidade da API de serviço do funcionario GET
Quando defino o HEADER
Entao localizo funcionario

Cenário: deletar funcionario
Dado defino o ponto de extremidade da API de serviço do funcionário DELETE
Quando defino o HEADER
Então recebo status valido