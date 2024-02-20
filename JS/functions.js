function whereTo() {
    switch (map[x][y]) {
        case 0:
            alert('Isso é uma parede, seu cego!')
            break;
        case 1:
            alert('Você segue por um corredor!')
            break;
        case 2:
            alert('Você se depara com uma arma, você a pega?');
            break;
        case 3:
            alert('Você se depara com uma armadura, você a pega?');
            break;
        case 4:
            alert('Você se depara com um item, você o pega?');
            break;
        case 5:
            alert('Você se depara com um montro, ele vai te atacar!');
            break;
        case 6:
            alert('Você vê vestígios de uma caverna à frente, o que ocê faz?');
            break;
        case 7:
            alert('Você vê um monstro enorme te esperando, é aqui que você continua ou morre!');
            break;
        case 8:
            alert('É isso, venceu!');
            break;
        default:
            alert('É uma caverna mesmo, você entra?');
            break;
    }
}

function changeImage() {
    switch (map[x][y]) {
        case 0:
            break;
        case 1:
            document.getElementById('image').src = images.corridor;
            break;
        case 2:
            document.getElementById('image').src = images.weapon;
            break;
        case 3:
            document.getElementById('image').src = images.armor;
            break;
        case 4:
            document.getElementById('image').src = images.weapon;
            break;
        case 5:
            document.getElementById('image').src = images.monster;
            break;
        case 6:
            document.getElementById('image').src = images.begin;
            break;
        case 7 :
            document.getElementById('image').src = images.boss;
            break;
        case 8:
            document.getElementById('image').src = images.friends;
            break;
        default:
            document.getElementById('image').src = images.entrance;
            break;
    }
}

function upOnClick() {
    whereTo();
    changeImage();
}

function leftOnClick() {
    whereTo();
    changeImage();
}

function rightOnClick() {
    whereTo();
    changeImage();
}

function downOnClick() {
    whereTo();
    changeImage();
}