const newGameBtnE = document.querySelector(`#newGame`);

const topLeftBtnE = document.querySelector(`.left .top button`);
const middleLeftBtnE = document.querySelector(`.left .middle button`);
const bottomLeftBtnE = document.querySelector(`.left .bottom button`);

const topMiddleBtnE = document.querySelector(`.middle .top button`);
const middleMiddleBtnE = document.querySelector(`.middle .middle button`);
const bottomMiddleBtnE = document.querySelector(`.middle .bottom button`);

const topmRightBtnE = document.querySelector(`.right .top button`);
const middleRightBtnE = document.querySelector(`.right .middle button`);
const bottomRightBtnE = document.querySelector(`.right .bottom button`);

let board = [
  [topLeftBtnE, topMiddleBtnE, topmRightBtnE],
  [middleLeftBtnE, middleMiddleBtnE, middleRightBtnE],
  [bottomLeftBtnE, bottomMiddleBtnE, bottomRightBtnE],
];   
newGameBtnE.addEventListener("click", game);
board.forEach(row => {
    row.forEach(btn => {
        btn.addEventListener("click", () => {
            playerMove(btn)
        })
    });
});

function game() {
   clearBoard();
}

function clearBoard(){
    board.forEach(function(row){
        row.forEach(btn => btn.textContent = " ");
    })
}

function playerMove(btn) {
    if(btn.textContent = " "){
        btn.textContent = "X";
        if(canMove()){
            computerMove(); 
        }
    }
}
function computerMove() {
    let moved = false;
    while(!moved){
        let randomRow = Math.floor((Math.random() * 3));
        let randomColumn = Math.floor(Math.random() * 3);
        if(board[randomRow][randomColumn].textContent === " "){
            board[randomRow][randomColumn].textContent = "O";
            moved = true;
        }
    }
}
function canMove() {
    for(let row of board){
        for(let btn of row){
            if(btn.textContent === " "){return true;}
        }
    }
    return false;
}