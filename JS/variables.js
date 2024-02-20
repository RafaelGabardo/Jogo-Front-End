const map = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [6, 9, 1, 1, 1, 3, 1, 1, 1, 1, 0],
    [0, 0, 0, 2, 0, 5, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0],
    [0, 1, 4, 0, 0, 0, 0, 0, 2, 5, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 7, 8],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

const hero = {
    name: 'Rafael',
    life: 100,
    atk: 1,
    def: 0,
    inventory: {
        heal: 2,
        weapon: null,
        armor: null,
        torch: 1
    }
}

const images = {
    begin: '../Imagens/imagem-floresta-inicio.jpeg',
    entrance: '../Imagens/imagem-entrada-caverna.jpg',
    corridor: '../Imagens/imagem-corredor-caverna.jpg',
    armor: '../Imagens/imagem-armadura.jpg',
    weapon: '../Imagens/imagem-area-aberta-caverna.jpg',
    monster: '../Imagens/imagem-monstro-caverna.jpg',
    boss: '../Imagens/imagem-boss-caverna.jpg',
    friends: '../Imagens/imagem-final-caverna.jpg'
}

x = 0;
y = 1;