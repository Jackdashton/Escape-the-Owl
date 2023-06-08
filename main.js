// Questions

let questions = [
  {
    question: 'What is 2 + 2?',
    answers: [
      { text: '4', correct: true },
      { text: '22', correct: false }
    ]
  },
  {
    question: 'Who is the best YouTuber?',
    answers: [
      { text: 'Web Dev Simplified', correct: true },
      { text: 'Traversy Media', correct: true },
      { text: 'Dev Ed', correct: true },
      { text: 'Fun Fun Function', correct: true }
    ]
  },
  {
    question: 'Is web development fun?',
    answers: [
      { text: 'Kinda', correct: false },
      { text: 'YES!!!', correct: true },
      { text: 'Um no', correct: false },
      { text: 'IDK', correct: false }
    ]
  },
  {
    question: 'What is 4 * 2?',
    answers: [
      { text: '6', correct: false },
      { text: '8', correct: true }
    ]
  }
]


// when suer presses key, check to see if there is an available sibling
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
