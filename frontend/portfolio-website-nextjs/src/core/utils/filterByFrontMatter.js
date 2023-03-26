/**
 * filterByFrontmatter
 * This function takes an array of objects, and filters it based on the properties in 
 * their frontmatter object. It returns a new array that includes only the items that 
 * satisfy the filtering criteria.
 * 
 * Parameters
 * array (required): The array to filter.
 * frontmatterKeys (required): An array of strings representing the keys in the 
 * frontmatter object that you want to use for filtering. If an item in the array does 
 * not have all the keys specified in this array, it will not be included in the filtered array.
 * values (optional): An object with key-value pairs that you can use to filter items 
 * based on exact values for specific frontmatter keys. If a key is specified in this 
 * object, the function will only include items that have a matching value for that key.
 * Return Value
 * This function returns a new array with the items that satisfy the filtering criteria.
 * 
 * Examples
 * Here are some examples of how you can use this function:
 * import filterByFrontmatter from './filterByFrontmatter';
 * Example 1: Filter all published projects
 * const publishedProjects = filterByFrontmatter(content.projects, ['status']);
 * Example 2: Filter all pinned and published projects
 * const pinnedProjects = filterByFrontmatter(content.projects, ['pinned', 'status']);
 * Example 3: Filter all unpublished and pinned posts
 * const unpublishedPinnedPosts = filterByFrontmatter(content.posts, ['pinned', 'status'], { status: 'unpublished' });
 * Example 4: Filter all published booknotes with a specific tag
 * const publishedBooknotesWithTag = filterByFrontmatter(content.booknotes, ['status', 'tags'], { tags: 'javascript' });
 * 
 * In the first example, we use the filterByFrontmatter function to filter all published 
 * projects by passing in the content.projects array and specifying the 'status' key as the only 
 * key in the frontmatterKeys array. This will return an array of all projects that have a status 
 * value of 'published'.
 * 
 * In the second example, we modify the frontmatterKeys array to include both 'pinned' and 'status', 
 * which will return all projects that are both pinned and published.
 * 
 * In the third example, we use the values object to specify a 'status' value of 'unpublished', 
 * which means that the function will only include posts that have a 'status' value of 'unpublished' 
 * in addition to being pinned.
 * 
 * In the fourth example, we use the values object to specify a specific tag that we want to filter
 *  the booknotes by. This will return only booknotes that have the specified tag in their frontmatter object.

 * @param {*} array 
 * @param {*} frontmatterKeys 
 * @param {*} values 
 * @returns 
 */

import sanitizeQueryString from '@/utils/sanitizeQueryString';

const filterByFrontmatter = (array, frontmatterKeys, values = {}) => {
  // Input validation
  if (!Array.isArray(array)) {
    throw new Error('The "array" parameter must be an array');
  }
  if (!Array.isArray(frontmatterKeys) || !frontmatterKeys.every((key) => typeof key === 'string')) {
    throw new Error('The "frontmatterKeys" parameter must be an array of strings');
  }

  return array.filter((item) => {
    return frontmatterKeys.every((key) => {
      if (!item.frontmatter.hasOwnProperty(key)) {
        return false;
      }

      if (values.hasOwnProperty(key)) {
        if (frontmatterKeys.includes('tags') && key === 'tags') {
          const sanitizedTags = item.frontmatter[key].map((tag) => sanitizeQueryString(tag));
          return sanitizedTags.includes(values[key]);
        } else {
          // Use strict equality
          return item.frontmatter[key] === values[key];
        }
      }

      if (key === 'pinned') {
        return item.frontmatter[key];
      }

      // Use strict equality
      return item.frontmatter[key] === 'published';
    });
  });
};


export default filterByFrontmatter;
