const Accordion = (function () {
  function init() {
    const targets = document.querySelectorAll(".js-accordion");
    if (!targets) return;

    for (let i = 0; i < targets.length; i++) {
      const items = targets[i].querySelectorAll(".accordion__item");

      for (let l = 0; l < items.length; l++) {
        const button = items[l].querySelector(".accordion__button");
        const content = items[l].querySelector(".accordion__content");
        const titleChange = items[l].querySelector("[data-open-change-title]");
        let buttonOrigTitle;
        let buttonNewTitle;

        if (items[l].classList.contains("js-accordion-item-active")) {
          items[l].classList.toggle("is-active");
          content.style.maxHeight = content.scrollHeight + "px";
        }

        if (titleChange) {
          buttonOrigTitle = titleChange.innerHTML;
          buttonNewTitle = titleChange.getAttribute("data-open-change-title");
        }

        button.addEventListener("click", (e) => {
          items[l].classList.toggle("is-active");

          if (titleChange) {
            if (items[l].classList.contains("is-active")) {
              titleChange.innerHTML = buttonNewTitle;
            } else {
              titleChange.innerHTML = buttonOrigTitle;
            }
          }

          if (content.style.maxHeight) {
            content.style.maxHeight = null;
          } else {
            content.style.maxHeight = content.scrollHeight + "px";
          }
        });
      }
    }
  }

  return {
    init: init,
  };
})();

export default Accordion;
