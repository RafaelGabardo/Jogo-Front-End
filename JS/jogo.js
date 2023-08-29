const map = [
    [9, 0, 1, 0, 2, 0, 0, 0, 5, 4],
    [0, 1, 0, 0, 5, 0, 0, 5, 0, 0],
    [0, 0, 0, 3, 0, 4, 0, 0, 0, 0],
    [1, 0, 0, 0, 7, 0, 4, 0, 0, 0],
    [0, 2, 0, 0, 2, 0, 0, 0, 3, 0],
    [5, 0, 0, 4, 0, 0, 3, 0, 0, 0],
    [0, 0, 3, 0, 0, 0, 0, 0, 5, 10]
];

let life;

const inventory = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
];

function shuffle() {
    for (let i = 0; i < 1000; i++) {
        i1 = Math.floor(Math.random() * 7);
        j1 = Math.floor(Math.random() * 10);
        i2 = Math.floor(Math.random() * 7);
        j2 = Math.floor(Math.random() * 10);

        let temp = map[i1][j1];
        map[i1][j1] = map[i2][j2];
        map[i2][j2] = temp;  
    }
}