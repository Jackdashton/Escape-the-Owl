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
  //select all answers and for each add event listener
  const options = document.querySelectorAll(".option");
  // make the selected = to the clicked button
  options.forEach((option) => {
    option.addEventListener("click", () => {
      gameState.selected = option.value;
      options.forEach((option) => (option.style.backgroundColor = ""));
      option.style.backgroundColor = "lightblue";
    });
  });
  // loop to make all same background color
  // outside of this loop, make selected background color different.
}

function evaluateChosenAnswer() {
  const evaluateEl = document.querySelector(".evaluate");
  evaluateEl.addEventListener("click", () => {
    if (gameState.selected !== null) {
      const result = document.querySelector(".result");
      result.innerText = gameState.selected == 'true' ? 'Correct' : 'Wrong';
      // Add in here the movement of the user and owl
    }
  });
}

function resetQuestionUI() {
  gameState.selected = null;
  const options = querySelectorAll(".option");
  options.forEach(option => {
    option.style.backgroundColor = "";
  });
  const result = document.querySelector(".result");
  result.innerText = "";
}

function restartGame() {
  id = 0;
  start = true;
  selected = null;
  resetQuestionUI();
}

function nextQuestion() {
  const next = document.querySelector(".next");
  next.addEventListener("click", () => {
    gameState.start = false;
    if (gameState.id < gameState.questions.length -1) {
      id++;
      updateGameQuestion(gameState.id);
    }
    resetGameUI();
  })
}

function iterate(id) {
  // User & Owl
  const car = document.querySelector(".user");
  const bird = document.querySelector(".owl");

  // Getting the result display section
  const result = document.querySelectorAll(".result");
  result[0].innerText = "";

  // Getting the question

  const question = document.querySelector("#question");

  // Setting the question text
  question.innerText = Questions[id].q;

  // Get the options
  const option1 = document.querySelector("#op1");
  const option2 = document.querySelector("#op2");
  const option3 = document.querySelector("#op3");
  const option4 = document.querySelector("#op4");

  // Providing Option Text
  option1.innerText = Questions[id].a[0].text;
  option2.innerText = Questions[id].a[1].text;
  option3.innerText = Questions[id].a[2].text;
  option4.innerText = Questions[id].a[3].text;

  // True of false value to the options
  option1.value = Questions[id].a[0].isCorrect;
  option2.value = Questions[id].a[1].isCorrect;
  option3.value = Questions[id].a[2].isCorrect;
  option4.value = Questions[id].a[3].isCorrect;

  let selected = "";

  // Show selection for op1
  option1.addEventListener("click", () => {
    option1.style.backgroundColor = "lightblue";
    selected = option1.value;
  });

  // Show selection for op2
  option2.addEventListener("click", () => {
    option2.style.backgroundColor = "lightblue";
    selected = option2.value;
  });

  // Show selection for op3
  option3.addEventListener("click", () => {
    option3.style.backgroundColor = "lightblue";
    selected = option3.value;
  });

  // Show selection for op4
  option4.addEventListener("click", () => {
    option4.style.backgroundColor = "lightblue";
    selected = option4.value;
  });

  // Get evaluate button
  const evaluate = document.querySelector(".evaluate");

  // Evaluate Method
  evaluate.addEventListener("click", () => {
    if (selected == "true") {
      // add in function to move user
      result[0].innerHTML = "Correct";
      result[0].classList.add("correct");
      if (car.nextElementSibling) {
        car.classList.remove("user");
        car.nextElementSibling.classList.add("user");
      }
    } else {
      // add in function to move owl
      result[0].innerHTML = "Wrong";
      result[0].classList.add("wrong");
      bird.classList.remove("owl");
      bird.nextElementSibling.classList.add("owl");
    }
  });
}

// if (bird.classList.contains("user") && bird.classList.contains("owl")) {
//   alert("The owl has caught you");
//   window.location.reload();
// }

// Next Button
const next = document.querySelector(".next");
let id = 0;
const option1 = document.querySelector("#op1");
const option2 = document.querySelector("#op2");
const option3 = document.querySelector("#op3");
const option4 = document.querySelector("#op4");

next.addEventListener("click", () => {
  start = false;
  option1.style.removeProperty("background-color");
  option2.style.removeProperty("background-color");
  option3.style.removeProperty("background-color");
  option4.style.removeProperty("background-color");
  if (id < 20) {
    id++;
    iterate(id);
    console.log(id);
  }
});

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
