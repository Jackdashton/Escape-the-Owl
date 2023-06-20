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
      question: "Danke",
      answers: [
        { text: "Please", isCorrect: false },
        { text: "Thank you", isCorrect: true },
        { text: "Yes", isCorrect: false },
        { text: "No", isCorrect: false },
      ],
    },
    {
      id: 6,
      question: "Gestern",
      answers: [
        { text: "Tomorrow", isCorrect: false },
        { text: "Afternoon", isCorrect: false },
        { text: "Morning", isCorrect: false },
        { text: "Yesterday", isCorrect: true },
      ],
    },
    {
      id: 7,
      question: "Wasser",
      answers: [
        { text: "Beer", isCorrect: false },
        { text: "Tea", isCorrect: false },
        { text: "Water", isCorrect: true },
        { text: "Whatever", isCorrect: false },
      ],
    },
    {
      id: 7,
      question: "Klein",
      answers: [
        { text: "Clean", isCorrect: false },
        { text: "Know", isCorrect: false },
        { text: "Big", isCorrect: false },
        { text: "Small", isCorrect: true },
      ],
    },
    {
      id: 8,
      question: "Heute",
      answers: [
        { text: "Thanks", isCorrect: false },
        { text: "Today", isCorrect: true },
        { text: "Hour", isCorrect: false },
        { text: "No", isCorrect: false },
      ],
    },
    {
      id: 9,
      question: "Lecker",
      answers: [
        { text: "Delicious", isCorrect: true },
        { text: "Laughing", isCorrect: false },
        { text: "Yes", isCorrect: false },
        { text: "No", isCorrect: false },
      ],
    },
    {
      id: 10,
      question: "Kaffee",
      answers: [
        { text: "Caffeine", isCorrect: false },
        { text: "Tea", isCorrect: false },
        { text: "Coffee", isCorrect: true },
        { text: "Water", isCorrect: false },
      ],
    },
    {
      id: 11,
      question: "Stark",
      answers: [
        { text: "Stink", isCorrect: false },
        { text: "Bare", isCorrect: false },
        { text: "Strong", isCorrect: true },
        { text: "Sleep", isCorrect: false },
      ],
    },
    {
      id: 12,
      question: "Auf Wiedersehen",
      answers: [
        { text: "Bye", isCorrect: true },
        { text: "Hello", isCorrect: false },
        { text: "Sorry", isCorrect: false },
        { text: "Thanks", isCorrect: false },
      ],
    },
    {
      id: 13,
      question: "Arbeiten",
      answers: [
        { text: "Singing", isCorrect: false },
        { text: "Laughing", isCorrect: false },
        { text: "Talking", isCorrect: false },
        { text: "Working", isCorrect: true },
      ],
    },
    {
      id: 14,
      question: "Entschuldigung",
      answers: [
        { text: "Hello", isCorrect: false },
        { text: "Sorry", isCorrect: true },
        { text: "Tomorrow", isCorrect: false },
        { text: "Nevermind", isCorrect: false },
      ],
    }
  ],
};

// Game Controls

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
      option.style.backgroundColor = "#F16A6F";
    });
  });
}

function evaluateChosenAnswer() {
  const evaluateEl = document.querySelector(".evaluate");
  evaluateEl.addEventListener("click", () => {
    if (gameState.selected !== null) {
      const result = document.querySelector(".result");
      result.innerText = gameState.selected == "true" ? moveUser() : moveOwl();
      result.innerText = gameState.selected == "true" ? "Correct" : "Wrong";

      const options = document.querySelectorAll(".option");
      options.forEach(option => {
        option.style.backgroundColor = option.value == "true" ? "lightgreen" : "crimson";
      })
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
