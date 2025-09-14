import getEls from './dom.js';

export function createTask(taskTitle, dueDate = '', projectId = '') {
  const id = crypto.randomUUID();

  return {
    getTitle: () => taskTitle,
    getDueDate: () => dueDate,
    getProjectId: () => projectId,
    getId: () => id
  }
}