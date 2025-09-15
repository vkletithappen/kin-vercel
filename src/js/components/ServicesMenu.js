class ServicesMenu {
  config = {
    selectors: {
      button: '[data-js-services-btn]',
      menu: '[data-js-services-menu]',
    },
    stateClasses: {
      active: 'is-active',
    },
  };

  constructor() {
    this.button = document.querySelector(this.config.selectors.button);
    this.menu = document.querySelector(this.config.selectors.menu);

    if (!this.button || !this.menu) {
      console.warn('ServicesMenu: кнопка или меню не найдены');
      return;
    }

    this.bindEvents();
  }

  toggleClasses = () => {
    const isActive = this.menu.classList.contains(this.config.stateClasses.active);

    if (isActive) {
      this.closeMenu();
    } else {
      this.openMenu();
    }
  };

  openMenu = () => {
    this.button.classList.add(this.config.stateClasses.active);
    this.menu.classList.add(this.config.stateClasses.active);

    document.addEventListener('click', this.handleOutsideClick);
  };

  closeMenu = () => {
    this.button.classList.remove(this.config.stateClasses.active);
    this.menu.classList.remove(this.config.stateClasses.active);

    document.removeEventListener('click', this.handleOutsideClick);
  };

  handleOutsideClick = (e) => {
    const clickedInside = this.menu.contains(e.target) || this.button.contains(e.target);

    if (!clickedInside) {
      this.closeMenu();
    }
  };

  bindEvents() {
    this.button.addEventListener('click', this.toggleClasses);
  }

}

export default ServicesMenu;
