/**
 * String case conversion utility module
 * 
 * Provides functions to convert strings between different naming conventions.
 * Handles multiple separator types (spaces, hyphens, underscores) and maintains
 * consistency in output formatting.
 * 
 * @module stringCaseConversion
 * @version 1.0.0
 * 
 * @example
 * const { toCamelCase, toDotCase } = require('./refined_prompt');
 * 
 * toCamelCase("hello-world_string");    // "helloWorldString"
 * toDotCase("user_id value 2");         // "user.id.value.2"
 */

/**
 * Converts a string to camelCase format.
 * 
 * Transforms input by splitting on whitespace, hyphens, and underscores,
 * then joins words with the first word in lowercase and all subsequent words
 * capitalized. Useful for JavaScript variable and function naming conventions.
 * 
 * @function toCamelCase
 * @param {string} input - The string to convert to camelCase. Can contain spaces,
 *                         hyphens, or underscores as word separators.
 * @returns {string} The converted camelCase string. Returns empty string if input
 *                   contains no valid words after splitting.
 * @throws {TypeError} If input is not a string. Error message includes the actual
 *                     type received.
 * 
 * @example
 * toCamelCase("hello world");              // "helloWorld"
 * toCamelCase("convert_this-string");      // "convertThisString"
 * toCamelCase("user id 2 value");          // "userId2Value"
 * toCamelCase("   spaced   input   ");     // "spacedInput"
 * 
 * @example
 * // Throws TypeError
 * toCamelCase(123);                        // TypeError: Expected a string, but received number
 * toCamelCase(null);                       // TypeError: Expected a string, but received object
 */

/**
 * Converts a string to dot.case format.
 * 
 * Transforms input by splitting on whitespace, hyphens, and underscores,
 * then joins words with dots (periods) between them. All characters are converted
 * to lowercase. Useful for configuration keys, file names, and nested property names.
 * 
 * @function toDotCase
 * @param {string} input - The string to convert to dot.case. Can contain spaces,
 *                         hyphens, or underscores as word separators.
 * @returns {string} The converted dot.case string. Returns empty string if input
 *                   contains no valid words after splitting.
 * @throws {TypeError} If input is not a string. Error message includes the actual
 *                     type received.
 * 
 * @example
 * toDotCase("hello world");              // "hello.world"
 * toDotCase("convert_this-string");      // "convert.this.string"
 * toDotCase("user id 2 value");          // "user.id.2.value"
 * toDotCase("   spaced   input   ");     // "spaced.input"
 * 
 * @example
 * // Throws TypeError
 * toDotCase(123);                        // TypeError: Expected a string, but received number
 * toDotCase(undefined);                  // TypeError: Expected a string, but received undefined
 */

function toCamelCase(input) {
  if (typeof input !== 'string') {
	throw new TypeError(`Expected a string, but received ${typeof input}`);
  }
  const words = input.split(/[\s\-_]+/).filter(word => word.length > 0);
  if (words.length === 0) return '';
  return words[0].toLowerCase() + words.slice(1).map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join('');
}

function toDotCase(input) {
  if (typeof input !== 'string') {
	throw new TypeError(`Expected a string, but received ${typeof input}`);
  }
  const words = input.split(/[\s\-_]+/).filter(word => word.length > 0);
  if (words.length === 0) return '';
  return words.map(word => word.toLowerCase()).join('.');
}

module.exports = { toCamelCase, toDotCase };