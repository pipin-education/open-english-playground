
"use strict";

// Check the learner's answer
function checkAnswer(answer) {
  const feedback = document.getElementById("feedback");

  if (!feedback) {
    console.error("Feedback element was not found.");
    return;
  }

  if (answer === "Red") {
    feedback.textContent =
      "🎉 Excellent! The answer is RED!";
    feedback.style.color = "green";
  } else {
    feedback.textContent =
      "😊 Try again! You can do it!";
    feedback.style.color = "orange";
  }
}

// Make the function available to HTML buttons
window.checkAnswer = checkAnswer;
