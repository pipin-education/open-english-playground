
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Numbers 1–10 | Open English Playground</title>
  <link rel="stylesheet" href="style.css">
  <script src="numbers.js" defer></script>
</head>
<body>
  <main class="container">
    <h1>🔢 Let's Learn Numbers!</h1>
    <p class="subtitle">Learn to count from 1 to 10!</p>

    <h2 class="question">Learn the Numbers</h2>

    <div class="choices">
      <button onclick="speakNumber(1)">1 - One</button>
      <button onclick="speakNumber(2)">2 - Two</button>
      <button onclick="speakNumber(3)">3 - Three</button>
      <button onclick="speakNumber(4)">4 - Four</button>
      <button onclick="speakNumber(5)">5 - Five</button>
      <button onclick="speakNumber(6)">6 - Six</button>
      <button onclick="speakNumber(7)">7 - Seven</button>
      <button onclick="speakNumber(8)">8 - Eight</button>
      <button onclick="speakNumber(9)">9 - Nine</button>
      <button onclick="speakNumber(10)">10 - Ten</button>
    </div>

    <p id="feedback" aria-live="polite">
      Tap a number to hear its English pronunciation!
    </p>

    <h2 class="question">Practice Time!</h2>
    <p id="counting-question">How many stars? ⭐⭐⭐</p>

    <div class="choices" id="quiz-choices"></div>
    <p id="quiz-feedback" aria-live="polite"></p>
    <button id="next-question" hidden>Next Question ➜</button>

    <p><a href="index.html">← Back to Home</a></p>
  </main>
</body>
</html>
