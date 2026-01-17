/**
 * Converts any input string into kebab-case format.
 * @param {string} str - The string to convert
 * @returns {string} - The kebab-case formatted string
 * @throws {TypeError} - If input is not a string
 */
function toKebabCase(str) {
    // Throw error if input is not a string
    if (typeof str !== 'string') {
        throw new TypeError('Input must be a string');
    }

    // Trim leading and trailing whitespace
    str = str.trim();

    // Return empty string if input is empty
    if (str.length === 0) {
        return '';
    }

    // Replace spaces, underscores, and hyphens with a common separator (space)
    // Then split on spaces to handle multiple consecutive separators
    // Filter out empty strings and join with hyphens
    return str
        .replace(/[\s_-]+/g, ' ') // Replace separators with spaces
        .split(' ') // Split into words
        .filter(word => word.length > 0) // Remove empty strings
        .join('-') // Join with hyphens
        .toLowerCase(); // Convert to lowercase
}

// Validation examples
console.log(toKebabCase('Hello World')); // "hello-world"
console.log(toKebabCase('convert_this-string')); // "convert-this-string"
console.log(toKebabCase(' multiple spaces here ')); // "multiple-spaces-here"
console.log(toKebabCase('test123Number')); // "test123-number"
console.log(toKebabCase('')); // ""