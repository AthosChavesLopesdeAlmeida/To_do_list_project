import getEls from './dom.js';
import { createProject, addProjectButton } from './criarProjeto.js';
import { createTask } from './criarTarefa.js';
import { renderProjectsTasks, createTaskInterface, showTasksForProject, deleteTaskFromDOM} from './render.js'

// Array global de projetos
export const projetos = [];





// Função para registrar um novo projeto
function handleCreateProject(name) {
  const project = createProject(name);
  projetos.push(project);
  return project;
}





// Função para adicionar projeto ao select de tarefas
function addProjectToSelect(project, selectEl) {
  const option = document.createElement('option');
  option.value = project.getId();
  option.innerHTML = project.getName();
  selectEl.appendChild(option);
}





// Função para criar tarefa e adicionar ao projeto correto
function handleCreateTask(title, dueDate, projectId) {
  const task = createTask(title, dueDate, projectId);
  const project = projetos.find(p => p.getId() === projectId);
  if (project) {
    project.addTask(task);
    console.log('Tarefas do projeto:', project.getTasks());
    return task;
  }
  return null;
}









// Event listeners
document.addEventListener('DOMContentLoaded', () => {
  const els = getEls();




  // Abrir modal de criar projeto
  if (els.addProjectBtn) {
    els.addProjectBtn.addEventListener('click', () => {
      els.createProjectModal.style.display = 'block';
      els.createTaskModal.style.display = 'none';
    });
  }





  // Salvar novo projeto
  if (els.submitProjectBtn) {
    els.submitProjectBtn.addEventListener('click', () => {
      const name = els.projectNameInput.value;
      if (!name.trim()) return;
      const project = handleCreateProject(name);
      addProjectButton(project);
      if (els.taskProjectInput) {
        addProjectToSelect(project, els.taskProjectInput);
      }
      els.createProjectModal.style.display = 'none';
      els.projectNameInput.value = '';
    });
  }




  // Abrir modal de criar tarefa
  if (els.addTaskBtn) {
    els.addTaskBtn.addEventListener('click', () => {
      els.createTaskModal.style.display = 'block';
      els.createProjectModal.style.display = 'none';
    });
  }




  // Salvar nova tarefa
  if (els.submitTaskBtn) {
    els.submitTaskBtn.addEventListener('click', () => {
      els.createTaskModal.style.display = 'none';
      const title = els.taskNameInput.value;
      const dueDate = els.taskDueDateInput.value;
      const projectId = els.taskProjectInput.value;
      if (!title.trim() || !projectId) return;
      const task = handleCreateTask(title, dueDate, projectId);
      if (task) {
        createTaskInterface(task); // Renderiza a tarefa na interface
      }
    });
  }


  // Excluir
  if (els.deleteTaskBtn) {
    els.deleteTaskBtn.addEventListener('click', () => {
      removeTask(task.getId());
      deleteTaskFromDOM(task.getId())
    })
  }

});