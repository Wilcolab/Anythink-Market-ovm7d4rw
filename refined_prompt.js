function toCamelCase(input) {
    if (typeof input !== 'string') {
        throw new TypeError('Input must be a string');
    }
    if (input.trim() === '') {
        return '';
    }

    const separators = /[\s-_]+/;
    const words = input.trim().split(separators);
    
    const camelCased = words.map((word, index) => {
        if (index === 0) {
            return word.toLowerCase();
        }
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join('');

    return camelCased;
}

/**
 * Converts a given string to dot case format.
 *
 * This function takes a string input, trims it, and splits it by spaces, underscores,
 * or hyphens. It then converts all words to lowercase and joins them with dots.
 *
 * @param {string} input - The input string to be converted.
 * @returns {string} The dot cased version of the input string.
 * @throws {TypeError} If the input is not a string.
 * @throws {Error} If the input string is empty.
 *
 * @example
 * toDotCase('first name'); // returns 'first.name'
 * toDotCase('user_id'); // returns 'user.id'
 * toDotCase('SCREEN_NAME'); // returns 'screen.name'
 * toDotCase('mobile-number'); // returns 'mobile.number'
 */
function toDotCase(input) {
    if (typeof input !== 'string') {
        throw new TypeError('Input must be a string');
    }
    if (input.trim() === '') {
        return '';
    }

    const separators = /[\s-_]+/;
    const words = input.trim().split(separators);
    
    const dotCased = words.map(word => word.toLowerCase()).join('.');

    return dotCased;
}

// Example usage
console.log(toCamelCase("hello world")); // "helloWorld"
console.log(toCamelCase(" multiple spaces here ")); // "multipleSpacesHere"
console.log(toCamelCase("convert_this-string")); // "convertThisString"
console.log(toCamelCase("user id 2 value")); // "userId2Value"
console.log(toCamelCase("")); // ""
console.log(toCamelCase(123)); // throws TypeError

console.log(toDotCase("hello world")); // "hello.world"
console.log(toDotCase(" multiple spaces here ")); // "multiple.spaces.here"
console.log(toDotCase("convert_this-string")); // "convert.this.string"
console.log(toDotCase("user id 2 value")); // "user.id.2.value"
console.log(toDotCase("")); // ""
console.log(toDotCase(123)); // throws TypeError