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
// Array of objects to store questions and answers

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

// Function for the quiz

// generateQuiz function contains helper functions to show the quiz, accept submissions, and show the results.

const generateQuiz = (questions, quizContainer, resultsContainer, submitButton) => {
  const showQuestions = (questions, quizContainer) => {

  }
  const showResults = (questions, quizContainer, resultsContainer) => {

  }

  showQuestions(questions, quizContainer);

  submitButton.onclick = function() {
    showResults(questions, quizContainer, resultsContainer)
  }

}
