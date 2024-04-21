This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

# Documentação

O Pizza Tech é resultado do periodo de aprendizado adiquirido no projeto Ponto para o mercado, elaborado pela Prosper Tech, com o intuito de desenvolver habilidades em React para ajudar profissionais a ingressarem no mercado de trabalho, através de uma trilha de aprendizado é individual e personalizada.

Acesse o projeto através deste link: [tech-pizza.vercel.app](https://tech-pizza.vercel.app/)

## Requisitos do projeto

1. Autenticação e Formulário de Login:
2. Listagem de pizzas
3. Seleção de pizzas
4. Carrinho de compras
5. Finalização do pedido
6. Autenticação com redux
7. Responsividade e Material UI
8. Controle de versão com git
9. Scrum

## Organização de Desenvolvimento

Para o desenvolvimento e organização desse projeto foi feito uma fisão das metodologias agéis scrum e kambam, para uma melhora organização, coletas de dados, e agilidade.
Todos os requisitos foram transformados em hostórias de usuário, onde essas foram descompactadas, transformando-se em micro-tarefas.
Isso resultou em:

- 7 Historias de usuário
- 31 Tarefas
- +40h de desenvolvimento

## Tecnologias utilizadas

- NextJS
- ReactJS
- Javascript
- Typescript
- Redux Toolkit
- Tailwind CSS
- CLSX
- Material UI

## Estutura da Pastas

- **app:** A pasta _app_ é destinada somente para a definição das rotas, que utiliza o padrão app route
- **components:** A pasta components é responsavel por agrupar todos os componetes, do menor ao maior, sendo estruturado no padrão atomic design
- **lib:** A pasta lib é resposável por arquivos utilitários como os dados, modelo de dados, imagens e a pasta **_redux_**, local ondem ficam todos os arquivos responsáveis pela manipulação de estados globais.

## Aplicação de Regras de UX

Afim de criar uma aplicação que proporcione uma boa experiência ao usuário, foram aplicadas algumas tecnicas de UX para essa finalidade.

**Heuristicas de Nielsem**

- **_Visibilidade do status do sistema:_** Utilizada para informar ao usuário onde ele está, e para onde pode ir.

  - Isso está presente no _header_, que exibe em qual pagina ele está e permite a navegação para outras paginas.
  - Quando o pedido é finalizado, o usuário é informado e direcionado para a pagina de pedidos
  - Ao adicionar itens ao carrinho, o usuário pode vizualizar a quantidade de itens através do icone numerico no carrinho presente do header

- **_Controle e liberdade do usuário:_**

  - Permite ao usuário fazer simulações de comprar sem nenhum tipo ed compromisso, podendo adicionar e remover itens do carrinho, e navegar por toda a pagina

- **_Prevenção de erros_**

  - Presente no modal de confirmação do pedido, para evitar que o usuário realize um pedido que não deseja.

**Lei da similaridade**
estabelece que elementos que se parecem (em cor, forma, tamanho ou outra característica) são percebidos como relacionados ou parte do mesmo grupo.

**Lei da região comum**
Esta lei é usada para agrupar informações relacionadas visualmente, ajudando os usuários a processar as telas mais rapidamente.

**Lei da proximidade**
Indica que elementos que estão fisicamente próximos uns dos outros são percebidos como um grupo. Essencial para organizar informações de forma lógica, facilitando a navegação do usuário.

## Observações

Este projeto ainda tem grande capacidade de ser melhorado em diversos quesitos como: **_remoção da estilização em linha_**, arquivos separados para **_funções utilitárias_**, **_componentização de blocos de código do MATERIAL UI_** , e possivelmente algo mais. Mesmo o código estando completamente funcional, ainda pode ser feita uma refatoração, para deixar o código mais organizado e legivel. Essas implementações não foram feitas por questões de tempo do desenvolvedor.
