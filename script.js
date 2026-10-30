"use strict";

const questions = [
  {
    emoji: "🔴",
    question: "What color is this?",
    choices: ["Blue", "Red", "Green", "Yellow"],
    answer: "Red"
  },
  {
    emoji: "🔵",
    question: "What color is this?",
    choices: ["Red", "Blue", "Black", "White"],
    answer: "Blue"
  },
  {
    emoji: "🟡",
    question: "What color is this?",
    choices: ["Purple", "Green", "Yellow", "Orange"],
    answer: "Yellow"
  },
  {
    emoji: "🟢",
    question: "What color is this?",
    choices: ["Green", "Black", "Blue", "White"],
    answer: "Green"
  },
  {
    emoji: "🟣",
    question: "What color is this?",
    choices: ["Orange", "Purple", "Red", "Yellow"],
    answer: "Purple"
  }
];

let currentQuestion = 0;
let score = 0;
let answered = false;

const questionTitle = document.querySelector(".question");
const colorDisplay = document.querySelector(".color-display");
const choicesContainer = document.querySelector(".choices");
const feedback = document.getElementById("feedback");

const progress = document.createElement("p");
progress.id = "progress";
feedback.before(progress);

const nextButton = document.createElement("button");
nextButton.textContent = "Next Question ➜";
nextButton.hidden = true;
nextButton.addEventListener("click", nextQuestion);
feedback.after(nextButton);

function showQuestion() {
  const item = questions[currentQuestion];

  answered = false;

  questionTitle.textContent = item.question;
  colorDisplay.textContent = item.emoji;
  progress.textContent =
    `Question ${currentQuestion + 1} of ${questions.length}`;

  feedback.textContent = "Choose the correct answer!";
  feedback.style.color = "#344054";

  nextButton.hidden = true;
  choicesContainer.innerHTML = "";

  item.choices.forEach(choice => {
    const button = document.createElement("button");

    button.type = "button";
    button.textContent = choice;

    button.addEventListener("click", () => {
      checkAnswer(choice);
    });

    choicesContainer.appendChild(button);
  });
}

function checkAnswer(answer) {
  if (answered) return;

  answered = true;

  const correctAnswer = questions[currentQuestion].answer;

  if (answer === correctAnswer) {
    score++;

    feedback.textContent = "🎉 Excellent! Correct answer!";
    feedback.style.color = "green";
  } else {
    feedback.textContent =
      `😊 Good try! The correct answer is ${correctAnswer}.`;
    feedback.style.color = "orange";
  }

  Array.from(choicesContainer.children).forEach(button => {
    button.disabled = true;
  });

  nextButton.textContent =
    currentQuestion === questions.length - 1
      ? "See My Score 🏆"
      : "Next Question ➜";

  nextButton.hidden = false;
}

function nextQuestion() {
  currentQuestion++;

  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  questionTitle.textContent = "Quiz Completed! 🎉";
  colorDisplay.textContent = "🏆";
  choicesContainer.innerHTML = "";

  progress.textContent = "You finished all the questions!";

  feedback.textContent =
    `Your score: ${score} out of ${questions.length}`;

  feedback.style.color = "green";

  nextButton.textContent = "Try Again 🔄";
  nextButton.hidden = false;

  nextButton.onclick = restartQuiz;
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;

  nextButton.onclick = nextQuestion;

  showQuestion();
}

showQuestion();
