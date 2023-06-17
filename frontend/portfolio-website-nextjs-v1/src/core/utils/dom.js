/**
 * Returns true if the element has the specified class, false otherwise
 * @param {Element} el - The element to check for the class
 * @param {string} className - The class to check for
 * @returns {boolean}
 */

const hasClass = (el, className) => {
  if (!el || !el.classList) {
    return false;
  }

  return el.classList.contains(className);
};

/**
 * Removes a class from an element. If the element or the classlist is invalid,
 * does nothing.
 * @param {Element} el
 * @param {string} className
 */

const removeClass = (el, className) => {
  if (!el || !el.classList) {
    return;
  }

  el.classList.remove(className);
};

const DOM = { hasClass, removeClass }

export default DOM;
