import getEls from './dom.js';

// factory function do projeto
export function createProject(name) {
  const id = crypto.randomUUID();
  let tasks = [];
  return {
    getId: () => id,
    getName: () => name,
    setName: (newName) => { name = newName; },
    getTasks: () => tasks.slice(),
    addTask: (task) => { tasks.push(task); },
    removeTask: (taskId) => { tasks = tasks.filter(t => t.getId() !== taskId)}
  }
}

// Criando o botão do projeto na sidebar
export function addProjectButton(project) {
  const els = getEls();
  const li = document.createElement('li');
  const btn = document.createElement('button')
  btn.classList.add('nav-btn');
  btn.textContent = project.getName();
  btn.id = `project-${project.getId()}`;
  
  btn.addEventListener('click', () => {
    if (els.currentProjectTitle) {
      els.currentProjectTitle.innerHTML = project.getName()
    }
  })
  
  li.appendChild(btn);
  if (els.projectList) {
    els.projectList.appendChild(li);
  }
}