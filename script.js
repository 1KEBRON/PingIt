'use strict';

// Selecting elements 
const player0E = document.querySelector('.player--0');
const player1E = document.querySelector('.player--1');

const score0E = document.querySelector('#score--0')
const score1E = document.querySelector('#score--1');

const currentScore0E = document.querySelector('#current--0');
const currentScore1E = document.querySelector('#current--1');

const diceE = document.querySelector('.dice')
const rollDiceBtn = document.querySelector('.btn--roll');
const restartBtn = document.querySelector('.btn--new');
const holdDiceBtn = document.querySelector('.btn--hold');

// starting conditions
let scores = [0,0]
score0E.textContent = 0;
score1E.textContent = 0;
let currentScore = 0;
let activePlayer = 0
diceE.classList.add('hidden');

//switch Players
const switchPlayer = ()=>{
      document.querySelector(`#current--${activePlayer}`).textContent = 0;
      currentScore = 0;
      activePlayer = activePlayer === 0 ? 1 : 0;
      player0E.classList.toggle('player--active');
      player1E.classList.toggle('player--active');
}

const handleDiceRoll = ()=>{
      // 1. random dice roll 
      const randomDice = Math.trunc(Math.random() * 6) + 1;
      // 2. display dice 
      diceE.classList.remove('hidden');
      diceE.src = `/dice-${randomDice}.png`
      
      // 3. if dice == 1 
      if(randomDice !== 1 ){
            currentScore += randomDice
            document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
      }//switch players
      else{
           switchPlayer();
      }

}

const handleHoldDice = () => {
      // 1. add currentScore to totalScore
      scores[activePlayer] += currentScore
      document.querySelector(`#score--${activePlayer}`).textContent = scores[activePlayer]
      // 2. if(score !>= 100)
      if(scores[activePlayer] >= 100 ){
           // game finished active player wins
            document.querySelector(`.player--${activePlayer}`)
              .classList.add('player--winner');
            document
              .querySelector(`.player--${activePlayer}`)
              .classList.remove('player--active');
            document.querySelector(`#name--${activePlayer}`).textContent = ` The Player ${activePlayer +1 } Won!!`
            holdDiceBtn.classList.add('hidden')
            rollDiceBtn.classList.add('hidden');

      }// else -> switch player 
      else{
            switchPlayer()
      }
            
}
const handleRestart = () =>{

}

rollDiceBtn.addEventListener('click',handleDiceRoll)
holdDiceBtn.addEventListener('click',handleHoldDice)
restartBtn.addEventListener('click', handleRestart)