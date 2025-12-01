let timer = null;
let totalSeconds = 0;
let goalHours = 0;
let username = "";
const REWARD_MINUTES = 3; // reward after 3 minutes
let rewardShown = false;

// ----------------- LOGIN -----------------
function attemptLogin() {
    const id = document.getElementById("student-id").value;
    const pw = document.getElementById("password").value;

    if (id === "student" && pw === "1234") {
        username = id;
        document.getElementById("login-page").classList.add("hidden");
        document.getElementById("dashboard").classList.remove("hidden");
        document.getElementById("username-display").innerText = username;

        // Restore progress
        totalSeconds = parseInt(localStorage.getItem(`${username}_totalSeconds`)) || 0;
        rewardShown = localStorage.getItem(`${username}_rewardShown`) === "true";
        updateTimerDisplay();
        updateProgress();

        // Always start timer automatically
        startTimer();
    } else {
        document.getElementById("error-msg").style.display = "block";
    }
}

// ----------------- GOAL -----------------
function setGoal() {
    goalHours = parseInt(document.getElementById("goal-input").value) || 0;
    localStorage.setItem('goalHours', goalHours);
    alert("Daily Goal Set!");
}

// ----------------- TIMER -----------------
function startTimer() {
    if (timer) clearInterval(timer);

    timer = setInterval(() => {
        totalSeconds++;
        updateTimerDisplay();
        updateProgress();
        checkReward();
        saveProgressLive();
    }, 1000);

    document.getElementById("start-btn").classList.add("hidden");
    document.getElementById("stop-btn").classList.remove("hidden");
}

function stopTimer() {
    if (timer) clearInterval(timer);
    timer = null;
    updateProgress();
    saveProgressLive();

    document.getElementById("start-btn").classList.remove("hidden");
    document.getElementById("stop-btn").classList.add("hidden");
}

// ----------------- DISPLAY -----------------
function updateTimerDisplay() {
    const hrs = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
    const mins = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
    const secs = String(totalSeconds % 60).padStart(2, "0");
    document.getElementById("timer-display").innerText = `${hrs}:${mins}:${secs}`;
}

function updateProgress() {
    goalHours = parseInt(localStorage.getItem('goalHours')) || goalHours;
    if (goalHours === 0) return;

    const totalMins = Math.floor(totalSeconds / 60);
    document.getElementById("total-time").innerText = totalMins;

    const percentage = Math.min(100, Math.floor((totalMins / (goalHours * 60)) * 100));
    document.getElementById("progress-text").innerText = percentage + "%";
    document.getElementById("progress-fill").style.width = percentage + "%";
}

// ----------------- REWARD -----------------
function checkReward() {
    const mins = totalSeconds / 60;
    if (mins >= REWARD_MINUTES && !rewardShown) {
        rewardShown = true;
        localStorage.setItem(`${username}_rewardShown`, "true");

        // Stop timer before redirect
        if (timer) clearInterval(timer);
        saveProgressLive();

        // Redirect to reward page
        window.location.href = `StuReward.html?user=${encodeURIComponent(username)}&mins=${Math.floor(mins)}`;
    }
}

// ----------------- MISC -----------------
function cancelLogin() {
    document.getElementById("student-id").value = "";
    document.getElementById("password").value = "";
}

function forceReward() {
    window.location.href = `reward.html?user=${encodeURIComponent(username || 'tester')}&mins=${REWARD_MINUTES}`;
}

function logout() {
    saveProgressLive();
    localStorage.setItem(`${username}_rewardShown`, rewardShown ? "true" : "false");
    location.reload();
}

// ----------------- SAVE PROGRESS -----------------
function saveProgressLive() {
    if (username) {
        localStorage.setItem(`${username}_totalSeconds`, totalSeconds);
    }
}

// ----------------- INIT -----------------
document.addEventListener('DOMContentLoaded', () => {
    goalHours = parseInt(localStorage.getItem('goalHours')) || 0;
    if (goalHours) {
        document.getElementById('goal-input').value = goalHours;
    }
});
