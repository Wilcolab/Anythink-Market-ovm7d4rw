/**
 * Converts a given string to camelCase.
 *
 * This function takes a string input, splits it by spaces, underscores, or hyphens,
 * and converts it to camelCase format. The first word is in lowercase, and subsequent
 * words have their first letter capitalized.
 *
 * @param {string} str - The input string to be converted.
 * @returns {string} The camelCased version of the input string.
 * @throws {TypeError} If the input is not a string.
 *
 * @example
 * toCamelCase('first name'); // returns 'firstName'
 * toCamelCase('user_id'); // returns 'userId'
 * toCamelCase('SCREEN_NAME'); // returns 'screenName'
 * toCamelCase('mobile-number'); // returns 'mobileNumber'
 */
function toCamelCase(str) {
    return str
        .split(/[-_\s]+/)
        .map((word, index) => {
            if (index === 0) {
                return word.toLowerCase();
            }
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join('');
}

// Test cases
console.log(toCamelCase('first name'));        // firstName
console.log(toCamelCase('user_id'));           // userId
console.log(toCamelCase('SCREEN_NAME'));       // screenName
console.log(toCamelCase('mobile-number'));     // mobileNumber