console.log("Welcome to Tic Tac Toe")
let music = new Audio("music.mp3")
let turn_m = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")
let turn = "X"
let isgameover = false

// Function Space
function changeTurn()
{
    if(turn ==="X")
    {
        return "0"
    }
    else{
        return "X"
    }
}

function checkWin()
{
    let boxtext = document.getElementsByClassName("box-text")
    // console.log(boxtext)
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== ''))
        {
            document.querySelector(".info").innerText = boxtext[e[0]].innerText + " Won";
            isgameover = true
            gameover.play();
            music.play();
            document.querySelector('.imgbox').getElementsByTagName("img")[0].style.width = '200px';
        }
    })
}







// Main Logic
let boxes = document.getElementsByClassName("box")
Array.from(boxes).forEach(b =>{
    let boxtext = b.querySelector('.box-text')
    b.addEventListener('click',()=>{
        if(boxtext.innerText === '')
        {
            boxtext.innerText = turn;
            turn = changeTurn();
            turn_m.play();
            checkWin();
            if (isgameover == false)
            {
                document.getElementsByClassName('info')[0].innerText = "Turn for " + turn;
            }
        }
    })
})

// Logic For Reset Button:-
let reset = document.getElementById("reset")
reset.addEventListener('click', ()=>{
    
    let boxtext = document.querySelectorAll('.box-text')
    Array.from(boxtext).forEach(e =>{
        e.innerText = " "
        music.pause();
        turn = "X"
        isgameover = false
        document.getElementsByClassName('info')[0].innerText = "Turn for " + turn;
        document.querySelector('.imgbox').getElementsByTagName("img")[0].style.width = '0px';
    })
})
