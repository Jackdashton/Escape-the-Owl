console.log("Connected");

// player one - Have user press a key
// when suer presses key, check to see if there is an available sibling
// if yes, move active class from current to next
// if no available td, alert winner

// We pass 1 or 2 through as the arguement (i.e. player)

// Add event listener to keypress

const moveForward = (event) => {
  if (event.key === "p") {
    const car = document.querySelector(".user");
    console.log(car);
    car.classList.remove("user");
    car.nextElementSibling.classList.add("user");
  } else if (event.key === "q") {
    const bird = document.querySelector(".owl");
    bird.classList.remove("owl");
    bird.nextElementSibling.classList.add("owl");
  }
};

document.addEventListener("keyup", moveForward);
