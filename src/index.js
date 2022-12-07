import './styles/main.scss';
import _, {constant} from "lodash"

const tasksList = document.getElementById('task-box');

const tasks = [
    {
        id: 1,
        description: 'complete microverse tasks',
        "completed": "false"
      },
      {
        id: 2,
        description: 'feed my pet',
        completed: "false"
      },
      {
        id: 3,
        description: 'make the bed',
        completed: "false"
      }
];


    for (let i=0; i<tasks.length; i+=1){
        const data =`<li class="task">
          <label for="${tasks[i].id}">
              <input id="checkbox" value="true" type="checkbox">
              <p>${tasks[i].description}</p>
          </label>
          <div class="settings">
              <img class="dots" src="./dist/ellipsis-v.svg" alt="icon">
              <ul class="task-menu">
                  <li><img class="dots" src="" alt="edit"></li>
                  <li><img class="dots" src="./dist/deletebin.svg" alt="edit"></li>
              </ul>
          </div>
       </li>`;
       tasksList.innerHTML += data;
     };
      
    
  
  





