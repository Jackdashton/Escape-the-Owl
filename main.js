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

// Questions
const myQuestions = [
  {
    question: "Haus",
    correctAnswer: "House"
  },
  {
    question: "Bier",
    correctAnswer: "Beer"
  },
];

// Functions for the quiz

// Start the game - click start btn
// Set next question - click next btn
// Select Answer - click on an answer btn

const startButton = document.querySelector("#start-btn");
const nextButton = document.querySelector("#next-btn");
const questionContainer = document.getElementById("question-container");



const startGame = () => {
  console.log("Started");
  startButton.classList.add("hide");
  questionContainer.classList.remove("hide");
}

startButton.addEventListener("click", startGame);

const setNextQuestion = () => {

}

const selectAnswer = () => {

}
