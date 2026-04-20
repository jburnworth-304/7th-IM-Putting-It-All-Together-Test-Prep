const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const feedbackEl = document.getElementById("feedback");
const workEl = document.getElementById("work");
const scoreEl = document.getElementById("score");
const nextBtn = document.getElementById("nextBtn");

let current = 0;
let score = 0;

const questions = [
  { q:"2/3 of 18 is:", a:["6","9","12","18"], c:2, w:"18 ÷ 3 = 6, 6 × 2 = 12" },
  { q:"120 miles in 3 hours unit rate:", a:["30","40","60","20"], c:1, w:"120 ÷ 3 = 40" },
  { q:"3(x+4), x=2", a:["18","12","10","14"], c:0, w:"3(6)=18" },
  { q:"Area 5×7", a:["12","35","25","30"], c:1, w:"5×7=35" },
  { q:"0.5 as fraction", a:["1/4","1/2","2/3","3/4"], c:1, w:"0.5=1/2" },
  { q:"Perimeter square side 6", a:["12","24","36","18"], c:1, w:"4×6=24" },
  { q:"4/5 + 1/5", a:["1","2/5","3/5","4/5"], c:0, w:"5/5=1" },
  { q:"10% of 50", a:["5","10","15","20"], c:0, w:"0.1×50=5" },
  { q:"6×3+2", a:["20","18","24","22"], c:0, w:"18+2=20" },
  { q:"Largest number", a:["0.6","1/2","0.4","0.3"], c:0, w:"0.6 is largest" },
  { q:"3/4 of 20", a:["10","15","20","5"], c:1, w:"20÷4=5, 5×3=15" },
  { q:"Area 3×9", a:["12","27","18","30"], c:1, w:"3×9=27" },
  { q:"8+2×5", a:["50","18","30","16"], c:1, w:"2×5=10, 8+10=18" },
  { q:"1/2+1/4", a:["3/4","2/6","1/3","1/2"], c:0, w:"2/4+1/4=3/4" },
  { q:"60 miles in 1.5 hrs", a:["30","40","50","60"], c:1, w:"60÷1.5=40" },
  { q:"2x+3, x=5", a:["13","10","15","11"], c:0, w:"10+3=13" },
  { q:"Volume 2×3×4", a:["9","24","18","12"], c:1, w:"2×3×4=24" },
  { q:"0.25 fraction", a:["1/2","1/4","3/4","2/5"], c:1, w:"0.25=1/4" },
  { q:"5(2+6)", a:["40","30","25","20"], c:0, w:"5×8=40" },
  { q:"Smallest", a:["0.9","3/4","0.8","1"], c:1, w:"3/4=0.75 smallest" }
];

function loadQuestion() {
  let q = questions[current];

  questionEl.textContent = q.q;
  answersEl.innerHTML = "";
  feedbackEl.textContent = "";
  workEl.textContent = "";
  nextBtn.disabled = true;

  q.a.forEach((ans, i) => {
    let btn = document.createElement("button");
    btn.textContent = ans;
    btn.onclick = () => checkAnswer(btn, i);
    answersEl.appendChild(btn);
  });

  scoreEl.textContent = `Score: ${score} / 20`;
}

function checkAnswer(btn, i) {
  let q = questions[current];
  let buttons = answersEl.children;

  for (let b of buttons) b.disabled = true;

  if (i === q.c) {
    btn.classList.add("correct");
    feedbackEl.textContent = "Correct!";
    score++;
  } else {
    btn.classList.add("wrong");
    buttons[q.c].classList.add("correct");
    feedbackEl.textContent = "Not quite.";
  }

  workEl.textContent = "Work:\n" + q.w;
  scoreEl.textContent = `Score: ${score} / 20`;
  nextBtn.disabled = false;
}

nextBtn.onclick = () => {
  current++;

  if (current < questions.length) {
    loadQuestion();
  } else {
    questionEl.textContent = "Quiz Complete!";
    answersEl.innerHTML = "";
    feedbackEl.textContent = "";
    workEl.textContent = "";
    nextBtn.style.display = "none";
    scoreEl.textContent = `Final Score: ${score} / 20`;
  }
};

loadQuestion();
