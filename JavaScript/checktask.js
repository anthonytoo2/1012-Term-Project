 // Add task
        function addTask() {
            const taskInput = document.getElementById('task-input');
            const taskList = document.getElementById('task-list');
            const taskCount = document.getElementById('task-count');

            if (taskInput.value.trim() === "") return;

            const li = document.createElement('li');

            const span = document.createElement('span');
            span.textContent = taskInput.value;

            const btnDiv = document.createElement('div');
            btnDiv.className = 'task-buttons';

            const editBtn = document.createElement('button');
            editBtn.textContent = 'Edit';
            editBtn.onclick = () => {
                const newTask = prompt("Edit task:", span.textContent);
                if (newTask !== null && newTask.trim() !== "") {
                    span.textContent = newTask;
                }
            };

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.onclick = () => {
                taskList.removeChild(li);
                updateTaskCount();
            };

            btnDiv.appendChild(editBtn);
            btnDiv.appendChild(deleteBtn);

            li.appendChild(span);
            li.appendChild(btnDiv);

            taskList.appendChild(li);
            taskInput.value = "";

            updateTaskCount();
        }

        function updateTaskCount() {
            const taskList = document.getElementById('task-list');
            const taskCount = document.getElementById('task-count');
            taskCount.textContent = taskList.children.length + " task(s)";
        }

        // Save Study Goals
        function saveGoals() {
            const daily = document.getElementById('daily-goal').value.trim();
            const monthly = document.getElementById('monthly-goal').value.trim();
            const yearly = document.getElementById('yearly-goal').value.trim();

            localStorage.setItem('dailyGoal', daily);
            localStorage.setItem('monthlyGoal', monthly);
            localStorage.setItem('yearlyGoal', yearly);

            const msg = document.getElementById('goal-message');
            msg.textContent = "Goals saved successfully!";
            setTimeout(() => { msg.textContent = ""; }, 3000);
        }

        // Load saved goals
        window.onload = function() {
            showMe();
            document.getElementById('daily-goal').value = localStorage.getItem('dailyGoal') || '';
            document.getElementById('monthly-goal').value = localStorage.getItem('monthlyGoal') || '';
            document.getElementById('yearly-goal').value = localStorage.getItem('yearlyGoal') || '';
        }