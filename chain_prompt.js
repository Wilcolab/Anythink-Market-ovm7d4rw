/**
 * Converts any input string into kebab-case format
 * @param {string} input - The string to convert
 * @returns {string} The kebab-case version of the input
 * @throws {TypeError} If input is not a string
 */
function toKebabCase(input) {
    // Validate that input is a string
    if (typeof input !== 'string') {
        throw new TypeError('Input must be a string');
    }

    // Trim leading and trailing whitespace
    const trimmed = input.trim();

    // Return empty string if input is empty
    if (trimmed.length === 0) {
        return '';
    }

    // Replace spaces, underscores, and hyphens with a common separator
    // Then handle multiple consecutive separators by replacing with single hyphen
    const normalized = trimmed
        .replace(/[\s_-]+/g, '-')  // Replace one or more separators with single hyphen
        .toLowerCase();             // Convert to lowercase

    return normalized;
}

// Validation examples
console.log(toKebabCase('Hello World'));           // "hello-world"
console.log(toKebabCase('convert_this-string'));   // "convert-this-string"
console.log(toKebabCase(' multiple spaces here ')); // "multiple-spaces-here"
console.log(toKebabCase(''));                       // ""
console.log(toKebabCase('Test123Number'));         // "test123number"

// Error handling
try {
    toKebabCase(123);
} catch (error) {
    console.error(error.message); // "Input must be a string"
}