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
let score = [0,0]
score0E.textContent = 0;
score1E.textContent = 0;
let currentScore = 0;
let activePlayer = 0
diceE.classList.add('hidden');


const handleDiceRoll = ()=>{
      // 1. random dice roll 
      const randomDice = Math.trunc(Math.random() * 6) + 1;
      // 2. display dice 
      diceE.classList.remove('hidden');
      diceE.src = `/dice-${randomDice}.png`
      console.log(randomDice)
      // 3. if dice == 1 
      if(randomDice !== 1 ){
            currentScore += randomDice
            document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
      }//switch players
      else{
            document.querySelector( `#current--${activePlayer}` ).textContent = 0;
            currentScore = 0
            activePlayer =  activePlayer === 0 ? 1 : 0
            player0E.classList.toggle('player--active');
            player1E.classList.toggle('player--active')
      }

}
rollDiceBtn.addEventListener('click',handleDiceRoll)
/*
1. Roll dice and display it
 - random dice roll
      - random number between 1-6
      - switch statement to connect random number with relevant Img

-  if(dice !== 1)
      - diceRoll + currentScore = NewScore -> display

- if(dice == 1)
      - switch player
      - add newScores to a new variable 
      - highlight ui 

2. User holds 
  -  current score + total score >= 100  

*/

