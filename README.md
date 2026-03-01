--Projeto iniciante Spring Boot + Angular com H2 DataBase--

	--Tecnologias Utilizadas--

Backend: Java 21, Spring Boot, Spring Data JPA, Banco de Dados em memória (H2 DataBase), Lombok, Maven.
link lackend: https://github.com/Flaynux/Backend-SpringComAngular-H2DataBase.git

Frontend: Angular 17+, TypeScript, HTML5.
Link frontend: https://github.com/Flaynux/FrontEnd-SpringComAngular-H2DataBase.git

	--Pré-requisitos--
-Java JDK21
-Node.js
-Angular CLI
-Git
-IDE (Recomendação: VS CODE)

	--Executar o Projeto--

Observação: Utilize o comando "npm istall" no terminal do projeto para instalar as dependências.

Backend: git clone https://github.com/Flaynux/Backend-SpringComAngular-H2DataBase.git

Frontend: git clone https://github.com/Flaynux/FrontEnd-SpringComAngular-H2DataBase.git

Para iniciar o Backend:
	Rode Run Java: BackendTesteApplication

- O backend estará em http://localhost:8080
- Para acessar o banco de dados o username = admin e password = (deixe em branco).

Para iniciar o Frontend:
	Rode: "ng serve" no terminal.

- O frontend estará em http://localhost:4200

-----------------------------------------------------------------------

		--Endpoints da API--

Como projeto inicial, foi somente implementado os endpoints de GET e POST.

-----------------------------------------------------------------------

		--Estrutura do Banco--

Responsabilizei o backend de criar as tabelas de produto e pessoa física.

Futuramente irei implementar algumas validações para acrescentar dados adicionais a esses objetos.

Relação pessoa produto (Many to Many) foi implementada mas não utilizada.
