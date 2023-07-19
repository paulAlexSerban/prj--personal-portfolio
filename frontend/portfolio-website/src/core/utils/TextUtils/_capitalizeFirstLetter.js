/**
 * Capitalize the first letter of a string
 * @param {*} string 
 * @returns 
 */
const capitalizeFirstLetter = (string) => {
  if (typeof string !== 'string') {
    return '';
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default capitalizeFirstLetter;