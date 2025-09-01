
export const getElements = () => {
  const els = {
    createNewTask: document.getElementById('addTaskBtn'),
    createNewProject: document.getElementById('addProjectBtn'),
    currentProject: document.getElementById('currentProject'),
    projectsList: document.getElementById('project-list'),
    
    taskTitle: document.getElementById('taskTitle'),
    taskDeadline: document.getElementById('taskDeadline'),
    deleteTaskBtn: document.getElementById('taskDelete'),

    createTaskModal: document.getElementById('createTaskModal'),
    taskNameInput: document.getElementById('taskNameInput'),
    taskDueDateInput:document.getElementById('taskDueDate'),
    taskProject: document.getElementById('taskproject'),
    submitTaskBtn: document.getElementById('submitButton'),

    createProjectModal: document.getElementById('createProjectModal'),
    projectNameInput: document.getElementById('projectName'),
    submitProjectBtn: document.getElementById('submitProjectButton')
  }

  Object.entries(els).forEach(([key, value]) => {
    if (!value) {
      console.error(`Elemento com ID "${key}" não encontrado no DOM`);
    }
  });

  return els;
}