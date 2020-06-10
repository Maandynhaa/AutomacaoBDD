#language: pt
@mobile
Funcionalidade: Realizar exportação de dados
 -exportar excel 
 -backup completo
 -restaurar backup
 
Contexto:
	Dado que esteja na tela de exportar dados

 Esquema do Cenário: exportação com sucesso
 	Quando seleciono <botao>
	Entao retorna <msg> de sucesso
 
 Exemplos:
|botao         |msg        |               
|"btnExportar" |"Perfeito" |
|"btnBackup"   |"Perfeito!"|
|"btnRestaurar"|"Perfeito!"|