const ROOT_SELECTOR = '[data-dialog]';

class Dialog {
  selectors = {
    dialogBtn: 'data-dialog-btn',
    dialogInner: '[data-dialog-inner]',
    closeBtn: '[data-dialog-close]',
    video: '[data-dialog-video]'
  };

  stateClasses = {
    scrollLock: 'scroll-lock',
    activeBackdrop: 'is-active'
  };

  constructor(rootElement) {
    this.root = rootElement;
    this.dialogBtns = document.querySelectorAll(`[${this.selectors.dialogBtn}="${this.root.dataset.dialog}"]`);
    this.backdrop = document.querySelector(`[data-dialog-backdrop="${this.root.dataset.dialog}"]`);
    this.video = this.root.querySelector(this.selectors.video);

    if (this.dialogBtns.length > 0) {
      this.bindEvents();
    }
  }

  bindEvents() {
    this.dialogBtns.forEach((btn) => btn.addEventListener('click', this.handleButtonClick));
    this.root.addEventListener('click', this.handleDialogClick);
    document.addEventListener('keydown', this.handleEscPress);
  }

  handleButtonClick = () => {
    this.root.showModal();
    this.root.focus();

    document.body.classList.add(this.stateClasses.scrollLock);
    if (this.backdrop) {
      this.backdrop.classList.add(this.stateClasses.activeBackdrop);
    }

    if (this.video) {
      if (!this.video.src) {
        const source = this.video.querySelector('source');
        this.video.src = source.dataset.src || source.src; // используем data-src
      }
      this.video.currentTime = 0;
      if (document.visibilityState === "visible") {
        this.video.play().catch(() => {});
      }
    }
  };

  handleDialogClick = (e) => {
    if (
      e.target.closest(this.selectors.closeBtn) ||
      !e.target.closest(this.selectors.dialogInner)
    ) {
      this.closeDialog();
    }
  };

  handleEscPress = (e) => {
    if (e.key === 'Escape' && this.root.open) {
      this.closeDialog();
    }
  };

  closeDialog() {
    this.root.close();
    document.body.classList.remove(this.stateClasses.scrollLock);
    if (this.backdrop) {
      this.backdrop.classList.remove(this.stateClasses.activeBackdrop);
    }

    if (this.video) {
      this.video.pause();
      this.video.currentTime = 0;
      this.video.removeAttribute('src');
      this.video.load();
    }
  }
}

class DialogCollection {
  static instance;

  constructor() {
    if (DialogCollection.instance) {
      return DialogCollection.instance;
    }
    DialogCollection.instance = this;
    this.init();
  }

  init() {
    document
      .querySelectorAll(ROOT_SELECTOR)
      .forEach((element) => new Dialog(element));
  }
}

export default DialogCollection;
