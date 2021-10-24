// STARTING DATA (GLOBAL VARIABLES)
// Start Game Button. NBot sure if I should reference the class
var startGameButtonBox = document.getElementById("startGameButtonBox");
var startGameButton = document.getElementById("startGameButton");
// Selects element id countdownTimerOnScreen
var timeEl = document.querySelector("#countdownTimerOnScreen");
// Selects element by id main
var mainEl = document.getElementById("main");
// p under the answer buttons display correct or wrong!
var correctOrWrongText = document.querySelectorAll("#correctOrWrongText");
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
// Scores list from local storage
var scores = document.querySelectorAll(".scores");
// Gets local storage
var getScores = JSON.parse(localStorage.getItem("userInitials")) || [];
// Starting time variable
var startingTime = 60;
//
var timerInterval;
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

// TO DO: This function allows user to see highscores
function viewHighScoresBox() {
  // listOfHighScores.style.display = "block";
  // questionBox1.style.display = "none";
  // initialsForm.style.display = "none";
}

// This function Starts timer and displays time on screen
function setTime() {
  // Sets interval in variable
  timerInterval = setInterval(function () {
    startingTime--;
    timeEl.textContent = "Timer:" + " " + startingTime;

    if (startingTime <= 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Box that takes and stores initials user input and display high scores
      yourFinalScoreAndInitial();
    }
  }, 1000);
}

// This renders or presents the question and answer options for the user.
function renderQuestion() {
  // console.log(questionsArray[questionNumber].question);
  h2QuestionBox.textContent = questionsArray[questionNumber].question;
  answerButtonA.textContent = questionsArray[questionNumber].choices[0];
  answerButtonB.textContent = questionsArray[questionNumber].choices[1];
  answerButtonC.textContent = questionsArray[questionNumber].choices[2];
  answerButtonD.textContent = questionsArray[questionNumber].choices[3];
}
// Removes the start game button
function removeStartGameButton() {
  startGameButton.style.display = "none";
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
    // TO DO: add "correct" in correctOrWrongText
  } else {
    console.log(false);
    // TO DO: add "wrong" in correctOrWrongText

    // docked time for wrong answer
    startingTime = startingTime - 5;
  }

  if (questionNumber === questionsArray.length - 1) {
    console.log("this works");
    yourFinalScoreAndInitial();
  }
  questionNumber++;
  renderQuestion();
}

// Hide quiz area at end of game
function yourFinalScoreAndInitial() {
  clearInterval(timerInterval);
  questionBox1.style.display = "none";
  initialsForm.style.display = "block";

  // add in string of score above input field
}

// This function triggers the initials form to display for user to submit initials and see their score.
function initialsFormUserInput(event) {
  event.preventDefault();
  // console.log(event);
  var initialsInput = event.target.elements.initialsInput.value;
  // console.log(initialsInput);

  var tempObject = {
    userInitials: initialsInput,
    score: startingTime,
  };
  getScores.push(tempObject);
  // Stores scores locally
  localStorage.setItem("userInitials", JSON.stringify(getScores));
  initialsForm.style.display = "none";
  // TO DO: Get from local storage and dynamically add to list.
  listOfHighScores.style.display = "block";
  var olEl = document.createElement("ol");
  for (var i = 0; i < getScores.length; i++) {
    var liEl = document.createElement("li");
    var initialsEl = document.createElement("span");
    initialsEl.textContent = "User: " + getScores[i].userInitials + ",  ";
    var scoresEl = document.createElement("span");
    scoresEl.textContent = "Score: " + getScores[i].score;
    liEl.append(initialsEl, scoresEl);
    olEl.append(liEl);
  }
  listOfHighScores.append(olEl);
}

// USER INTERACTIONS----------------------

// user starts game and timer function setTime is triggered
startGameButton.addEventListener("click", setTime);

// user starts game and renderQuestion function is triggered
startGameButton.addEventListener("click", renderQuestion);

// Add remove start Game Button here listener and funciton above
startGameButton.addEventListener("click", removeStartGameButton);

// user selects choice triggering checkUserChoice function
questionBox1.addEventListener("click", checkUserChoice);

// user submits initials at end of game
form.addEventListener("submit", initialsFormUserInput);

// User clicks View Highscores
viewHighScoresButton.addEventListener("click", viewHighScoresBox);
