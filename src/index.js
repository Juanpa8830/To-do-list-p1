import './styles/main.scss'
import icon1 from './assets/deletebin.svg'
import icon2 from './assets/align-left.svg'
import icon3 from './assets/editpen.svg'
import icon4 from './assets/ellipsis-v.svg'


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
            <img class="dots" src="./images/ellipsis-v.svg" alt="icon">
            <ul class="task-menu">
                <li><img class="dots" src="./images/editpen.svg" alt="edit"></li>
                <li><img class="dots" src="./images/deletebin.svg" alt="edit"></li>
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
