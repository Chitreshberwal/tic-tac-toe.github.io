console.log("Welcome to my game");
let turn="X"
let gameOver=false;

//function to change the turn
const changeTurn = ()=>{
    return turn === "X"?"O": "X"
}

//function to check win
const checkWin = ()=>{
    let boxtext=document.getElementsByClassName('boxtext');
    let wins= [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach(e => {
        if( (boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[1]].innerText === boxtext[e[2]].innerText) && boxtext[e[0]].innerText !==""){
            document.querySelector('.Info').innerText = boxtext[e[0]].innerText + " Won"
            gameOver=true;
        }
    })
}

// Game Logic

let boxes= document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext=element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText=turn;
            turn=changeTurn();
            checkWin();

            if(!gameOver){
                document.getElementsByClassName("Info")[0].innerText = "Turn for : "+turn;
            }  
        }
    })
});

//add event listener for rest of game
reset.addEventListener('click', ()=>{
    let boxtext=document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element =>{
        element.innerText=""
    });
    turn ="X";
    gameOver=false;
    document.getElementsByClassName("Info")[0].innerText ="Turn for : "+turn ;
})