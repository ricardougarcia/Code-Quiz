// STARTING DATA (GLOBAL VARIABLES)
// Start Game Button. NBot sure if I should reference the class
var startGameButtonBox = document.getElementById("startGameButtonBox");
var startGameButton = document.getElementById("startGameButton");
// Selects element id countdownTimerOnScreen
var timeEl = document.querySelector("#countdownTimerOnScreen");
// Selects element by id main
var mainEl = document.getElementById("main");
// p under the answer buttons display correct or wrong!
var correctOrWrongText = document.getElementById("correctOrWrongText");
// Selects element by id viewHighScoresButton
var viewHighScoresButton = document.getElementById("viewHighScoresButton");
// Div element of form. End of game initials form before high score
var initialsForm = document.getElementById("initialsForm");
initialsForm.style.display = "none";
// Form element
var form = document.getElementById("form");
// List of high scores at end of game
var listOfHighScores = document.getElementById("listOfHighScores");
listOfHighScores.style.display = "none";
// Starting time variable
var startingTime = 10;

// Question boxes
var quizAreaForBoxes = document.getElementById("quizAreaForBoxes");
var questionBox1 = document.getElementById("questionBox1");
var h2QuestionBox = document.querySelector(".h2QuestionBox");
var answerButtonA = document.querySelector(".answerButtonA");
var answerButtonB = document.querySelector(".answerButtonB");
var answerButtonC = document.querySelector(".answerButtonC");
var answerButtonD = document.querySelector(".answerButtonD");
var questionsArray = [
  {
    question: "Which is not a primitive data type?",
    choices: ["Boolean", "String", "Array", "Number"],
    correctAnswer: "Array",
  },
  {
    question: "What syntax is used to call a function?",
    choices: ["Question Mark", "Exclamation Point", "Parentheses", "Bracket"],
    correctAnswer: "Parentheses",
  },
  {
    question: "Is Java and Javascript the same?",
    choices: ["Yes", "No", "Blue", "Dog"],
    correctAnswer: "No",
  },
];
var questionNumber = 0;

// DESIGN---------------------------------
answerButtonA.setAttribute(
  "style",
  "color:white; background-color: purple; font-size: 20px; font-weight: bold;"
);
answerButtonB.setAttribute(
  "style",
  "color:white; background-color: purple; font-size: 20px; font-weight: bold;"
);
answerButtonC.setAttribute(
  "style",
  "color:white; background-color: purple; font-size: 20px; font-weight: bold;"
);
answerButtonD.setAttribute(
  "style",
  "color:white; background-color: purple; font-size: 20px; font-weight: bold;"
);
h2QuestionBox.setAttribute(
  "style",
  "color:black; font-size: 25px; font-weight: bold; font-family: Arial"
);
startGameButton.setAttribute(
  "style",
  "color:white; background-color: purple; font-size: 20px; font-weight: bold;"
);

// FUNCTIONS------------------------------
// This function Starts timer and displays time on screen
function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function () {
    startingTime--;
    timeEl.textContent = "Timer:" + " " + startingTime;

    if (startingTime <= 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Box that takes and stores initials user input and display high scores
      yourFinalScoreAndInitial();
    }
    // IF statement here for user completeing last question
  }, 1000);
}

// This renders or presents the question and answer options for the user.
function renderQuestion() {
  console.log(questionsArray[questionNumber].question);
  h2QuestionBox.textContent = questionsArray[questionNumber].question;
  answerButtonA.textContent = questionsArray[questionNumber].choices[0];
  answerButtonB.textContent = questionsArray[questionNumber].choices[1];
  answerButtonC.textContent = questionsArray[questionNumber].choices[2];
  answerButtonD.textContent = questionsArray[questionNumber].choices[3];
}
// This checks the user choice
function checkUserChoice(userClick) {
  console.log(userClick);
  //   console.log(event.target.textContent);
  if (
    userClick.target.textContent ===
    questionsArray[questionNumber].correctAnswer
  ) {
    console.log(true);
  } else {
    console.log(false);
    // docked time. does this influence the setTime function?
    startingTime = startingTime - 5;
  }

  if (questionNumber === questionsArray.length - 1) {
    console.log("this works");
    yourFinalScoreAndInitial();
  }
  questionNumber++;
  renderQuestion();
}

// var findIndex = questionsArray.indexOf("choices");
// console.log(findIndex);

// Hide quiz area at end of game
function yourFinalScoreAndInitial() {
  questionBox1.style.display = "none";
  initialsForm.style.display = "block";
}

// This function triggers the initials form to display for user to submit initials and see their score.
function initialsFormUserInput(event) {
  event.preventDefault();
  console.log(event);
  var initialsInput = event.target.elements.initialsInput.value;
  console.log(initialsInput);
  // TO DO: store to local

  // Trigger the new window of high scores
  initialsForm.style.display = "none";
  // TO DO: Get from local storage and dynamically add to list.
  // Might have to sort from local storage
  listOfHighScores.style.display = "block";
}
// Storing time as score

// Storing all scores

// USER INTERACTIONS----------------------

// user starts game and timer function setTime is triggered
startGameButton.addEventListener("click", setTime);

// user starts game and renderQuestion function is triggered
startGameButton.addEventListener("click", renderQuestion);

// user selects choice triggering checkUserChoice function
questionBox1.addEventListener("click", checkUserChoice);

// user submits initials at end of game
form.addEventListener("submit", initialsFormUserInput);

// user submit last answer triggering initialsFormUserInput
// questionsArray.choices[2].addEventListener(
//   "click",
//   yourFinalScoreAndInitial
// );

// Add remove start Game Button here listener and funciton above
// startGameButton.addEventListener("click", removeStartGameButton);
