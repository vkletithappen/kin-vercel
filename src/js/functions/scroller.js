document.addEventListener("DOMContentLoaded", () => {
  const scrollerInner = document.querySelector('.scroller__inner');
  const copyOfItems = [...scrollerInner.children];

  copyOfItems.forEach(item => {
    const duplicatedItem = item.cloneNode(true);
    duplicatedItem.setAttribute('aria-hidden', true);
    scrollerInner.append(duplicatedItem);
  })
})
