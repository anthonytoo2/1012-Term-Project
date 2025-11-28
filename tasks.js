// tasks.js - stores tasks in localStorage and displays them with aligned icons
const STORAGE_KEY = 'student_tasks_v1';

document.addEventListener('DOMContentLoaded', () => {
    renderTasks();
});

function getTasks() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        return raw ? JSON.parse(raw) : [];
    } catch (e) {
        console.error('Failed to parse tasks from storage', e);
        return [];
    }
}

function saveTasks(tasks) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    renderTasks();
}

function addTask() {
    const input = document.getElementById('task-input');
    const text = input.value.trim();
    if (!text) return;

    const tasks = getTasks();
    tasks.push({ text: text, done: false, createdAt: Date.now() });
    saveTasks(tasks);
    input.value = '';
    input.focus();
}

function toggleTask(index) {
    const tasks = getTasks();
    if (!tasks[index]) return;
    tasks[index].done = !tasks[index].done;
    saveTasks(tasks);
}

function removeTask(index) {
    const tasks = getTasks();
    tasks.splice(index, 1);
    saveTasks(tasks);
}

function renderTasks() {
    const list = document.getElementById('task-list');
    const tasks = getTasks();
    list.innerHTML = '';

    if (!tasks.length) {
        document.getElementById('task-count').innerText = 'No tasks yet.';
        return;
    }

    document.getElementById('task-count').innerText = `You have ${tasks.length} task(s).`;

    tasks.forEach((t, i) => {
        const li = document.createElement('li');
        li.className = t.done ? 'task-completed' : '';

        // icon (using an emoji as simple "task icon" — keeps consistent alignment)
        const icon = document.createElement('span');
        icon.className = 'task-icon';
        icon.setAttribute('aria-hidden', 'true');
        icon.innerText = '⏰';

        // checkbox
        const cb = document.createElement('input');
        cb.type = 'checkbox';
        cb.className = 'task-checkbox';
        cb.checked = !!t.done;
        cb.addEventListener('change', () => toggleTask(i));

        // label
        const label = document.createElement('span');
        label.className = 'task-label';
        label.innerText = t.text;

        // remove button
        const del = document.createElement('button');
        del.type = 'button';
        del.innerText = '✖';
        del.title = 'Delete task';
        del.style.marginLeft = '10px';
        del.addEventListener('click', () => removeTask(i));

        li.appendChild(icon);
        li.appendChild(cb);
        li.appendChild(label);
        li.appendChild(del);

        list.appendChild(li);
    });
}
