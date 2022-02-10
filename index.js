var totalQuestionCount = 3;
var currentQuestionNo = 1;
var totalScore = 0;
var wrongAnswerCount = 0;
var answerSelectedByUser = "";
var correctAnswerForHtml = "";
var userName = "";
var questionNumbers = generateUniqueRandomNumber(3, 3);

function displayRadioValue() {
  var ele = document.getElementsByName("answer");
  for (i = 0; i < ele.length; i++) {
    if (ele[i].checked) {
      //document.getElementById
      console.log(ele[i].value);
    }
  }
}

function updateQuestionOnUi() {
  console.log(randomNumber());
  //var questionBankIndex = randomNumber();

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
  document.getElementById("answerText1").innerHTML = answerListForHtml[0];
  document.getElementById("answer1").value = answerListForHtml[0];
  document.getElementById("answerText2").innerHTML = answerListForHtml[1];
  document.getElementById("answer2").value = answerListForHtml[1];
  document.getElementById("answerText3").innerHTML = answerListForHtml[2];
  document.getElementById("answer3").value = answerListForHtml[2];
  document.getElementById("answerText4").innerHTML = answerListForHtml[3];
  document.getElementById("answer4").value = answerListForHtml[3];
  currentQuestionNo++;
}

function checkAnswerAndLoadNextQuestion() {
  updateAnswer();
  if (correctAnswerForHtml === answerSelectedByUser) {
    totalScore++;
    document.getElementById("score").innerHTML = totalScore;
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
  document.getElementById("selectedAnswser").innerHTML = "";
  var ele = document.getElementsByName("answer");
  for (var i = 0; i < ele.length; i++) {
    if (ele[i].checked) {
      answerSelectedByUser = ele[i].value;
      document.getElementById("selectedAnswser").innerHTML =
        answerSelectedByUser;
    }
  }
}

function getQuestionAnswerFromQuestionBank() {}

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
  document.getElementById("resultTitle").innerHTML = "Result : ";

  document.getElementById("finalscore").innerHTML =
    totalScore + " of " + currentQuestionNo;

  document.getElementById("finalscoreinpercent").innerHTML =
    (totalScore * 100) / currentQuestionNo + "%";
}

var questionBank = [
  {
    questionNo: "1",
    question: "What is capital city of India?",
    answerList: ["Delhi", "Mumbai", "Bengaluru", "Chennai"],
    correctAnswer: "Delhi",
  },
  {
    questionNo: "2",
    question: "What is national flag of India called?",
    answerList: ["Tiranga", "Flag", "Jan Gan Man", "Vande Mataram"],
    correctAnswer: "Tiranga",
  },
  {
    questionNo: "3",
    question: "What is national animal of India?",
    answerList: ["Lion", "Tiger", "Elephant", "Snake"],
    correctAnswer: "Tiger",
  },
];
