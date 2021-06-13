interface IContentProps {
  title: string;
  description: string;
  asset: string;
  reverse: boolean;
}

export const contents: IContentProps[] = [
  {
    title: "Programador Fullstack Javascript",
    description: "Sou desenvolvedor Javascript a 5 anos e trabalho em diversas áreas, como: desenvolvimento de aplicativos, criação de sistemas no lado do servidor além da criação de aplicações web! Tudo isso usando uma única linguagem de programação!",
    asset: '/desk.svg',
    reverse: false,
  },
  {
    title: "Desenvolvedor Mobile",
    description: "Crio aplicativos já tem 3 anos, quando eu descobri o React-Native, que possibilita a criação de apps tanto para Android quanto para Ios usando Javascript! Criado pelo Facebook e mantido pela comunidade, hoje ele é usado por grandes empresas no mercado!",
    asset: '/phone.svg',
    reverse: true,
  },
  {
    title: "Desenvolvedor Back-end",
    description: "Hoje em dia é bem difício falar de Javascript sem falar de NodeJs, que é um runtime que possibilita o uso de javascript no lado do servidor. Atráves dele é possível fazer queries em banco de dados, criar regras de negócio, usar Apis externas e muitas coisas mais!",
    asset: '/server.svg',
    reverse: false,
  },
  {
    title: "Desenvolvedor Web",
    description: "O Javascript surgiu com idéia de ser a linguagem que roda nos Browsers (navegadores), e só depois passou a ser usada nos servidores e em outras áreas. Pois é, eu segui a ordem inversa! Somente no começo do ano de 2021 decidi usá-lo para o que ele foi feito inicialmente. Mas tudo bem; logo logo estaria bem afiado e criando coisas incríveis na web!",
    asset: '/website.svg',
    reverse: true,
  },
]
