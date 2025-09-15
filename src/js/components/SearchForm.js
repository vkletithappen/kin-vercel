class SearchForm {
  #config = {
    selectors: {
      button: "[data-js-search-btn]",
      form: "[data-js-search-form]",
      overlay: "[data-js-overlay]",
    },
    classes: {
      active: "is-active",
      disableScroll: "disable-scroll",
    },
    targets: [
      ["form", "active"],
      ["overlay", "active"],
      ["body", "disableScroll"],
    ],
  };

  #elements = {};

  constructor() {
    this.#initElements();
    if (!this.#isValid()) return;
    this.#bindEvents();
  }

  #initElements() {
    const { button, form, overlay } = this.#config.selectors;

    this.#elements = {
      button: document.querySelector(button),
      form: document.querySelector(form),
      overlay: document.querySelector(overlay),
      body: document.body,
    };
  }

  #isValid() {
    for (const key of ["button", "form", "overlay"]) {
      if (!this.#elements[key]) {
        console.warn(`SearchForm error: ${key} not found.`);
        return false;
      }
    }
    return true;
  }

  #toggleClasses(action = "toggle") {
    const { classes, targets } = this.#config;
    targets.forEach(([elKey, classKey]) => {
      this.#elements[elKey]?.classList[action](classes[classKey]);
    });
  }

  #bindEvents() {
    const { button, overlay } = this.#elements;

    button?.addEventListener("click", () => this.#toggleClasses());
    overlay?.addEventListener("click", () => this.#toggleClasses("remove"));

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") this.#toggleClasses("remove");
    });
  }
}

export default SearchForm;
