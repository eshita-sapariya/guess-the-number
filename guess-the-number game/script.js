'use strict';
/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'correct number';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = '13';
document.querySelector('.score').textContent = 10;
console.log((document.querySelector('.guess').value = 23));*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;
let score = 20;
const message = function (Message) {
  document.querySelector('.message').textContent = Message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  //if no input
  if (!guess) {
    message('No Number!');
  }
  //if guess is correct
  else if (guess === secretNumber) {
    message('Correct Number');
    document.querySelector('body').style.backgroundColor = 'lightgreen';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  //if guess is not correct
  else if (guess !== secretNumber) {
    if (score > 1) {
      message(guess > secretNumber ? 'Too High!' : 'Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      message('You Lost!');
      document.querySelector('.score').textContent = 0;
    }
  }
});
//if guess is high
/*else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too High!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost!';
      document.querySelector('.score').textContent = 0;
    }
  }
  //if guess is low
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost!';
      document.querySelector('.score').textContent = 0;
    }
  }
});*/

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.score').textContent = 20;
  message('Start Guessing......');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = 'NULL';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
});

//First Scenario:
//a)If there is no input from user.
//2)What happens while Check button is pressed.
//Second Scenario:
//a)Setting the secret number.
