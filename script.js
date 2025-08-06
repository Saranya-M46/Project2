const addBtn = document.getElementById('addBtn');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const totalCount = document.getElementById('totalCount');
const completedCount = document.getElementById('completedCount');
const pendingCount = document.getElementById('pendingCount');
const noTasksMsg = document.getElementById('noTasksMsg');

function updateStats() {
  const tasks = taskList.querySelectorAll('li');
  const completed = taskList.querySelectorAll('li.done');
  totalCount.textContent = tasks.length;
  completedCount.textContent = completed.length;
  pendingCount.textContent = tasks.length - completed.length;
  noTasksMsg.style.display = tasks.length === 0 ? 'block' : 'none';
}

addBtn.addEventListener('click', () => {
  const text = taskInput.value.trim();
  if (text === "") return;

  const li = document.createElement('li');
  li.innerHTML = `
    <span class="task">${text}</span>
    <button class="deleteBtn">✖</button>
  `;

  li.querySelector('.task').addEventListener('click', () => {
    li.classList.toggle('done');
    updateStats();
  });

  li.querySelector('.deleteBtn').addEventListener('click', () => {
    li.remove();
    updateStats();
  });

  taskList.appendChild(li);
  taskInput.value = "";
  updateStats();
});

updateStats();
