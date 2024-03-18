const rock = document.querySelector('.rockBtn').addEventListener('click', firstFunc)
const paper = document.querySelector('.paperBtn').addEventListener('click', secondFunc)
const scissors = document.querySelector('.scissorBtn').addEventListener('click', thirdFunc)
const score = document.querySelector('.scores')
const resultWord = document.querySelector('.result-word')
const displayMoves = document.querySelector('.display-moves')
const resetBtn = document.querySelector('.reset-scores').addEventListener('click', resetFunc)
const autoPlay = document.querySelector('.auto-play').addEventListener('click', autoPlayFunc)


// let wins= 0;
// let losses= 0;
// let ties= 0;


let scoresTrack = JSON.parse(localStorage.getItem("scoresTrack")) || {
    wins: 0,
    losses: 0,
    ties: 0
};

// if(!scoresTrack){
//     scoresTrack = {
//         wins: 0,
//         losses: 0,
//         ties: 0
//     }
// }

JSON.parse(localStorage.getItem("scoresTrack"))

function firstFunc(){
    playGame('✊')
}
function secondFunc(){
    playGame('🖐️')
}
function thirdFunc(){
    playGame('✌️')
}
function displayScores(){
    return score.textContent =`Wins: ${scoresTrack.wins}, Losses: ${scoresTrack.losses}, Ties: ${scoresTrack.ties}`
}

function pickComputerMoves(){
    const randomNumber = Math.random()
    let computerMove;
    if(randomNumber>=0 && randomNumber<1/3){
        computerMove = '✊';
    }else if(randomNumber>=1/3 && randomNumber<2/3){
        computerMove = '🖐️';
    }else{
        computerMove = '✌️';
    }
    return computerMove;
}

let isAutoPlaying = false
let IntervalId;
function autoPlayFunc(){
    if(!isAutoPlaying){
        IntervalId = setInterval(function() {
        const playerMov = pickComputerMoves()
        playGame(playerMov)
        }, 1000);
        isAutoPlaying = true
    }else{
        clearInterval(IntervalId)
        isAutoPlaying = false
        autoPlay.inner
    }
    
}




function playGame(playerMove){
    const computerMove = pickComputerMoves();
    let result;
    if (playerMove === '✌️') {
        if(computerMove === '✊'){
            result = 'You Win'
            scoresTrack.wins++
        }else if(computerMove === '🖐️'){
            result = 'You Lose'
            scoresTrack.losses++
        }else if(computerMove === '✌️'){
            result = 'Tie'
            scoresTrack.ties++
        }
    } else if (playerMove === '🖐️'){
        if(computerMove === '✊'){
            result = 'You Win'
            scoresTrack.wins++
        }else if(computerMove === '🖐️'){
            result = 'Tie'
            scoresTrack.ties++
        }else if(computerMove === '✌️'){
            result = 'You Lose'
            scoresTrack.losses++
        }
    } else if (playerMove === '✊'){
        if(computerMove === '✊'){
            result = 'Tie' 
            scoresTrack.ties++
        }else if(computerMove === '🖐️'){
            result = 'You Lose'
            scoresTrack.losses++
        }else if(computerMove === '✌️'){
            result = 'You Win'
            scoresTrack.wins++
        }

        localStorage.setItem("scoresTrack", JSON.stringify(scoresTrack))

    }
    resultWord.textContent = `${result}`
    resultWord.style.fontWeight = "bolder"
    resultWord.style.color = 'grey'
    resultWord.style.fontSize = '30px'
    displayMoves.textContent =`You: ${playerMove} | Computer:${computerMove}`
    score.textContent =`Wins: ${scoresTrack.wins}, Losses: ${scoresTrack.losses}, Ties: ${scoresTrack.ties}`
}

function resetFunc(){
    // resultWord.textContent = "Play"
    displayMoves.textContent ="Click any of the image above to begin"
    scoresTrack.wins=0
    scoresTrack.losses=0
    scoresTrack.ties=0
    localStorage.removeItem("scoresTrack")
    displayScores()
}
