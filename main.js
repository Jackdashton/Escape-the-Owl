// Questions

const Questions = [
  {
    id: 0,
    q: "Haus",
    a: [
      { text: "House", isCorrect: true },
      { text: "Mouse", isCorrect: false },
      { text: "Car", isCorrect: false },
      { text: "Apple", isCorrect: false },
    ],
  },
  {
    id: 1,
    q: "Traurig",
    a: [
      { text: "Happy", isCorrect: false },
      { text: "Sad", isCorrect: true },
      { text: "Excited", isCorrect: false },
      { text: "Tired", isCorrect: false },
    ],
  },
];

//  Set Start
let start = true;

// Iteration

function iterate(id) {

  // Getting the results display section
  const results = document.querySelector(".result");
  results[0].innerText = "";

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
  option1.innerText = Questions[id].a[1].text;
  option1.innerText = Questions[id].a[2].text;
  option1.innerText = Questions[id].a[3].text;

  // True of false value to the options





}

const results = document.querySelector(".result")
  console.log(results)
















// Racetrack

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
    } else bird.classList.remove("owl");
    bird.nextElementSibling.classList.add("owl");
  }
};

// Add an event listener on keyup which calls a function
document.addEventListener("keyup", moveForward);

// Functions for the quiz
