import './styles/main.scss';

const userInput = document.querySelector('.task-input input');
let tasks = JSON.parse(localStorage.getItem('Tasks'));
const tasksList = document.getElementById('task-box');

function showTasks() {
  let li = '';
  if (tasks) {
    tasks.forEach((task, id) => {
      li += `<li class="task">
        <label for="${id}">
            <input id="checkbox" value="true" type="checkbox">
            <p>${task.description}</p>
        </label>
        <div class="settings">
            <img class="dots" src="./dist/ellipsis-v.svg" alt="icon">
            <ul class="task-menu">
                <li><img class="dots" src="./dist/editpen.svg" alt="edit"></li>
                <li><img class="dots" src="./dist/deletebin.svg" alt="edit"></li>
            </ul>
        </div>
     </li>`;
    });
  }
  tasksList.innerHTML = li;
}
showTasks();

userInput.addEventListener('keyup', (e) => {
  const userTask = userInput.value.trim();
  if (e.key === 'Enter' && userTask) {
    if (!tasks) {
      tasks = [];
    }
    userInput.value = '';
    const taskInfo = { description: userTask, status: 'pending' };
    tasks.push(taskInfo);
    localStorage.setItem('Tasks', JSON.stringify(tasks));
    showTasks();
  }
});
