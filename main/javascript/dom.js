let els = {}

document.addEventListener('DOMContentLoaded', () => {
  els = {
    projectList: document.getElementById('projectsList'),
    addProjectBtn: document.getElementById('addProjectBtn'),
    currentProjectTitle: document.getElementById('currentProject'),
    createProjectModal: document.getElementById('createProjectModal'),
    projectNameInput: document.getElementById('projectName'),
    submitProjectBtn: document.getElementById('submitProjectButton'),

    addTaskBtn: document.getElementById('addTaskBtn'),
    createTaskModal: document.getElementById('createTaskModal'),
    taskNameInput: document.getElementById('taskNameInput'),
    taskDueDateInput: document.getElementById('taskDueDateInput'),
    taskProject: document.getElementById('taskProject'),
    submitTaskBtn: document.getElementById('submitButton')
  }
})