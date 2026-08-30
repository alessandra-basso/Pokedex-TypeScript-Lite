# Pokédex TypeScript Lite

## Descrição do projeto
Esse projeto em TypeScript realiza consulta a uma API JSON. Recebe os dados da API e
permite manipular os mesmos. Para manipularos dados utiliza métodos de array. Possui 
um repositório local, com memória temporária de execução.

## Objetivo
O objetivo do projeto é demonstrar a utilização do **MVC**, com a linguagem **TypeScript** 
e execução do programa em **Node**.

## Tecnologias utilizadas
* TypeScript
* MVC
* node modules
* métodos de array

## Pré-requisitos
* Acesso a internet e ao repositório online
* Ter espaço interno na máquina para clonar o repositório
* Possuir um terminal para execução

## Como instalar
1. Abrir o terminal
2. Digitar `git init`
3. Clonar o repositório
    3.1. Digitar `git clone https://github.com/alessandra-basso/Pokedex-TypeScript-Lite.git`

4. Acessar a pasta do projeto:
    `cd Pokedex-TypeScript-Lite`

5. Instale as dependências:
    5.1. Instalar o módulo TypeScript `npm install -g typescript`
    5.2. Instalar o módulo tsx `npm install -D tsx`

## Como executar
Executar o programa digitando `npm run dev` no terminal.

## Funcionalidades
* Buscar Pokémon por Id ou nome e mostrar dados do mesmo
* Tratar erro de Pokémon inexistente
* Adicionar Pokémon ao catálogo
* Impedir Pokémon duplicado
* Remover Pokémon por Id
* Listar catálogo

## Exemplos de execução
### Busca Válida

#### Entrada testada:
pikachu

#### Saída esperada:
``[OK] Pokémon encontrado: pikachu
#25 - pikachu | Tipos: electric | Altura: 4 | Peso: 60``

### Busca Inválida:

#### Entrada testada:
pokemon-inexistente

#### Saída esperada:
`[ERRO] Pokémon não encontrado.`

### Duplicidade

#### Entrada testada:
adicionar pikachu duas vezes.

#### Saída esperada:
`[AVISO] pikachu já está no catálogo.`

### Remoção

#### Entrada testada:
remover ID 25

#### Saída esperada:
`[OK] Pokémon removido do catálogo.`

## Breve explicação dos arquivos
* **README.md:** Documentação do programa.
* **package.json:** Arquivo de configuração do node.js.
* **package-lock.json:** Arquivo de configuração do objeto JSON.
* **pc_box.josn:** Banco de dados local, para armazenar o catálogo durante a execução 
do programa.
* **tsconfig.josn:** Arquivo de 
* **.gitignore:** Determina os arquivos que o git deve ignorar no repositório, 
como arquivos de módulos de execução.
* **main.ts:** Arquivo de teste do programa.
* **textFormatters.ts:** Contém funções e métodos de ajustes de texto final.
* **BoxService.ts:** Contém a função de adicionar ao catálogo.
* **PokeApiService.ts:** Contém as funções de buscar Pokémon, listar catálogo e remover do catálogo.
* **PokemonRepositorie.ts:** Trata como o programa vai interagir com o catálogo local.
* **pokemon.ts:** Contém as interfaces utilizadas no programa.
* **CustomErrors.ts:** Contém o formato em que os erros serão apresentados.

## Conceitos aplicados
### TypeScript
Utilizado na construção de interfaces de objetos de retorno, na tipagem dos parâmetros das funções e 
na tipagem dos retornos de funções.

### Interface PokemonResumo
Criada para representar os dados do catálogo local, de forma resumida e simplificada.

### Fetch e async/await
Com fetch, a aplicação busca informações no diretório passado para consulta.
Async identifica as funções assíncronas, que ocorrem enquanto o programa continua executando o restante. 
Await diz para a função esperar o retorno da API, para depois devolver o resultado.

### Tratamento de erros
O erro de Pokémon inexistente retorna uma mensagem de erro por parte do cliente.
Já o erro de busca retorna uma mensagem de erro por parte do servidor.

### Métodos de array
* Utilizado método .map para buscar se o pokemon existe, na função de buscar e na função de remover o Pokémon.
* Utilizado método .forEach para listar cada um dos Pokémons do catálogo.
* Utilizado método .filter para filtrar os ids de Pokémons e criar um array apenas com ids diferentes do informado.

## Link do Kanban utilizado na construção do projeto
[Kanban projeto Pokédex TypeScript Lite](https://github.com/users/alessandra-basso/projects/1)

## Branches utilizadas
* main
* develop
* feat/pokedex
* docs/readme
