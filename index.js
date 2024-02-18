const rock = document.querySelector('.rockBtn').addEventListener('click', firstFunc)
const paper = document.querySelector('.paperBtn').addEventListener('click', secondFunc)
const scissors = document.querySelector('.scissorBtn').addEventListener('click', thirdFunc)
const score = document.querySelector('.scores')
const resultWord = document.querySelector('.result-word')
const displayMoves = document.querySelector('.display-moves')
const resetBtn = document.querySelector('.reset-scores').addEventListener('click', resetFunc)

let wins= 0;
let losses= 0;
let ties= 0;

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
    return score.textContent =`Wins: ${wins}, Losses: ${losses}, Ties: ${ties}`
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

function playGame(playerMove){
    const computerMove = pickComputerMoves();
    let result;
    if (playerMove === '✌️') {
        if(computerMove === '✊'){
        result = 'You Win'
        wins++
        }else if(computerMove === '🖐️'){
            result = 'You Lose'
            losses++
        }else if(computerMove === '✌️'){
            result = 'Tie'
            ties++
        }
    } else if (playerMove === '🖐️'){
        if(computerMove === '✊'){
            result = 'You Win'
            wins++
        }else if(computerMove === '🖐️'){
            result = 'Tie'
            ties++
        }else if(computerMove === '✌️'){
            result = 'You Lose'
            losses++
        }
    } else if (playerMove === '✊'){
        if(computerMove === '✊'){
            result = 'Tie'
            ties++
        }else if(computerMove === '🖐️'){
            result = 'You Lose'
            losses++
        }else if(computerMove === '✌️'){
            result = 'You Win'
            wins++
        }
    }
    resultWord.textContent = `${result}`
    displayMoves.textContent =`You: ${playerMove} | Computer:${computerMove}`
    score.textContent =`Wins: ${wins}, Losses: ${losses}, Ties: ${ties}`
}

function resetFunc(){
    displayMoves.textContent ="Click any of the image above to begin"
    wins=0
    losses=0
    ties=0
    displayScores()
}
