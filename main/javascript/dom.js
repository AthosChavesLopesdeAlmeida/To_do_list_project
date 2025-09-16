export default function getEls() {
  return {
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
    taskProjectInput: document.getElementById('taskProject'),
    submitTaskBtn: document.getElementById('submitButton'),

    taskInterface: document.getElementsByClassName('task'),
    taskTitleInterface: document.getElementsByClassName('taskTitle'),
    taskDueDateInterface: document.getElementsByClassName('taskDeadline'),

    mainContent: document.getElementById('container'),

    tasksContainer: document.getElementById('tasksContainer'),

    deleteTaskBtn: document.getElementsByClassName('deleteTaskBtn')
  };
}