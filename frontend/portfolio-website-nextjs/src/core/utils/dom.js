const hasClass = (el, className) => el?.classList?.contains(className);
const removeClass = (el, className) => {
  if (!el || !el.classList) {
    return;
  }

  el.classList.remove(className);
};
const DOM = { hasClass, removeClass };

export default DOM;
