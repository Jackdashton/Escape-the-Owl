// Questions

const questions = [
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

// Iteration

function iterate(id) {

  // Getting the results display section

  // Getting the question

  // Setting the question text

  // Get the options

  // Providing Option Text

  // True of false value to the options

  



}




















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
