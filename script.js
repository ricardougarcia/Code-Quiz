// STARTING DATA (GLOBAL VARIABLES)
// Selects element id countdownTimerOnScreen
var timeEl = document.querySelector("#countdownTimerOnScreen");
// Selects element by id main
var mainEl = document.getElementById("#main");
// Selects element by id viewHighScoresButton
var viewHighScoresButton = document.getElementById("#viewHighScoresButton");
// Starting time variable
var startingTime = 05;
// Question boxes
var quizAreaForBoxes = document.getElementById("#quizAreaForBoxes");
var questionBox1 = document.getElementById("#questionBox1");
var answerButtonA = document.querySelector(".answerButtonA");
var answerButtonB = document.querySelector(".answerButtonB");
var answerButtonC = document.querySelector(".answerButtonC");
var answerButtonD = document.querySelector(".answerButtonD");
// Storing time as score

// Storing all scores

// Start Game Button. NBot sure if I should reference the class
var startGameButtonBox = document.getElementById("#startGameButtonBox");
var startGameButton = document.getElementById("#startGameButton");

// // Accessing element by id

// DESIGN---------------------------------
answerButtonA.setAttribute("style", "color:white; background-color: purple;");
answerButtonB.setAttribute("style", "color:white; background-color: purple;");
answerButtonC.setAttribute("style", "color:white; background-color: purple;");
answerButtonD.setAttribute("style", "color:white; background-color: purple;");

// FUNCTIONS------------------------------

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function () {
    startingTime--;
    timeEl.textContent = "Timer:" + " " + startingTime;

    if (startingTime === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image. But need to change to
      // Box that takes and stores initials user input and display high scores
      sendMessage();
    }
  }, 1000);
}

// Function to create and append image. switch to prompt for scores at the end possibly?
function sendMessage() {
  timeEl.textContent = " ";
  // change this to be a box showing high scores
  var imgEl = document.createElement("img");
  imgEl.setAttribute("src", "images/image_1.jpg");
  mainEl.appendChild(imgEl);
}

setTime();

// USER INTERACTIONS----------------------
// Accept button to begin quiz

// WHEN I click the start button

// THEN a timer starts and-

// I am presented with a question

// WHEN I answer a question

// THEN I am presented with another question

// WHEN I answer a question incorrectly

// THEN time is subtracted from the clock

// WHEN all questions are answered or the timer reaches 0

// THEN the game is over

// WHEN the game is over, THEN I can save my initials and my score.
// create variable for remainingTime. Create the storage for previous player1Score and player2Score.
// do I have to name the function to call
// var displayScoresBox = function displayScores() {
//     prompt("Score: " + remainingTime + player1Score "var for their remaining time" + player2Score + "var for their remaining time");
//   }
