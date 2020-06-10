#language: pt
@web
Funcionalidade: Login My Store

Como um usuário 
Gostaria de efeturar login
Para que eu possa acessar minha conta

Cenário: Deve faze login com sucesso
Dado que desejo efetuar login
Quando informo o usuário "amanda_amy12@hotmail.com"
E a senha "teste12"
E seleciono entrar
Então visualizo a mensagem "Welcome to your account. Here you can manage all of your personal information and orders."

Cenário: Deve fazer login dados inválidos
Dado que desejo efetuar login
Quando informo o usuário "teste@teste.com"
E a senha "teste"
E seleciono entrar
Então visualizo o erro "Authentication failed."

Cenário: Deve fazer login dados em branco
Dado que desejo efetuar login
Quando informo o usuário ""
E a senha ""
E seleciono entrar
Então visualizo o erro "An email address required."

