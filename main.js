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
  {
    id: 2,
    q: "Bitte",
    a: [
      { text: "Thanks", isCorrect: false },
      { text: "Please", isCorrect: true },
      { text: "Yes", isCorrect: false },
      { text: "No", isCorrect: false },
    ],
  },
  {
    id: 3,
    q: "Hallo",
    a: [
      { text: "Thanks", isCorrect: false },
      { text: "Hello", isCorrect: true },
      { text: "Yes", isCorrect: false },
      { text: "No", isCorrect: false },
    ],
  },
  {
    id: 4,
    q: "Tschuss",
    a: [
      { text: "Thanks", isCorrect: false },
      { text: "Bye", isCorrect: true },
      { text: "Yes", isCorrect: false },
      { text: "No", isCorrect: false },
    ],
  },
  {
    id: 5,
    q: "Essen",
    a: [
      { text: "Thanks", isCorrect: false },
      { text: "Eating", isCorrect: true },
      { text: "Yes", isCorrect: false },
      { text: "No", isCorrect: false },
    ],
  },
  {
    id: 6,
    q: "Sitzen",
    a: [
      { text: "Thanks", isCorrect: false },
      { text: "Sitting", isCorrect: true },
      { text: "Yes", isCorrect: false },
      { text: "No", isCorrect: false },
    ],
  },
  {
    id: 7,
    q: "Trinken",
    a: [
      { text: "Thanks", isCorrect: false },
      { text: "Drinking", isCorrect: true },
      { text: "Yes", isCorrect: false },
      { text: "No", isCorrect: false },
    ],
  },
  {
    id: 7,
    q: "Schlagen",
    a: [
      { text: "Thanks", isCorrect: false },
      { text: "Hitting", isCorrect: true },
      { text: "Yes", isCorrect: false },
      { text: "No", isCorrect: false },
    ],
  },
  {
    id: 8,
    q: "Hoeren",
    a: [
      { text: "Thanks", isCorrect: false },
      { text: "Listening", isCorrect: true },
      { text: "Yes", isCorrect: false },
      { text: "No", isCorrect: false },
    ],
  }
];

//  Set Start
let start = true;

// Iteration

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

if (start) {
  iterate("0");
}

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


// Racetrack

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

// Add an event listener on keyup which calls a function
// document.addEventListener("keyup", moveForward);
