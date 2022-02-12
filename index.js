var totalQuestionCount = 5;
var currentQuestionNo = 1;
var totalScore = 0;
var wrongAnswerCount = 0;
var answerSelectedByUser = "";
var correctAnswerForHtml = "";
var userName = "";
var questionNumbers = generateUniqueRandomNumber(5, 5);

var userDetailContainer = document.querySelector("#userdetailcontainer");
var quizContainer = document.querySelector("#quizcontainer");

function displayContainer() {
  quizContainer.style.display = "none";
  userDetailContainer.style.display = "block";
}

function readUserNameAndStartQuiz() {
  userName = document.getElementById("username");
  if (userName.value.length === 0) {
    userDetailContainer.style.display = "block";
  } else {
    quizContainer.style.display = "block";
    userDetailContainer.style.display = "none";
    updateQuestionOnUi();
  }
}

// function displayRadioValue() {
//   var ele = document.getElementsByName("answer");
//   for (i = 0; i < ele.length; i++) {
//     if (ele[i].checked) {
//       //document.getElementById
//       console.log(ele[i].value);
//     }
//   }
// }

function updateQuestionOnUi() {
  var tempQuestionNo = questionNumbers.shift() - 1;
  var questionNoForHtml = questionBank[tempQuestionNo].questionNo;
  var questionForHtml = questionBank[tempQuestionNo].question;
  var answerListForHtml = questionBank[tempQuestionNo].answerList;
  correctAnswerForHtml = questionBank[tempQuestionNo].correctAnswer;
  var questionText = document.getElementById("questionName");
  questionText.innerHTML =
    "Question " +
    currentQuestionNo +
    " of " +
    totalQuestionCount +
    ": \n" +
    questionForHtml;

  /* Creating a variable called answerListForHtml and setting it equal to the array of answers.
    Then it is creating a variable called answerText1 and setting it equal to the id of the answer
    text.
    Then it is setting the innerHTML of the answer text equal to the first element of the array. */
  document.getElementById("answerText1").innerText = answerListForHtml[0];
  document.getElementById("answer1").value = answerListForHtml[0];
  document.getElementById("answerText2").innerText = answerListForHtml[1];
  document.getElementById("answer2").value = answerListForHtml[1];
  document.getElementById("answerText3").innerText = answerListForHtml[2];
  document.getElementById("answer3").value = answerListForHtml[2];
  document.getElementById("answerText4").innerText = answerListForHtml[3];
  document.getElementById("answer4").value = answerListForHtml[3];
  document.getElementById("selectedAnswser").innerText = "";
  currentQuestionNo++;
}

function checkAnswerAndLoadNextQuestion() {
  updateAnswer();
  if (correctAnswerForHtml === answerSelectedByUser) {
    totalScore++;
    document.getElementById("score").innerText =
      "Current Score : " + totalScore;
  } else {
    wrongAnswerCount++;
  }

  if (currentQuestionNo > totalQuestionCount) {
    printTestSummary();
    return;
  } else if (currentQuestionNo <= totalQuestionCount) {
    updateQuestionOnUi();
  }
}

function updateAnswer() {
  document.getElementById("selectedAnswser").innerText = "";
  var ele = document.getElementsByName("answer");
  for (var i = 0; i < ele.length; i++) {
    if (ele[i].checked) {
      answerSelectedByUser = ele[i].value;
      document.getElementById("selectedAnswser").innerText =
        answerSelectedByUser;
    }
  }
}

/**
 * Returns a random number between the two numbers that are passed in
 * @returns A random number between 0 and 10.
 */
function randomNumber() {
  const min = 1;
  /* Returning a random number between the two numbers that are passed in. */
  return Math.floor(Math.random() * (totalQuestionCount - min) + min);
}

/**
 * Generate a random number between 1 and max, and add it to an array.
 *
 * If the number is already in the array, try again.
 *
 * Keep trying until the array has quantity number of elements.
 *
 * Return the array
 * @param quantity - the number of random numbers to generate
 * @param max - The maximum number that can be generated.
 * @returns An array of unique random numbers.
 */
function generateUniqueRandomNumber(quantity, max) {
  const arr = [];
  while (arr.length < quantity) {
    var candidateInt = Math.floor(Math.random() * max) + 1;
    if (arr.indexOf(candidateInt) === -1) arr.push(candidateInt);
  }
  return arr;
}

function printTestSummary() {
  var quizContainer = document.getElementById("quizcontainer");

  quizContainer.style.display = "none";

  currentQuestionNo = currentQuestionNo - 1;
  document.getElementById("resultTitle").innerText =
    userName.value + "'s Result : ";

  document.getElementById("finalscore").innerText =
    totalScore + " of " + currentQuestionNo;

  document.getElementById("finalscoreinpercent").innerText =
    (totalScore * 100) / currentQuestionNo + "%";
}

var questionBank = [
  {
    questionNo: "1",
    question: "How do you create a function in JavaScript?",
    answerList: [
      "function:myfunction()",
      "function=myfunction()",
      "function()",
      "function myFunction()",
    ],
    correctAnswer: "function myFunction()",
  },
  {
    questionNo: "2",
    question: "How do you call a function named printTestSummary()?",
    answerList: [
      "call printTestSummary()",
      "call function printTestSummary()",
      "printTestSummary",
      "printTestSummary()",
    ],
    correctAnswer: "printTestSummary()",
  },
  {
    questionNo: "3",
    question: "How to write an IF statement in JavaScript?",
    answerList: ["IF i  === 5 then", "if i=5 then", "if i=5", "if (i==5)"],
    correctAnswer: "if (i==5)",
  },
  {
    questionNo: "4",
    question: "How to call function printTestSummary()?",
    answerList: [
      "call printTestSummary()",
      "call function printTestSummary()",
      "printTestSummary",
      "printTestSummary()",
    ],
    correctAnswer: "printTestSummary()",
  },
  {
    questionNo: "5",
    question:
      'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
    answerList: ["if i <> 5", "if (i != 5)", "if (i <> 5)", "if i!=5 then"],
    correctAnswer: "if (i != 5)",
  },
  {
    questionNo: "6",
    question: "How does a FOR loop start?",
    answerList: [
      "for i=1 to 5",
      "for (i=0; i<5; i++)",
      "for (i <=5 );",
      "for each",
    ],
    correctAnswer: "for (i=0; i<5; i++)",
  },
  {
    questionNo: "7",
    question: "How can you add a comment in a JavaScript?",
    answerList: [
      "'this is a comment",
      "<!-- This is a comment -->",
      "//This is a comment",
      "#This is a comment",
    ],
    correctAnswer: "//This is a comment",
  },
  {
    questionNo: "8",
    question: "JavaScript is the same as Java.",
    answerList: ["True", "false", "yes", "NA"],
    correctAnswer: "false",
  },
];
