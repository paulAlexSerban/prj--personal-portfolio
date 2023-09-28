/**
 * Truncates the supplied string to 150 characters, and adds
 * ellipses to the end if it is longer than 150 characters.
 * @param {string} string - The string to truncate
 * @return {string} - The truncated string
 */

const trimPageDescription = (string) => {
  if(!string) {
    throw new Error('No input string provided');
  }
  if(typeof string !== 'string') {
    throw new Error('Input is not a string');
  }
  if(string.length > 150) {
    return `${string.slice(0, 147)}...`;
  }
  return string;
}

export default trimPageDescription;