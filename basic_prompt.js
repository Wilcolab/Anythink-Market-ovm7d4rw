function toCamelCase(str) {
    return str
        .split(/[\s\-_]+/) // Split by spaces, hyphens, or underscores
        .map((word, index) => {
            if (index === 0) {
                return word.toLowerCase();
            }
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join('');
}

// Test cases
console.log(toCamelCase("hello world example")); // Output: "helloWorldExample"
console.log(toCamelCase("convert_this-string")); // Output: "convertThisString"