import els from './dom.js';

document.addEventListener('DOMContentLoaded', () => {
  if (els.addProjectBtn) {
    els.addProjectBtn.addEventListener('click', () => {
      window.alert('Botão de adicionar projeto clicado!');
    });
  }
});