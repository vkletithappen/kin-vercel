const dialogButtons = document.querySelectorAll('[data-dialog-btn]');
const dialogElements = document.querySelectorAll('[data-dialog]');

dialogButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const path = button.dataset.dialogBtn;
    showDialog(path);
  });
});

dialogElements.forEach((dialog) => {
  dialog.addEventListener('click', (e) => {
    if (e.target.closest('.dialog__close') || !e.target.closest('.dialog__inner')) {
      closeDialog(dialog);
    }
  });
});

function showDialog(path) {
  const dialog = document.querySelector(`[data-dialog="${path}"]`);
  if (dialog) {
    dialog.showModal();
    document.body.classList.add('scroll-lock');
  }
}

function closeDialog(dialog) {
  dialog.close();
  document.body.classList.remove('scroll-lock');
}
