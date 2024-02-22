function changeImage() {
    switch (map[x][y]) {
        case 0:
            alert('Isso é uma parede, seu cego!')
            break;
        case 1:
            alert('Você segue por um corredor!')
            document.getElementById('image').src = images.corridor;
            break;
        case 2:
            alert('Você se depara com uma arma, você a pega?');
            document.getElementById('image').src = images.weapon;
            break;
        case 3:
            alert('Você se depara com uma armadura, você a pega?');
            document.getElementById('image').src = images.armor;
            break;
        case 4:
            alert('Você se depara com um item, você o pega?');
            document.getElementById('image').src = images.weapon;
            break;
        case 5:
            alert('Você se depara com um montro, ele vai te atacar!');
            document.getElementById('image').src = images.monster;
            break;
        case 6:
            alert('Você vê vestígios de uma caverna à frente, o que ocê faz?');
            document.getElementById('image').src = images.begin;
            break;
        case 7:
            alert('Você vê um monstro enorme te esperando, é aqui que você continua ou morre!');
            document.getElementById('image').src = images.boss;
            break;
        case 8:
            alert('É isso, venceu!');
            document.getElementById('image').src = images.friends;
            break;
        default:
            alert('É uma caverna mesmo, você entra?');
            document.getElementById('image').src = images.entrance;
            break;
    }
}

function moveMap(newX, newY) {
    let newPosX = x + newX;
    let newPosY = y + newY;

    if(newPosX >= 0 && newPosX < map[0].length && newPosY >= 0 && newPosY < map.length && map[newPosX][newPosY] === 0) {
        x = newPosX;
        y = newPosY;
    }

    changeImage();
}

function upOnClick() {
    moveMap(-1, 0);
}

function leftOnClick() {
    moveMap(0, -1);
}

function rightOnClick() {
    moveMap(0, 1);
}

function downOnClick() {
    moveMap(1, 0);
}