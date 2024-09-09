import pexImg from './Assets/pex.PNG';
import goledgerImg from './Assets/goledger.png';
import gameImg from './Assets/gameMultiplicação.PNG';
import walletImg from './Assets/myWallet.PNG';
import pokedexImg from './Assets/Pokedex.PNG';
import potiguarImg from './Assets/potiguar.PNG';
import shoppingImg from './Assets/shopping.PNG';

export const projectsList = [
  {
    title: 'Instituto Potiguar',
    description: 'O objetivo deste projeto é criar uma landing page impactante e intuitiva para um instituto social e educacional. A landing page foi projetada para comunicar de maneira clara e envolvente os valores, a missão e os serviços oferecidos pelo instituto, destacando seu impacto positivo na comunidade.',
    deploy: 'https://instituto-potiguar-web.vercel.app/',
    git: 'https://github.com/esaumatias/instituto-potiguar-web/tree/main',
    img: potiguarImg,
  },
  {
    title: 'PEX App Web',
    description: 'Este é o aplicativo web da PEX, um marketplace de construção civil que conecta empresas e clientes finais que buscam por produtos e serviços do setor de construção.',
    deploy: 'https://pex-app-mxe0rijp9-esaumatias.vercel.app/',
    git: 'https://github.com/esaumatias/pex-app-web?tab=readme-ov-file',
    img: pexImg
  },
  {
    title: 'GoLedger Challenge',
    description: 'Este projeto possui uma interface web para uma aplicação blockchain. Neste aplicativo é desenvolvido um aplicativo de corrida com o painel do carro e também o painel do motorista.',
    git: 'https://github.com/esaumatias/goledger-challenge-web?tab=readme-ov-file',
    img: goledgerImg
  },
  {
    title: 'My Wallet',
    description: 'Foi desenvolvido um portfólio de controle de despesas de conversores de moeda. Todos os valores são sempre convertidos para reais brasileiros (BRL). Você pode adicionar, editar e excluir uma despesa.',
    deploy: 'https://mywallet-taupe.vercel.app/',
    git: 'https://github.com/esaumatias/myWallet',
    img: walletImg
  },
  {
    title: 'Pokedex',
    description: 'Neste projeto é feita uma requisição à API pokeapi e é renderizada uma tabela com o nome dos 25 primeiros Pokemons. Além disso, é possível filtrar um Pokemon pelo seu nome e tipo e ao clicar nele é direcionado para pagina de detalhes do pokemon. O layout da aplicação foi pensado tanto pra web quanto pra mobile.',
    deploy: 'https://pokedex-woad-beta.vercel.app/',
    git: 'https://github.com/esaumatias/Pokedex',
    img: pokedexImg
  },
  {
    title: 'GAME DA MULTIPLICAÇÃO',
    description: 'Neste projeto é feito um jogo de multiplicação, nele é possível escolher por tres tipos de dIficuldade e no final das questões e direcionado para o feedback de desempenho. O layout da aplicação foi pensado tanto pra web quanto pra mobile.',
    deploy: 'https://multiplication-table-two.vercel.app/game',
    git: 'https://github.com/esaumatias/multiplicationGame?tab=readme-ov-file',
    img: gameImg
  },
  {
    title: 'Shopping Cart',
    description: 'Foi desenvolvido um pagina de venda de produtos, nela é possivel pesquisar por categorias, salvar produtos na pagina de favoritos e adicionar no carrinho de pedidos. Ambas as paginas os produtos estão disponiveis mesmo que a janela do navegador seja fechada e aberta novamente.',
    deploy: 'https://shopping-cart-nine-sage.vercel.app/',
    git: 'https://github.com/esaumatias/ShoppingCart',
    img: shoppingImg
  },
];