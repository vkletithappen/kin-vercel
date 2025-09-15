import { Tabs, ROOT_SELECTOR } from "./Tabs";

class SpecialTabs extends Tabs {
  constructor(rootElement) {
    super(rootElement);
    this.sliderElement = this.root.querySelector("[data-js-tabs-slider]");
    // сразу позиционируем слайдер на активном табе
    this.initSlider();
  }

  setActiveTab(buttonIndex) {
    super.setActiveTab(buttonIndex);

    const activeButton = this.buttons[buttonIndex];
    if (activeButton) {
      this.moveSlider(activeButton);
    }
  }

  moveSlider(button) {
    if (!this.sliderElement) return;

    const { offsetLeft, offsetWidth } = button;
    this.sliderElement.style.width = `${offsetWidth}px`;
    this.sliderElement.style.transform = `translateX(${offsetLeft}px)`;
  }

  initSlider() {
    const activeButton = this.buttons[this.state]; // текущий активный таб
    if (activeButton) {
      this.moveSlider(activeButton);
    }
  }
}

class SpecialTabsCollection {
  constructor() {
    this.init();
  }

  init() {
    document
      .querySelectorAll(ROOT_SELECTOR)
      .forEach((tabs) => new SpecialTabs(tabs));
  }
}

export default SpecialTabsCollection;
