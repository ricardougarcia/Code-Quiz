// STARTING DATA (GLOBAL VARIABLES)
// Start Game Button. NBot sure if I should reference the class
var startGameButtonBox = document.getElementById("startGameButtonBox");
var startGameButton = document.getElementById("startGameButton");
// Selects element id countdownTimerOnScreen
var timeEl = document.querySelector("#countdownTimerOnScreen");
// Selects element by id main
var mainEl = document.getElementById("main");
// Selects element by id viewHighScoresButton
var viewHighScoresButton = document.getElementById("viewHighScoresButton");
// Starting time variable
var startingTime = 5;

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
  }

  questionNumber++;
  renderQuestion();
}
// Storing time as score

// Storing all scores

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

// FUNCTIONS------------------------------

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function () {
    startingTime--;
    timeEl.textContent = "Timer:" + " " + startingTime;

    if (startingTime === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Box that takes and stores initials user input and display high scores
      yourFinalScoreAndInitial();
    }
    // IF statement here for user completeing last question
  }, 1000);
}

// Function to display scores at the end?
function yourFinalScoreAndInitial() {
  var zeroScoreInitials = prompt(
    "Your score is" + " " + startingTime,
    "Please type your initials"
  );
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

startGameButton.addEventListener("click", renderQuestion);
questionBox1.addEventListener("click", checkUserChoice);
// trying to use this to identiofy the last click to trigger prompt
questionsArray.choices.addEventListener("click", yourFinalScoreAndInitial);
