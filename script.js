'use strict'

// console.log(document.querySelector('.message').textContent);

/*document.querySelector() is a method in JavaScript
that allows you to select and retrieve an element from the HTML document
using a CSS selector */

/*.textContent property is used to get the
 text content of an HTML element or to set the text content of an 
 HTML element to a specified value. */

//  document.querySelector('.message').textContent = "👍Correct Number";

//  document.querySelector('.number').textContent = 13;
//  document.querySelector('.score').textContent = 100;

//  document.querySelector('.guess').value = 20;
//  console.log(document.querySelector('.guess').value);

 /*The .value property is used to
  get or set the current value of form elements such as
  <input>, <select>, and <textarea> */

/* --------------------------------------------------------------------------------------------------------- */

// defining the secrect number
let number = Math.trunc(Math.random()*100)+1;
document.querySelector('.number').textContent = number;


// score variable 
let score = Number(document.querySelector('.score').textContent);
let lives = score;

// high score
let highscore = Number(document.querySelector('.highscore').textContent);


// hadling the check button

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    
// will only enter if there are available lives
  if(score !== 0) {

    // if no input
    if(!guess) {
        document.querySelector('.message').textContent = "🤷‍♂️ At least Try to Guess!"
    }

    // if player win
    else if (guess === number) {
        document.querySelector('.message').textContent = "Correct!!!";
        document.querySelector('.number').textContent = number;

        //changing the heading
        document.querySelector("#heading").textContent = "yaay!! you guessed the number"

        // changing css when player wins the game

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        // setting high score
        if(score > highscore) {
            highscore = score;
            document.querySelector(".highscore").textContent = highscore;
        }


    }

    // if guessed number is greater
    else if(guess > number) {
        document.querySelector('.message').textContent = "go lower";
        score--;
        document.querySelector('.score').textContent = score;

    }

    // if guessed number is smaller
    else if(guess < number) {
        document.querySelector('.message').textContent = "go higher";
        score--;
        document.querySelector('.score').textContent = score;
    }
  }

  else {
    document.querySelector('.message').textContent = " 😢 you lost";
    document.querySelector("#heading").textContent = "ufff!! you couldnt guess the right number"

  }

})

// handeling Again button

document.querySelector('.again').addEventListener('click', function(){

    // changing the heading
  document.querySelector("#heading").textContent = "Guess My Number!"

    // hiding the number
    document.querySelector('.number').textContent = "?"

    // assining the value again 
    number = Math.trunc(Math.random() * 20) + 1;

    // reseting the lives
    score = lives;
    document.querySelector('.score').textContent = score;

    // changing the display message
    document.querySelector('.message').textContent = "Start guessing...";

    // changing input to empty
    document.querySelector('.guess').value = '';

    // changing the css back
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = "15rem";

})