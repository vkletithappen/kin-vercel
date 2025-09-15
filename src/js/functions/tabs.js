document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('[data-tabs]');

  tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      const currentTab = e.currentTarget;
      const tabsBtns = currentTab.querySelectorAll('[data-tabs-path]');
      const tabsContents = currentTab.querySelectorAll('[data-tabs-target]');

      if (e.target.classList.contains('tabs__nav-btn')) {
        const tabsPath = e.target.dataset.tabsPath;
        tabsBtns.forEach(el => el.classList.remove('tabs__nav-btn--active'));
        currentTab.querySelector(`[data-tabs-path="${tabsPath}"]`).classList.add('tabs__nav-btn--active');
        tabsHandler(tabsPath);
      }

      function tabsHandler(path) {
        tabsContents.forEach(el => el.classList.remove('tabs__content--active'));
        currentTab.querySelector(`[data-tabs-target="${path}"]`).classList.add('tabs__content--active');
      };
    })
  })
});

// one accrodion maxgraph
// document.addEventListener('DOMContentLoaded', () => {
//   const tabs = document.querySelector('[data-tabs="CHANGE-HERE"]'); // !
//   const tabsBtns = document.querySelectorAll('[data-tabs-path]');
//   const tabsContents = document.querySelectorAll('[data-tabs-target]');

//   if (tabs) {
//     tabs.addEventListener('click', (e) => {
//       if (e.target.classList.contains('tabs__nav-btn')) {
//         const tabsPath = e.target.dataset.tabsPath;
//         tabsBtns.forEach(el => { el.classList.remove('tabs__nav-btn--active') });
//         document.querySelector(`[data-tabs-path="${tabsPath}"]`).classList.add('tabs__nav-btn--active');
//         tabsHandler(tabsPath);
//       }
//     });
//   }

//   const tabsHandler = (path) => {
//     tabsContents.forEach(el => { el.classList.remove('tabs__content--active') });
//     document.querySelector(`[data-tabs-target="${path}"]`).classList.add('tabs__content--active');
//   };
// });
