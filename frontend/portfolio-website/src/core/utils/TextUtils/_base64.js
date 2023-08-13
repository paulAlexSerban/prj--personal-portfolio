/**
 * Encodes a string to base64.
 * @param {*} str
 * @returns {string}
 */

const encodeToBase64 = (str) => {
  try {
    return Buffer.from(str, 'utf8').toString('base64');
  } catch (err) {
    throw new Error('Failed to encode to base64');
  }
};

/**
 * Decodes a string from base64.
 * @param {*} str
 * @returns {string}
 */

const decodeFromBase64 = (str) => {
  try {
    // The Buffer.from() function will throw an error if the
    // string contains invalid characters.
    const decodedString = Buffer.from(str, 'base64').toString('utf8');
    return decodedString;
  } catch (err) {
    console.error('An error occurred while decoding the string: ', err);
    return '';
  }
};

export { encodeToBase64, decodeFromBase64 };
