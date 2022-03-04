'use strict';

const score0E = document.querySelector('#score--0')
const score1E = document.querySelector('#score--1');
const diceE = document.querySelector('.dice')
const rollDiceBtn = document.querySelector('.btn--roll');
const restartBtn = document.querySelector('.btn--new');
const holdDiceBtn = document.querySelector('.btn--hold');

// starting conditions
score0E.textContent = 0;
score1E.textContent = 0;
diceE.classList.add('hidden');
const randomDice = Math.trunc(Math.random() * 6)+1
console.log(randomDice);

const handleDiceRoll = ()=>{
      const randomDice = Math.trunc(Math.random() * 6) + 1;
      diceE.classList.remove('hidden');

      switch (randomDice) {
      case 1:
            diceE.src = '/dice-1.png'
            break;
      case 2: 
            diceE.src = '/dice-2.png'
            break;
      case 3:
            diceE.src = '/dice-3.png'
            break;
      case 4: 
            diceE.src = '/dice-4.png';
            break
      case 5: 
            diceE.src = '/dice-5.png';
            break
      case 6:
            diceE.src = '/dice-6.png'
        default:
          break;
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

