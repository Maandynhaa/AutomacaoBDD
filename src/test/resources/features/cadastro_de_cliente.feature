#language: pt
@mobile
Funcionalidade: Realizar cadastro de cliente

 Esquema do Cenario: Cadastro de cliente com sucesso
 Dado que esteja na tela de inicio
 Quando informo o dados <nome>,<rg>,<cpf>,<data_nasci>,<rua> ,<numero>,<bairro>,<cep>,<cidade>,<telefone>,<email>
 E seleciono salvar
 Entao retorna msg de sucesso
 
 Exemplos:
|nome          |rg          |cpf        |data_nasci  |rua       |numero|bairro    |cep        |cidade|telefone     |email             |                 
|"Amanda Teste"|"12123425-2"|"2719140-9"|"01/01/2000"|"Rua Doze"|"123" |"Capixaba"|"69922-000"|"Acre"|"112554-7474"|"amanda@teste.com"|