#Pokédex TypeScript Lite

##Descrição do projeto
Esse projeto em TypeScript realiza consulta a uma API JSON. Recebe os dados da API e
permite manipular os mesmos. Para manipularos dados utiliza métodos de array. Possui 
um repositório local, com memória temporária de execução.

##Objetivo
O objetivo do projeto é demonstrar a utilização do **MVC**, com a linguagem **TypeScript** 
e execução do programa em **Node**.

##Tecnologias utilizadas
*TypeScript
*MVC
*node modules
*métodos de array

##Pré-requisitos
*Acesso a internet e ao repositório online
*Ter espaço interno na máquina para clonar o repositório
*Possuir um terminal para execução

##Como instalar
1.Abrir o terminal
2.Digitar `git init`
3.Digitar `git clone https://github.com/alessandra-basso/Pokedex-TypeScript-Lite.git`
4.Instalar o módulo TypeScript `npm install -g typescript`
5.Instalar o módulo tsx `npm install -D tsx`

##Como executar
Executar o programa digitando `npm run dev` no terminal.

##Funcionalidades
*Adicionar Pokémon ao catálogo
*Buscar Pokémon e mostrar dados do mesmo
*Listar catálogo
*Remover Pokémon do catálogo

##Exemplos de execução
###Busca Válida

####Entrada testada:
pikachu

####Saída esperada:
```[OK] Pokémon encontrado: pikachu
#25 - pikachu | Tipos: electric | Altura: 4 | Peso: 60```

###Busca Inválida:

####Entrada testada:
pokemon-inexistente

####Saída esperada:
`[ERRO] Pokémon não encontrado.`

###Duplicidade

####Entrada testada:
adicionar pikachu duas vezes.

####Saída esperada:
`[AVISO] pikachu já está no catálogo.`

###Remoção

####Entrada testada:
remover ID 25

####Saída esperada:
`[OK] Pokémon removido do catálogo.`

##Breve explicação dos arquivos
***README.md:** Documentação do programa.
***package.json:** Arquivo de configuração do node.js.
***package-lock.json:** Arquivo de configuração do objeto JSON.
***pc_box.josn:** Banco de dados local, para armazenar o catálogo durante a execução 
do programa.
***tsconfig.josn:** Arquivo de 
***.gitignore:** Determina os arquivos que o git deve ignorar no repositório, 
como arquivos de módulos de execução.
***main.ts:** Arquivo de teste do programa.
***textFormatters.ts:** Contém funções e métodos de ajustes de texto final.
***BoxService.ts:** Contém a função de adicionar ao catálogo.
***PokeApiService.ts:** Contém as funções de buscar Pokémon, listar catálogo e remover do catálogo.
***PokemonRepositorie.ts:** Trata como o programa vai interagir com o catálogo local.
***pokemon.ts:** Contém as interfaces utilizadas no programa.
***CustomErrors.ts:** Contém o formato em que os erros serão apresentados.
***TerminalController.ts:** 

##Link do Kanban utilizado na construção do projeto
[Kanban projeto Pokédex TypeScript Lite](https://github.com/users/alessandra-basso/projects/1)

##Branches utilizadas
*main
*develop
*feat/pokedex
*docs/readme
