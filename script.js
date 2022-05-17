const mainEl = document.querySelector('#main');

//setup field
const rows = 25;
const cols = 80;

let field = [];

for (let r = 0; r < rows; r++){
    let row = [];
    let rowEl = document.createElement('div');
    rowEl.classList.add('row');
    for (let c = 0; c < cols; c++){
        let el = document.createElement('input');
        el.type = 'checkbox';
        el.id = `r${r}c${c}`;
        rowEl.appendChild(el);
        row.push(el);
    }
    mainEl.appendChild(rowEl);
    field.push(row);
}

//chars
const chars = [
    {
        "char": " ",
        "cords": [
            [0,0,0,0],
            [0,0,0,0],
            [0,0,0,0],
            [0,0,0,0],
            [0,0,0,0]
        ]
    },
    {
        "char": "A",
        "cords": [
            [0,1,1,0],
            [1,0,0,1],
            [1,1,1,1],
            [1,0,0,1],
            [1,0,0,1]
        ]
    },
    {
        "char": "B",
        "cords": [
            [1,1,1,0],
            [1,0,0,1],
            [1,1,1,0],
            [1,0,0,1],
            [1,1,1,0]
        ]
    },
    {
        "char": "C",
        "cords": [
            [0,1,1,1],
            [1,0,0,0],
            [1,0,0,0],
            [1,0,0,0],
            [0,1,1,1]
        ]
    },
    {
        "char": "D",
        "cords": [
            [1,1,1,0],
            [1,0,0,1],
            [1,0,0,1],
            [1,0,0,1],
            [1,1,1,0]
        ]
    },
    {
        "char": "E",
        "cords": [
            [1,1,1,1],
            [1,0,0,0],
            [1,1,1,0],
            [1,0,0,0],
            [1,1,1,1]
        ]
    },
    {
        "char": "F",
        "cords": [
            [1,1,1,1],
            [1,0,0,0],
            [1,1,1,0],
            [1,0,0,0],
            [1,0,0,0]
        ]
    },
    {
        "char": "G",
        "cords": [
            [0,1,1,0],
            [1,0,0,0],
            [1,0,1,1],
            [1,0,0,1],
            [0,1,1,0]
        ]
    },
    {
        "char": "H",
        "cords": [
            [1,0,0,1],
            [1,0,0,1],
            [1,1,1,1],
            [1,0,0,1],
            [1,0,0,1]
        ]
    },
    {
        "char": "I",
        "cords": [
            [0,1,0,0],
            [0,1,0,0],
            [0,1,0,0],
            [0,1,0,0],
            [0,1,0,0],
        ]
    },
    {
        "char": "J",
        "cords": [
            [1,1,1,0],
            [0,0,0,1],
            [0,0,0,1],
            [1,0,0,1],
            [0,1,1,0],
        ]
    },
    {
        "char": "K",
        "cords": [
            [1,0,0,1],
            [1,0,1,0],
            [1,1,0,0],
            [1,0,1,0],
            [1,0,0,1]
        ]
    },
    {
        "char": "L",
        "cords": [
            [1,0,0,0],
            [1,0,0,0],
            [1,0,0,0],
            [1,0,0,0],
            [0,1,1,1]
        ]
    },
    {
        "char": "M",
        "cords": [
            [1,0,0,1],
            [1,1,1,1],
            [1,0,0,1],
            [1,0,0,1],
            [1,0,0,1]
        ]
    },
    {
        "char": "N",
        "cords": [
            [1,0,0,1],
            [1,1,0,1],
            [1,0,1,1],
            [1,0,0,1],
            [1,0,0,1]
        ]
    },
    {
        "char": "O",
        "cords": [
            [0,1,1,0],
            [1,0,0,1],
            [1,0,0,1],
            [1,0,0,1],
            [0,1,1,0]
        ]
    },
    {
        "char": "P",
        "cords": [
            [1,1,1,0],
            [1,0,0,1],
            [1,1,1,0],
            [1,0,0,0],
            [1,0,0,0]
        ]
    },
    {
        "char": "Q",
        "cords": [
            [0,1,1,0],
            [1,0,0,1],
            [1,0,1,1],
            [0,1,1,0],
            [0,0,1,0]
        ]
    },
    {
        "char": "R",
        "cords": [
            [1,1,1,0],
            [1,0,0,1],
            [1,1,1,0],
            [1,0,1,0],
            [1,0,0,1]
        ]
    },
    {
        "char": "S",
        "cords": [
            [0,1,1,1],
            [1,0,0,0],
            [0,1,1,0],
            [0,0,0,1],
            [1,1,1,0]
        ]
    },
    {
        "char": "T",
        "cords": [
            [1,1,1,1],
            [0,1,0,0],
            [0,1,0,0],
            [0,1,0,0],
            [0,1,0,0]
        ]
    },
    {
        "char": "U",
        "cords": [
            [1,0,0,1],
            [1,0,0,1],
            [1,0,0,1],
            [1,0,0,1],
            [1,1,1,1]
        ]
    },
    {
        "char": "V",
        "cords": [
            [1,0,0,1],
            [1,0,0,1],
            [1,0,0,1],
            [1,0,0,1],
            [0,1,1,0]
        ]
    },
    {
        "char": "W",
        "cords": [
            [1,0,0,1],
            [1,0,0,1],
            [1,0,0,1],
            [1,1,1,1],
            [1,0,0,1]
        ]
    },
    {
        "char": "X",
        "cords": [
            [1,0,0,1],
            [1,0,0,1],
            [0,1,1,0],
            [1,0,0,1],
            [1,0,0,1]
        ]
    },
    {
        "char": "Y",
        "cords": [
            [1,0,0,1],
            [0,1,1,0],
            [0,1,0,0],
            [0,1,0,0],
            [0,1,0,0]
        ]
    },
    {
        "char": "Z",
        "cords": [
            [1,1,1,1],
            [0,0,0,1],
            [0,1,1,0],
            [1,0,0,0],
            [1,1,1,1]
        ]
    },
    {
        "char": ".",
        "cords": [
            [0,0,0,0],
            [0,0,0,0],
            [0,0,0,0],
            [0,0,0,0],
            [1,0,0,0]
        ]
    },
    {
        "char": ",",
        "cords": [
            [0,0,0,0],
            [0,0,0,0],
            [0,0,0,0],
            [0,1,0,0],
            [1,0,0,0]
        ]
    },
    {
        "char": "!",
        "cords": [
            [0,1,0,0],
            [0,1,0,0],
            [0,1,0,0],
            [0,0,0,0],
            [0,1,0,0]
        ]
    },
    {
        "char": "?",
        "cords": [
            [0,1,1,0],
            [1,0,0,1],
            [0,0,1,0],
            [0,0,0,0],
            [0,0,1,0]
        ]
    },
    {
        "char": "-",
        "cords": [
            [0,0,0,0],
            [0,0,0,0],
            [1,1,1,1],
            [0,0,0,0],
            [0,0,0,0]
        ]
    },
    {
        "char": "_",
        "cords": [
            [0,0,0,0],
            [0,0,0,0],
            [0,0,0,0],
            [0,0,0,0],
            [1,1,1,1]
        ]
    },
    {
        "char": "0",
        "cords": [
            [0,1,1,0],
            [1,0,0,1],
            [1,0,0,1],
            [1,0,0,1],
            [0,1,1,0]
        ]
    },
    {
        "char": "1",
        "cords": [
            [0,0,0,1],
            [0,0,1,1],
            [0,1,0,1],
            [0,0,0,1],
            [0,0,0,1]
        ]
    },
    {
        "char": "2",
        "cords": [
            [0,1,1,0],
            [1,0,0,1],
            [0,0,1,0],
            [0,1,0,0],
            [1,1,1,1]
        ]
    },
    {
        "char": "3",
        "cords": [
            [0,1,1,0],
            [1,0,0,1],
            [0,0,1,0],
            [1,0,0,1],
            [0,1,1,0]
        ]
    },
    {
        "char": "4",
        "cords": [
            [0,0,1,1],
            [0,1,0,1],
            [1,1,1,1],
            [0,0,0,1],
            [0,0,0,1]
        ]
    },
    {
        "char": "5",
        "cords": [
            [1,1,1,1],
            [1,0,0,0],
            [1,1,1,0],
            [0,0,0,1],
            [1,1,1,0]
        ]
    },
    {
        "char": "6",
        "cords": [
            [0,0,1,0],
            [0,1,0,0],
            [1,1,1,0],
            [1,0,0,1],
            [0,1,1,0]
        ]
    },
    {
        "char": "7",
        "cords": [
            [1,1,1,0],
            [0,0,0,1],
            [0,0,1,0],
            [0,1,0,0],
            [1,0,0,0]
        ]
    },
    {
        "char": "8",
        "cords": [
            [0,1,1,0],
            [1,0,0,1],
            [0,1,1,0],
            [1,0,0,1],
            [0,1,1,0]
        ]
    },
    {
        "char": "9",
        "cords": [
            [0,1,1,0],
            [1,0,0,1],
            [0,1,1,1],
            [0,0,0,1],
            [0,1,1,0]
        ]
    },
    {
        "char": "'",
        "cords": [
            [1,0,0,0],
            [1,0,0,0],
            [0,0,0,0],
            [0,0,0,0],
            [0,0,0,0]
        ]
    },
    {
        "char": "´",
        "cords": [
            [1,0,0,0],
            [1,0,0,0],
            [0,0,0,0],
            [0,0,0,0],
            [0,0,0,0]
        ]
    },
    {
        "char": "(",
        "cords": [
            [0,0,1,0],
            [0,1,0,0],
            [0,1,0,0],
            [0,1,0,0],
            [0,0,1,0]
        ]
    },
    {
        "char": ")",
        "cords": [
            [0,1,0,0],
            [0,0,1,0],
            [0,0,1,0],
            [0,0,1,0],
            [0,1,0,0]
        ]
    },
    {
        "char": "Ü",
        "cords": [
            [1,0,0,1],
            [0,0,0,0],
            [1,0,0,1],
            [1,0,0,1],
            [0,1,1,0]
        ]
    },
    {
        "char": "Ö",
        "cords": [
            [1,0,0,1],
            [0,0,0,0],
            [0,1,1,0],
            [1,0,0,1],
            [0,1,1,0]
        ]
    },
    {
        "char": "Ä",
        "cords": [
            [1,0,0,1],
            [0,0,0,0],
            [0,0,1,0],
            [0,1,0,1],
            [0,1,1,0]
        ]
    },
]

const sentence = "Franz jagt, im komplett verwahrlosten Taxi, quer durch Bayern.".split(' ');
let word = 0;

function displaySenctence(){
    sleep(800).then(() => {
        clear();
        displayWord(sentence[word]);

        if (word == sentence.length) return;
        word++;
        displaySenctence();
    });
}

displaySenctence();

function displayWord(textToDisplay){
    const textArray = textToDisplay.toUpperCase().split('');
    console.log(textArray);
    let currentX = 1;
    let currentY = 1;

    for (let char of textArray) {
        const found = chars.find(c => c.char == char);
        if (!found) return;
        let charCords = found.cords;
        let y = currentY;
        for (let row of charCords) {
            let x = currentX;
            for (let field of row){
                if (field == 1){
                    check(x,y);
                }
                x++;
            }
            y++;
        }
        currentX += 5;
        currentY = 1;
    }
}

function clear(){
    for (let row of field){
        for (let checkbox of row){
            checkbox.checked = false;
        }
    }
}

let x = 0;
let y = 0;
let xDir = 1;
let yDir = 2;

//game loop
let counter = 0;
function gameLoop() {
    sleep(100).then(() => {
        uncheck(x,y);
        setCords();
        check(x,y);
        counter++;
        if (counter < 50) gameLoop();
    });
}

function setCords(){
    if (x+xDir > cols) xDir = -1;
    if (x+xDir < 0) xDir = 1;
    if (y+yDir > rows) yDir = -2;
    if (y+yDir < 0) yDir = 2;
    x = x + xDir;
    y = y + yDir;
    console.log(x,y);
}

function check(x, y){
    document.querySelector(`#r${y}c${x}`).checked = true;
}

function uncheck(x,y){
    document.querySelector(`#r${y}c${x}`).checked = false;
}

function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}