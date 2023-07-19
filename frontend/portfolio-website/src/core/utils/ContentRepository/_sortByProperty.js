/**
 * Sorts an array of objects by one or more properties.
 *
 * @param {Array} arr - The array to be sorted.
 * @param {Array} propertyArr - An array of properties to sort by.
 * @returns {Array} A new sorted array.
 */
const sortByProperty = (arr, propertyArr) => {
  // Throw an error if either parameter is not an array.
  if (!Array.isArray(arr) || !Array.isArray(propertyArr)) {
    throw new Error('Both parameters must be arrays.');
  }

  // If the array or property array is empty, return a new copy of the original array.
  if (arr.length === 0 || propertyArr.length === 0) {
    return arr.slice();
  }

  // Make a copy of the array to avoid modifying the original.
  const clonedArr = arr.slice();

  // Sort the cloned array by calling the compare function.
  return clonedArr.sort((a, b) => {
    // Call the compare function and return its result, or 0 if the result is not -1 or 1.
    const result = compare(a, b, propertyArr);
    return result !== 0 ? result : 0;
  });
}

/**
 * Compares two objects by a property or properties.
 *
 * @param {Object} a - The first object to be compared.
 * @param {Object} b - The second object to be compared.
 * @param {Array} propertyArr - An array of properties to compare by.
 * @returns {number} -1 if a should come before b, 1 if a should come after b, or 0 if they are equal.
 */
const compare = (a, b, propertyArr) => {
  // Get the value of the first property in the array.
  const prop = propertyArr[0];
  // Get the values of the property in each object.
  const aValue = a[prop];
  const bValue = b[prop];

  // If there is only one property left to compare, return the comparison result of the values.
  if (propertyArr.length === 1) {
    return aValue < bValue ? -1 : (aValue > bValue ? 1 : 0);
  }

  // If both values are objects, recursively call the compare function with the remaining properties.
  if (typeof aValue === 'object' && typeof bValue === 'object') {
    return compare(aValue, bValue, propertyArr.slice(1));
  }

  // If one or both values are not objects, return the comparison result of the values.
  return aValue < bValue ? -1 : (aValue > bValue ? 1 : 0);
}

export default sortByProperty;