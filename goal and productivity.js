// 1. VARIABLES
let timerInterval;
let seconds = 0;
let isRunning = false;
let totalSecondsStudied = 0;
let dailyGoalSeconds = 0;

// 2. LOGIN FUNCTIONS
function attemptLogin() {
    const idField = document.getElementById('student-id');
    const passField = document.getElementById('password');
    
    if (!idField || !passField) return;

    const id = idField.value;
    const pass = passField.value;
    const errorMsg = document.getElementById('error-msg');

    // LOGIN VALIDATION
    if (id === "Alice" && pass === "study") {
        document.getElementById('login-page').classList.add('hidden');
        document.getElementById('dashboard').classList.remove('hidden');
        errorMsg.style.display = "none";
        
        // --- NEW LINE HERE ---
        // This takes the ID (e.g., "student1") and puts it in the Welcome title
        document.getElementById('username-display').innerText = id;

        loadUserData(); 
    } else {
        errorMsg.style.display = "block";
    }
}

function logout() {
    location.reload(); 
}

// 3. GOAL SETTING
function setGoal() {
    const hours = document.getElementById('goal-input').value;
    if (hours > 0) {
        dailyGoalSeconds = hours * 3600; 
        alert(`Goal set for ${hours} hours!`);
        updateProgressBar();
    } else {
        alert("Please enter a valid number of hours.");
    }
}

// 4. TIMER FUNCTIONS
function startTimer() {
    if (!isRunning) {
        isRunning = true;
        document.getElementById('start-btn').classList.add('hidden');
        document.getElementById('stop-btn').classList.remove('hidden');
        
        timerInterval = setInterval(() => {
            seconds++;
            displayTime(seconds);
        }, 1000);
    }
}

function stopTimer() {
    if (isRunning) {
        clearInterval(timerInterval);
        isRunning = false;
        totalSecondsStudied += seconds;
        seconds = 0;
        displayTime(0);
        document.getElementById('start-btn').classList.remove('hidden');
        document.getElementById('stop-btn').classList.add('hidden');
        updateProgressBar();
        saveUserData(); 
    }
}

function displayTime(s) {
    const hrs = Math.floor(s / 3600);
    const mins = Math.floor((s % 3600) / 60);
    const secs = s % 60;
    
    const formatted = 
        (hrs < 10 ? "0" + hrs : hrs) + ":" + 
        (mins < 10 ? "0" + mins : mins) + ":" + 
        (secs < 10 ? "0" + secs : secs);

    document.getElementById('timer-display').innerText = formatted;
}

// 5. PROGRESS & TRENDS
function updateProgressBar() {
    const totalMins = Math.floor(totalSecondsStudied / 60);
    document.getElementById('total-time').innerText = totalMins;

    if (dailyGoalSeconds > 0) {
        const percentage = Math.min((totalSecondsStudied / dailyGoalSeconds) * 100, 100);
        document.getElementById('progress-fill').style.width = percentage + "%";
        document.getElementById('progress-text').innerText = Math.floor(percentage) + "%";
    }
}

// 6. LOCAL STORAGE
function saveUserData() {
    localStorage.setItem('totalSeconds', totalSecondsStudied);
}

function loadUserData() {
    const savedTime = localStorage.getItem('totalSeconds');
    if (savedTime) {
        totalSecondsStudied = parseInt(savedTime);
        updateProgressBar();
    }
}