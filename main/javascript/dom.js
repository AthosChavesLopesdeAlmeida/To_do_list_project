export const els = () => {
  const elements = {
    addTaskBtn: document.getElementById('addTaskBtn'),
    addProjectBtn: document.getElementById('addProjectBtn'), // Corrigido
    currentProject: document.getElementById('currentProject'),
    projectsList: document.getElementById('projectsList'),
    taskTitle: document.querySelector('.taskTitle'), // Corrigido para classe
    createTaskModal: document.getElementById('createTaskModal'),
    taskNameInput: document.getElementById('taskNameInput'), // Corrigido
    taskDueDateInput: document.getElementById('taskDueDate'),
    taskProjectInput: document.getElementById('taskProject'), // Corrigido
    submitTaskBtn: document.getElementById('submitButton'),
    createProjectModal: document.getElementById('createProjectModal'),
    projectNameInput: document.getElementById('projectName'),
    submitProjectBtn: document.getElementById('submitProjectButton')
  };

  Object.entries(elements).forEach(([key, value]) => {
    if (!value) console.error(`Elemento com ID/classe "${key}" não encontrado`);
  });

  return elements;
};