#language: pt
@api
Funcionalidade: Teste REST api de Funcionário 

Cenário: Adicionar funcionario
Dado defino o ponto de extremidade da API de servico do funcionario
Quando defino o HEADER
E envio uma solicitacao HTTP POST 
Entao recebo uma resposta valida

Cenário: buscar funcionario
Dado defino o ponto de extremidade da API de servico do funcionario GET
Quando defino o HEADER
Entao localizo funcionario

Cenário: deletar funcionario
Dado defino o ponto de extremidade da API de servico do funcionario DELETE
Quando defino o HEADER
Então recebo status valido