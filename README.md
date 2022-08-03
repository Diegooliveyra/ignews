<p align="center">
  <img alt="ig.news" src=".github/cover.png">
</p>

<h1 align="center">
  ig.news
</h1>

### 🧰 Tecnologias

- [ReactJS](https://pt-br.reactjs.org/)
- [NextJS](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Stripe (for payments)](https://stripe.com/br)
- [FaunaDB](https://fauna.com/)
- [NextAuth.js](https://next-auth.js.org/)

### 💻 O projeto

Esse projeto foi desenvolvido durante um dos capitulos do Ignite da Rocketseat! A ideia era desenvolver do um blog pago onde o usuário loga usando o GitHub e paga sua inscrição usando o Stripe. Usuários que não possuem a inscrição, só conseguem ver alguns parágrafos iniciais do post, orefecendo a inscrição logo abaixo.

### 💻 O que tem no projeto?

- Integração com o Prismic CMS, para trabalhar com toda a parte do sistema do blog.
- Integração com o Stripe para a parte dos pagamentos das inscrições.
- Integração com o NextAuth para a parte do login com o Github.
- Sistema de verificação de assinatura, o conteúdo exibido varia entre usuários com/sem assinatura paga.
- Dados são salvos no bando do FaunDb.
- Uso do sistema estático do Next.js, onde os posts são mantidos no cache para um melhor carregamento.

Nessa aplicação, usei as API Routes do Next pra executar as funções serverless e:

- Fazer comunicação com banco de dados (Pois é um ambiente mais seguro)
- Fazer comunicação com [API de pagamentos](https://stripe.com/br)
- Realizar autenticação OAuth com GitHub

#### Uso de uma API de pagamentos

O [Stripe](https://stripe.com/br) foi utilizado pra realizar os pagamentos. Com ele eu pude ter o primeiro contato com o gênero e ter uma bagagem pra utilizar outros serviços parecidos.

#### Primeiro contato com um banco de dados não-relacional

Tive o primeiro contato com um banco de dados não-relacional e pelo que me parece, esse tipo de banco parece funcionar muito bem com funções serverless, já que é bem mais rápido e leve. Nessa aplicação usei o [FaunaDB](https://fauna.com/)

#### OAuth

Um conceito muito legal de aprender foi autenticação usando OAuth, onde eu posso me autenticar usando um serviço de terceiro. Nessa aplicação usei o GitHub. O interessante é que eu ganhei uma bagagem pra utilizar outros serviços desse tipo.

&nbsp;

## ⚙️ Instalação

```
# Abra um terminal e copie este repositório com o comando
$ git clone https://github.com/Diegooliveyra/ignews.git
```

```
# Acesse a pasta da aplicação
$ cd ignews

# Crie um arquivo .env.local e coloque as variaveis
# de ambiente baseado no arquivo .env.example que
# se encontra na pasta moveit

# Instale as dependências
$ yarn

# Inicie a aplicação
$ yarn start

```

&nbsp;
