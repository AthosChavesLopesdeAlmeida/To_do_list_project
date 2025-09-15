import getEls from './dom.js';
import { createProject, addProjectButton } from './criarProjeto.js';
import { createTask } from './criarTarefa.js';
import { projetos } from './main.js';

// função que cria a interface da tarefa
export function createTaskInterface(task) {
  const els = getEls();

  const taskDiv = document.createElement('div');
  taskDiv.classList.add('task');
  taskDiv.id = `task-${task.getId()}`;
  taskDiv.setAttribute('data-project-id', task.getProjectId());
  taskDiv.style.display = 'none'; // Começa escondido

  const taskDivTitle = document.createElement('h4');
  taskDivTitle.classList.add('taskTitle');
  taskDivTitle.textContent = task.getTitle();

  const taskDivDueDate = document.createElement('p');
  taskDivDueDate.classList.add('taskDeadline');
  taskDivDueDate.textContent = task.getDueDate() ? `Prazo: ${task.getDueDate()}` : '';
  
  const deleteBtn = document.createElement('button');
  deleteBtn.classList.add('deleteTaskBtn')
  deleteBtn.textContent = 'excluir'


  taskDiv.appendChild(taskDivTitle);
  taskDiv.appendChild(taskDivDueDate);
  taskDiv.appendChild(deleteBtn)

  if (els.tasksContainer) {
    els.tasksContainer.appendChild(taskDiv);
  }
};




// função que renderiza os projetos e tarefas na interface
export function renderProjectsTasks(project) {
  const els = getEls();
  if (!els.tasksContainer) return;
  els.tasksContainer.innerHTML = '';
  project.getTasks().forEach(task => {
    createTaskInterface(task);
  })
};




// função que mostra as tarefas do projeto selecionado
export function showTasksForProject(projectId) {
  const els = getEls();
  if (!els.tasksContainer) return;
  const allTasks = els.tasksContainer.querySelectorAll('.task');
  allTasks.forEach(taskDiv => {
    if (taskDiv.getAttribute('data-project-id') === projectId) {
      taskDiv.style.display = 'block';
    } else {
      taskDiv.style.display = 'none';
    }
  });
}



// deletar tarefa