// Game State - control the overall status of the game
const gameState = {
  id: 0,
  start: true,
  selected: null,
  questions: [
    {
      id: 0,
      question: "Haus",
      answers: [
        { text: "House", isCorrect: true },
        { text: "Mouse", isCorrect: false },
        { text: "Car", isCorrect: false },
        { text: "Apple", isCorrect: false },
      ],
    },
    {
      id: 1,
      question: "Traurig",
      answers: [
        { text: "Happy", isCorrect: false },
        { text: "Sad", isCorrect: true },
        { text: "Excited", isCorrect: false },
        { text: "Tired", isCorrect: false },
      ],
    },
    {
      id: 2,
      question: "Bitte",
      answers: [
        { text: "Thanks", isCorrect: false },
        { text: "Please", isCorrect: true },
        { text: "Yes", isCorrect: false },
        { text: "No", isCorrect: false },
      ],
    },
    {
      id: 3,
      question: "Hallo",
      answers: [
        { text: "Thanks", isCorrect: false },
        { text: "Hello", isCorrect: true },
        { text: "Yes", isCorrect: false },
        { text: "No", isCorrect: false },
      ],
    },
    {
      id: 4,
      question: "Tschuss",
      answers: [
        { text: "Thanks", isCorrect: false },
        { text: "Bye", isCorrect: true },
        { text: "Yes", isCorrect: false },
        { text: "No", isCorrect: false },
      ],
    },
    {
      id: 5,
      question: "Essen",
      answers: [
        { text: "Thanks", isCorrect: false },
        { text: "Eating", isCorrect: true },
        { text: "Yes", isCorrect: false },
        { text: "No", isCorrect: false },
      ],
    },
    {
      id: 6,
      question: "Sitzen",
      answers: [
        { text: "Thanks", isCorrect: false },
        { text: "Sitting", isCorrect: true },
        { text: "Yes", isCorrect: false },
        { text: "No", isCorrect: false },
      ],
    },
    {
      id: 7,
      question: "Trinken",
      answers: [
        { text: "Thanks", isCorrect: false },
        { text: "Drinking", isCorrect: true },
        { text: "Yes", isCorrect: false },
        { text: "No", isCorrect: false },
      ],
    },
    {
      id: 7,
      question: "Schlagen",
      answers: [
        { text: "Thanks", isCorrect: false },
        { text: "Hitting", isCorrect: true },
        { text: "Yes", isCorrect: false },
        { text: "No", isCorrect: false },
      ],
    },
    {
      id: 8,
      question: "Hoeren",
      answers: [
        { text: "Thanks", isCorrect: false },
        { text: "Listening", isCorrect: true },
        { text: "Yes", isCorrect: false },
        { text: "No", isCorrect: false },
      ],
    },
  ],
};

// Update game question

function updateGameQuestion(id) {
  const question = document.querySelector("#question");
  question.innerText = gameState.questions[id].question;
  const options = document.querySelectorAll(".option");
  options.forEach((option, index) => {
    option.innerText = gameState.questions[id].answers[index].text;
    option.value = gameState.questions[id].answers[index].isCorrect;
    option.style.backgroundColor = "";
  });
}

function updateSelectedAnswer() {
  const options = document.querySelectorAll(".option");
  options.forEach((option) => {
    option.addEventListener("click", () => {
      gameState.selected = option.value;
      options.forEach((option) => (option.style.backgroundColor = ""));
      option.style.backgroundColor = "lightblue";
    });
  });
}

function evaluateChosenAnswer() {
  const evaluateEl = document.querySelector(".evaluate");
  evaluateEl.addEventListener("click", () => {
    if (gameState.selected !== null) {
      const result = document.querySelector(".result");
      result.innerText = gameState.selected == "true" ? moveUser() : moveOwl();
    }
  });
}

function moveUser() {
  const user = document.querySelector(".user");
  if (user.nextElementSibling) {
    user.classList.remove("user");
    user.nextElementSibling.classList.add("user");
  } else {
    alert("You have escaped, well done!");
    window.location.reload();
  }
}

function moveOwl() {
  const owl = document.querySelector(".owl");
  if (owl.classList.contains("user")) {
    alert("The owl caught you");
    window.location.reload();
  } else {
    owl.classList.remove("owl");
    owl.nextElementSibling.classList.add("owl");
  }
}

function resetQuestionUI() {
  gameState.selected = null;
  const options = document.querySelectorAll('.option');
  options.forEach(option => {
    option.style.backgroundColor = "";
  });
  const result = document.querySelector(".result");
  result.innerText = "";
}

function restartGame() {
  gameState.id = 0;
  gameState.start = true;
  gameState.selected = null;
  resetQuestionUI();
}

function nextQuestion() {
  const next = document.querySelector(".next");
  next.addEventListener("click", () => {
    gameState.start = false;
    if (gameState.id < gameState.questions.length - 1) {
      gameState.id++;
      updateGameQuestion(gameState.id);
    }
    resetQuestionUI();
  });
}

if (gameState.start) {
  updateGameQuestion(gameState.id);
}

updateSelectedAnswer();
evaluateChosenAnswer();
nextQuestion();

// const moveForward = (event) => {
//   if (event.key === "p") {
//     const car = document.querySelector(".user");
//     if (car.nextElementSibling) {
//       car.classList.remove("user");
//       car.nextElementSibling.classList.add("user");
//     } else {
//       alert("You have escaped, well done!");
//       window.location.reload();
//     }
//   } else if (event.key === "q") {
//     const bird = document.querySelector(".owl");
//     if (bird.classList.contains("user") && bird.classList.contains("owl")) {
//       alert("Game over, the owl caught you");
//       window.location.reload();
//     } else bird.classList.remove("owl");
//     bird.nextElementSibling.classList.add("owl");
//   }
// };
