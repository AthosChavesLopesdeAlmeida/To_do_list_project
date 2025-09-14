import getEls from './dom.js';
import { createProject, addProjectButton } from './criarProjeto.js';
import { createTask } from './criarTarefa.js';

// Projeto
const projetos = [];

document.addEventListener('DOMContentLoaded', () => {
  const els = getEls();
  if (els.addProjectBtn) {
    els.addProjectBtn.addEventListener('click', () => {
      els.createProjectModal.style.display = 'block';
      els.createTaskModal.style.display = 'none';
    });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const els = getEls();

  // Salvar novo projeto
  if (els.submitProjectBtn) {
    els.submitProjectBtn.addEventListener('click', () => {
      const project = createProject(els.projectNameInput.value);
      projetos.push(project);
      addProjectButton(project);

      // Adicionar ao select de projetos na criação de tarefas
      if (els.taskProjectInput) {
        const option = document.createElement('option');
        option.value = project.getId();
        option.textContent = project.getName();
        els.taskProjectInput.appendChild(option);
      }

      els.createProjectModal.style.display = 'none';
      els.projectNameInput.value = '';
    });
  }
});

// Tarefa

document.addEventListener('DOMContentLoaded', () => {
  const els = getEls();
  if (els.addTaskBtn) {
    els.addTaskBtn.addEventListener('click', () => {
      els.createTaskModal.style.display = 'block';
      els.createProjectModal.style.display = 'none';
    })
  }
})

document.addEventListener('DOMContentLoaded', () => {
  const els = getEls();
  if (els.submitTaskBtn) {
    els.submitTaskBtn.addEventListener('click', () => {
      els.createTaskModal.style.display = 'none';

      // Pegue os valores dos inputs
      const title = els.taskNameInput.value;
      const dueDate = els.taskDueDateInput.value;
      const projectId = els.taskProjectInput.value

      // Crie a tarefa
      const task = createTask(title, dueDate, projectId);

      // encontrar o projeto correto e adicionar a tarefa
      const project = projetos.find(p => p.getId() === projectId)
      if (project) {
        project.addTask(task)
        window.alert('Tarefas do projeto:', project.getTasks())
      }
    })
  }
})