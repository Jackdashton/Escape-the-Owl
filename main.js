// Questions

let questions = [
  {
    question: 'Translate "Guten Tag"',
    answers: [
      { text: 'Good day', correct: true },
      { text: 'Goodbye', correct: false },
      { text: 'See you soon', correct: false },
      { text: "I'm hungry", correct: false }
    ]
  },
  {
    question: 'Translate "Auf Wiedersehen"',
    answers: [
      { text: 'The boy', correct: false },
      { text: 'Goodbye', correct: true },
      { text: 'Have a nice time!', correct: false },
      { text: "One beer, please", correct: false }
    ]
  },
  {
    question: 'Translate "Ja"',
    answers: [
      { text: 'Yes', correct: true },
      { text: 'No', correct: false },
      { text: 'Maybe', correct: false },
      { text: 'Can you repeat the question?', correct: false }
    ]
  },
  {
    question: 'Translate "Nein"',
    answers: [
      { text: 'No', correct: true },
      { text: 'Possibly', correct: false },
      { text: 'No Problem', correct: false },
      { text: 'Yes', correct: false }
    ]
  },
  {
    question: 'Translate "Wie geht es dir?"',
    answers: [
      { text: "What's your name?", correct: false },
      { text: "Where are you?", correct: false },
      { text: "How are you?", correct: true },
      { text: "Do you agree?", correct: false }
    ]
  },
  {
    question: 'Translate "Entschuldigung"',
    answers: [
      { text: 'Definitely', correct: false },
      { text: 'Entirely', correct: false },
      { text: 'Sorry', correct: true },
      { text: 'Yes', correct: false }
    ]
  }
]


// when user presses key, check to see if there is an available sibling
// if yes, move active class from current to next
// if no available td, alert winner

// We pass 1 or 2 through as the arguement (i.e. player)

const moveForward = (event) => {
  if (event.key === "p") {
    const car = document.querySelector(".user");
    if (car.nextElementSibling) {
      car.classList.remove("user");
      car.nextElementSibling.classList.add("user");
    } else {
      alert("You have escaped, well done!");
      window.location.reload();
    }
  } else if (event.key === "q") {
    const bird = document.querySelector(".owl");
    if (bird.classList.contains("user") && bird.classList.contains("owl")) {
      alert("Game over, the owl caught you");
      window.location.reload();
    } else
    bird.classList.remove("owl");
    bird.nextElementSibling.classList.add("owl");
  }
};

// Add an event listener on keyup which calls a function
document.addEventListener("keyup", moveForward);

// Functions for the quiz

// Start the game - click start btn
// Set next question - click next btn
// Select Answer - click on an answer btn

const startButton = document.querySelector("#start-btn");
const nextButton = document.querySelector("#next-btn");
const questionContainer = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");

let shuffledQuestions = undefined;
let currentQuestionIndex = undefined;

const startGame = () => {
  startButton.classList.add("hide");
  questionContainer.classList.remove("hide");
  shuffledQuestions = questions.sort(() => Math.random() - .5);
  currentQuestionIndex = 0;
  setNextQuestion();
}

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
  currentQuestionIndex ++ ;
  setNextQuestion();
});

const setNextQuestion = () => {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

const showQuestion = (question) => {
  questionElement.innerText = question.question;
  question.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      // Also add the movement in here
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtons.appendChild(button);
  })
}

const resetState = () => {
  clearStatusClass(document.body)
  // potentially just for container.
  nextButton.classList.add("hide");
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

const selectAnswer = (e) => {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  // possibly container?
  Array.from(answerButtons.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide");
  } else {
    startButton.innerText = "Restart";
    startButton.classList.remove("hide");
  }

}

const setStatusClass = (element, correct) => {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}

const clearStatusClass = (element) => {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}
