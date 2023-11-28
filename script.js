'use strict';
// const randomNumber = Math.trunc(Math.random()*20)+1;
// document.querySelector('.number').textContent = randomNumber;


// const number = document.querySelector('.number').value;
let secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20;
let highscore = 0;

const displayMessage = function(message){
    document.querySelector('.message').innerText=message;
   
}

document.querySelector('.check').addEventListener('click',function (){

    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);

    if(!guess){
        displayMessage('⛔No number');
    }
    else if(guess===secretNumber){
        displayMessage('🍾 Correct Answer');
        // document.querySelector('.score').textContent=score;
        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = '#60b347';  
        document.querySelector('.number').style.width = '25rem';
        if(score >highscore){
            highscore = score;
            document.querySelector('.highscore').innerText = highscore;
        }
    }
    else if(guess!==secretNumber){
        if(score>1){
            // document.querySelector('.message').innerText=guess>secretNumber?'💹Too High':'📉Too Low';
            displayMessage(guess>secretNumber?'💹Too High':'📉Too Low');
            score--;
            document.querySelector('.score').textContent=score;
        }else{
            document.querySelector('body').style.backgroundColor = '#da4d4d';  
            displayMessage('💥 You lost the game!');
            // document.querySelector('.message').textContent = '💥 You lost the game!';
            document.querySelector('.score').textContent = 0;
        }
    }
   
})


document.querySelector('.again').addEventListener('click',function (){
    score = 20;
    secretNumber = Math.trunc(Math.random()*20)+1;
    document.querySelector('.score').innerText = score;
    document.querySelector('.number').innerText = '?';
    // document.querySelector('.message').innerText = 'Start guessing...';
    displayMessage('Start guessing...');
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';  
        document.querySelector('.number').style.width = '15rem';
})
