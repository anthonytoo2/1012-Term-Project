// timer.js

// --- DOM Elements ---
const studyInput = document.getElementById("study-time");
const breakInput = document.getElementById("break-time");
const timerDisplay = document.getElementById("timer");
const startBtn = document.getElementById("start-btn");
const pauseBtn = document.getElementById("pause-btn");
const resetBtn = document.getElementById("reset-btn");
const breakMessage = document.getElementById("break-message");
const breakTimerDisplay = document.getElementById("break-timer");
const pointsDisplay = document.getElementById("points");
const pointsMeta = document.getElementById("points-meta");
const progressFill = document.getElementById("progress-fill");
const progressText = document.getElementById("progress-text");
const rewardBtn = document.getElementById("reward-btn");

// --- Timer Variables ---
let studyDuration = parseInt(studyInput.value) * 60; // in seconds
let breakDuration = parseInt(breakInput.value) * 60; // in seconds
let remainingTime = studyDuration;
let timerInterval = null;
let inBreak = false;
let totalPoints = 0;

// --- Helper Functions ---
function formatTime(seconds) {
  const m = Math.floor(seconds / 60).toString().padStart(2, "0");
  const s = (seconds % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}

function updateDisplay() {
  timerDisplay.textContent = formatTime(remainingTime);
}

function updatePointsAndProgress() {
  pointsDisplay.textContent = `${totalPoints} Points`;
  pointsMeta.textContent = totalPoints;

  // Assuming 100 points is full progress for demo
  const progressPercent = Math.min((totalPoints / 100) * 100, 100);
  progressFill.style.width = `${progressPercent}%`;
  progressText.textContent = `${Math.round(progressPercent)}%`;
}

function startTimer() {
  startBtn.disabled = true;
  pauseBtn.disabled = false;

  timerInterval = setInterval(() => {
    if (remainingTime > 0) {
      remainingTime--;
      updateDisplay();

      // Add points for study minutes only when not in break
      if (!inBreak && remainingTime % 60 === 0) {
        totalPoints++;
        updatePointsAndProgress();
      }
    } else {
      clearInterval(timerInterval);

      if (!inBreak) {
        // Start break
        inBreak = true;
        remainingTime = parseInt(breakInput.value) * 60;
        breakMessage.style.display = "block";
        startTimer(); // restart timer for break
      } else {
        // End break
        inBreak = false;
        remainingTime = parseInt(studyInput.value) * 60;
        breakMessage.style.display = "none";
        startBtn.disabled = false;
        pauseBtn.disabled = true;
        updateDisplay();
      }
    }

    if (inBreak) {
      breakTimerDisplay.textContent = formatTime(remainingTime);
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(timerInterval);
  startBtn.disabled = false;
  pauseBtn.disabled = true;
}

function resetTimer() {
  clearInterval(timerInterval);
  inBreak = false;
  remainingTime = parseInt(studyInput.value) * 60;
  breakMessage.style.display = "none";
  startBtn.disabled = false;
  pauseBtn.disabled = true;
  updateDisplay();
}

// --- Event Listeners ---
startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resetBtn.addEventListener("click", resetTimer);

// Reward button (demo functionality)
rewardBtn.addEventListener("click", () => {
  alert(`You have ${totalPoints} points! Treat yourself!`);
});

// Update timer if user changes input
studyInput.addEventListener("change", () => {
  studyDuration = parseInt(studyInput.value) * 60;
  if (!inBreak) remainingTime = studyDuration;
  updateDisplay();
});

breakInput.addEventListener("change", () => {
  breakDuration = parseInt(breakInput.value) * 60;
  if (inBreak) remainingTime = breakDuration;
  updateDisplay();
});

// Initialize display
updateDisplay();
updatePointsAndProgress();
