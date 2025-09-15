const tabs = document.querySelectorAll(".popular-tabs__btn");
const slider = document.querySelector(".popular-tabs__slider");

function moveSlider(tab) {
  const { offsetLeft, offsetWidth } = tab;
  slider.style.width = `${offsetWidth}px`;
  slider.style.transform = `translateX(${offsetLeft - 5}px)`;
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    moveSlider(tab);
  });
});

moveSlider(tabs[0]);
