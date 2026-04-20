const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const feedbackEl = document.getElementById("feedback");
const scoreEl = document.getElementById("score");
const nextBtn = document.getElementById("nextBtn");

let currentQuestion = 0;
let score = 0;

const questions = [
  {
    question: "A recipe uses 2 cups of sugar for 8 cookies. How many cups are needed for 16 cookies?",
    answers: ["2", "4", "6", "8"],
    correct: 1
  },
  {
    question: "A bike travels 30 miles in 2 hours. What is the unit rate?",
    answers: ["15 miles/hour", "60 miles/hour", "10 miles/hour", "20 miles/hour"],
    correct: 0
  },
  {
    question: "Simplify: 3(4 + 5)",
    answers: ["27", "20", "12", "45"],
    correct: 0
  },
  {
    question: "What is the area of a rectangle with length 6 and width 4?",
    answers: ["10", "24", "20", "12"],
    correct: 1
  },
  {
    question: "0.75 as a fraction is:",
    answers: ["3/4", "1/2", "2/3", "4/5"],
    correct: 0
  }
];

function loadQuestion() {
  nextBtn.disabled = true;
  feedbackEl.textContent = "";

  let q = questions[currentQuestion];
  questionEl.textContent = q.question;
  answersEl.innerHTML = "";

  q.answers.forEach((answer, index) => {
    let btn = document.createElement("button");
    btn.textContent = answer;
    btn.onclick = () => selectAnswer(btn, index);
    answersEl.appendChild(btn);
  });
}

function selectAnswer(button, index) {
  let correctIndex = questions[currentQuestion].correct;
  let buttons = answersEl.children;

  for (let btn of buttons) {
    btn.disabled = true;
  }

  if (index === correctIndex) {
    button.classList.add("correct");
    feedbackEl.textContent = "Correct!";
    score++;
  } else {
    button.classList.add("wrong");
    buttons[correctIndex].classList.add("correct");
    feedbackEl.textContent = "Not quite.";
  }

  scoreEl.textContent = "Score: " + score + " / " + questions.length;
  nextBtn.disabled = false;
}

nextBtn.onclick = () => {
  currentQuestion++;

  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    questionEl.textContent = "Quiz Complete!";
    answersEl.innerHTML = "";
    feedbackEl.textContent = "Final Score: " + score + " / " + questions.length;
    nextBtn.style.display = "none";
  }
};

loadQuestion();
