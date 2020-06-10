#language: pt
@web
Funcionalidade: Login My Store

Como um usuário 
Gostaria de efeturar login
Para que eu possa acessar minha conta

Cenário: Deve faze login com sucesso
Dado que desejo efetuar login
Quando informo o usuario "amanda_amy12@hotmail.com"
E a senha "teste12"
E seleciono entrar
Entao visualizo a mensagem "Welcome to your account. Here you can manage all of your personal information and orders."

Cenário: Deve fazer login dados invalidos
Dado que desejo efetuar login
Quando informo o usuario "teste@teste.com"
E a senha "teste"
E seleciono entrar
Entao visualizo o erro "Authentication failed."

Cenário: Deve fazer login dados em branco
Dado que desejo efetuar login
Quando informo o usuario ""
E a senha ""
E seleciono entrar
Entao visualizo o erro "An email address required."

