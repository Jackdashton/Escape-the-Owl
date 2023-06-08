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
const questionElement = document.querySelector(".question");
console.log(questionElement);

const shuffledQuestions = questions;
const currentQuestionIndex = undefined;

const startGame = () => {
  console.log("Started");
  startButton.classList.add("hide");
  shuffledQuestions = questions;
  currentQuestionIndex = 0;
  questionContainer.classList.remove("hide");
  setNextQuestion();
}

startButton.addEventListener("click", startGame);

const setNextQuestion = () => {
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

const showQuestion = () => {

}

const selectAnswer = () => {

}

// Questions

const questions = [
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
