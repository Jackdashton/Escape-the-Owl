// Questions

const gameState = {
  id: 0,
  start: true,
  selectionOption: null,
  questions: [
    {
      id: 0,
      question: 'Haus',
      answers: [
        { text: 'House', isCorrect: true },
        { text: 'Mouse', isCorrect: false },
        { text: 'Car', isCorrect: false },
        { text: 'Apple', isCorrect: false },
      ],
    },
    {
      id: 1,
      question: 'Traurig',
      answers: [
        { text: 'Happy', isCorrect: false },
        { text: 'Sad', isCorrect: true },
        { text: 'Excited', isCorrect: false },
        { text: 'Tired', isCorrect: false },
      ],
    },
    {
      id: 2,
      question: 'Bitte',
      answers: [
        { text: 'Thanks', isCorrect: false },
        { text: 'Please', isCorrect: true },
        { text: 'Yes', isCorrect: false },
        { text: 'No', isCorrect: false },
      ],
    },
    {
      id: 3,
      question: 'Hallo',
      answers: [
        { text: 'Thanks', isCorrect: false },
        { text: 'Hello', isCorrect: true },
        { text: 'Yes', isCorrect: false },
        { text: 'No', isCorrect: false },
      ],
    },
    {
      id: 4,
      question: 'Tschuss',
      answers: [
        { text: 'Thanks', isCorrect: false },
        { text: 'Bye', isCorrect: true },
        { text: 'Yes', isCorrect: false },
        { text: 'No', isCorrect: false },
      ],
    },
    {
      id: 5,
      question: 'Essen',
      answers: [
        { text: 'Thanks', isCorrect: false },
        { text: 'Eating', isCorrect: true },
        { text: 'Yes', isCorrect: false },
        { text: 'No', isCorrect: false },
      ],
    },
    {
      id: 6,
      question: 'Sitzen',
      answers: [
        { text: 'Thanks', isCorrect: false },
        { text: 'Sitting', isCorrect: true },
        { text: 'Yes', isCorrect: false },
        { text: 'No', isCorrect: false },
      ],
    },
    {
      id: 7,
      question: 'Trinken',
      answers: [
        { text: 'Thanks', isCorrect: false },
        { text: 'Drinking', isCorrect: true },
        { text: 'Yes', isCorrect: false },
        { text: 'No', isCorrect: false },
      ],
    },
    {
      id: 7,
      question: 'Schlagen',
      answers: [
        { text: 'Thanks', isCorrect: false },
        { text: 'Hitting', isCorrect: true },
        { text: 'Yes', isCorrect: false },
        { text: 'No', isCorrect: false },
      ],
    },
    {
      id: 8,
      question: 'Hoeren',
      answers: [
        { text: 'Thanks', isCorrect: false },
        { text: 'Listening', isCorrect: true },
        { text: 'Yes', isCorrect: false },
        { text: 'No', isCorrect: false },
      ],
    },
  ],
};

function updateGameQuestion(id) {
  const questionEl = document.querySelector('#question');
  questionEl.innerText = gameState.questions[id].question;
  const options = document.querySelectorAll('.option');
  options.forEach((option, index) => {
    option.innerText = gameState.questions[id].answers[index].text;
    option.value = gameState.questions[id].answers[index].isCorrect;
    option.style.backgroundColor = '';
  });
}

function updateSelectedAnswer() {
  const options = document.querySelectorAll('.option');
  options.forEach(option => {
    option.addEventListener('click', () => {
      gameState.selectionOption = option.value;
      options.forEach(option => (option.style.backgroundColor = ''));
      option.style.backgroundColor = 'lightgoldenrodyellow';
    });
  });
}

function evaluateChosenAnswer() {
  const evaluateEl = document.querySelector('.evaluate');
  evaluateEl.addEventListener('click', () => {
    if (gameState.selectionOption !== null) {
      const result = document.querySelector('.result');
      result.innerText =
        gameState.selectionOption == 'true' ? 'Correct' : 'Wrong';

      const options = document.querySelectorAll('.option');
      options.forEach(option => {
        option.style.backgroundColor = option.value == 'true' ? 'green' : 'red';
      });
    }
  });
}

function resetGameUI() {
  gameState.selectionOption = null;
  const options = document.querySelectorAll('.option');
  options.forEach(option => {
    option.style.backgroundColor = '';
  });
  const result = document.querySelector('.result');
  result.innerText = '';
}

function restartGame() {
  gameState.id = 0;
  gameState.start = true;
  gameState.selectionOption = null;
  resetGameUI();
}

function nextQuestion() {
  const nextQuestionEl = document.querySelector('.next');
  nextQuestionEl.addEventListener('click', () => {
    gameState.start = false;
    if (gameState.id < gameState.questions.length - 1) {
      gameState.id++;
      updateGameQuestion(gameState.id);
    }
    resetGameUI();
  });
}

if (gameState.start) {
  updateGameQuestion(gameState.id);
}

updateSelectedAnswer();
evaluateChosenAnswer();
nextQuestion();

const restartButton = document.querySelector('.restart');
restartButton.addEventListener('click', restartGame);

// Racetrack

// const moveForward = event => {
//   if (event.key === 'p') {
//     const car = document.querySelector('.user');
//     if (car.nextElementSibling) {
//       car.classList.remove('user');
//       car.nextElementSibling.classList.add('user');
//     } else {
//       alert('You have escaped, well done!');
//       window.location.reload();
//     }
//   } else if (event.key === 'q') {
//     const bird = document.querySelector('.owl');
//     if (bird.classList.contains('user') && bird.classList.contains('owl')) {
//       alert('Game over, the owl caught you');
//       window.location.reload();
//     } else bird.classList.remove('owl');
//     bird.nextElementSibling.classList.add('owl');
//   }
// };

// Add an event listener on keyup which calls a function

// Functions for the quiz
