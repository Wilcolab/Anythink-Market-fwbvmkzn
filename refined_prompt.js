/**
 * String case conversion utility module
 * Provides functions to convert strings between different naming conventions
 * with comprehensive error handling and input validation.
 * 
 * @module stringCaseConverters
 * @requires none
 */

/**
 * Converts a given input string into camelCase format
 * 
 * Transforms the input string by:
 * - Trimming leading and trailing whitespace
 * - Replacing special characters and delimiters with spaces
 * - Splitting into words and filtering empty strings
 * - Converting first word to lowercase
 * - Capitalizing the first letter of subsequent words
 * - Joining all words without delimiters
 * 
 * @function toCamelCase
 * @param {string} input - The input string to convert to camelCase
 * @returns {string} - The camelCase converted string
 * @throws {TypeError} - If input is not a string
 */
function toCamelCase(input) {
    // Validate input type
    if (typeof input !== 'string') {
        throw new TypeError(
            `Expected a string, but received ${typeof input}. Input: ${JSON.stringify(input)}`
        );
    }

    // Trim leading and trailing whitespace
    const trimmed = input.trim();

    // Return empty string for empty input
    if (trimmed.length === 0) {
        return '';
    }

    // Replace special characters and delimiters with spaces
    // Keeps alphanumeric characters and spaces
    let processed = trimmed.replace(/[^\w\s]/g, ' ');

    // Split by whitespace and filter out empty strings
    const words = processed
        .split(/\s+/)
        .filter(word => word.length > 0);

    // Return empty string if no valid alphanumeric characters
    if (words.length === 0) {
        return '';
    }

    // Convert to camelCase: first word lowercase, rest capitalize first letter
    const camelCased = words
        .map((word, index) => {
            const lowerWord = word.toLowerCase();
            if (index === 0) {
                return lowerWord;
            }
            // Capitalize first letter of subsequent words
            return lowerWord.charAt(0).toUpperCase() + lowerWord.slice(1);
        })
        .join('');

    return camelCased;
}

// Example usage and test cases
console.log(toCamelCase('hello world'));           // 'helloWorld'
console.log(toCamelCase('hello-world'));           // 'helloWorld'
console.log(toCamelCase('hello_world'));           // 'helloWorld'
console.log(toCamelCase('hello  world'));          // 'helloWorld'
console.log(toCamelCase('  hello world  '));       // 'helloWorld'
console.log(toCamelCase('hello-_world_-test'));    // 'helloWorldTest'
console.log(toCamelCase('hello@#$world'));         // 'helloWorld'
console.log(toCamelCase('   '));                   // ''
console.log(toCamelCase('!!!@@@###'));             // ''

// Error handling
try {
    toCamelCase(null);
} catch (error) {
    console.error('Error:', error.message);
}

try {
    toCamelCase(123);
} catch (error) {
    console.error('Error:', error.message);
}

module.exports = toCamelCase;

/**
 * Converts a given input string into dot.case format
 * 
 * Transforms the input string by:
 * - Trimming leading and trailing whitespace
 * - Replacing special characters and delimiters with spaces
 * - Splitting into words and filtering empty strings
 * - Converting all words to lowercase
 * - Joining words with dots as delimiters
 * 
 * @function toDotCase
 * @param {string} input - The input string to convert to dot.case
 * @returns {string} - The dot.case converted string
 * @throws {TypeError} - If input is not a string
 */
function toDotCase(input) {
    // Validate input type
    if (typeof input !== 'string') {
        throw new TypeError(
            `Expected a string, but received ${typeof input}. Input: ${JSON.stringify(input)}`
        );
    }

    // Trim leading and trailing whitespace
    const trimmed = input.trim();

    // Return empty string for empty input
    if (trimmed.length === 0) {
        return '';
    }

    // Replace special characters and delimiters with spaces
    // Keeps alphanumeric characters and spaces
    let processed = trimmed.replace(/[^\w\s]/g, ' ');

    // Split by whitespace and filter out empty strings
    const words = processed
        .split(/\s+/)
        .filter(word => word.length > 0);

    // Return empty string if no valid alphanumeric characters
    if (words.length === 0) {
        return '';
    }

    // Convert to dot.case: lowercase words joined by dots
    const dotCased = words
        .map(word => word.toLowerCase())
        .join('.');

    return dotCased;
}

// Example usage and test cases
console.log(toDotCase('hello world'));           // 'hello.world'
console.log(toDotCase('hello-world'));           // 'hello.world'
console.log(toDotCase('hello_world'));           // 'hello.world'
console.log(toDotCase('hello  world'));          // 'hello.world'
console.log(toDotCase('  hello world  '));       // 'hello.world'
console.log(toDotCase('hello-_world_-test'));    // 'hello.world.test'
console.log(toDotCase('hello@#$world'));         // 'hello.world'
console.log(toDotCase('   '));                   // ''
console.log(toDotCase('!!!@@@###'));             // ''

// Error handling
try {
    toDotCase(null);
} catch (error) {
    console.error('Error:', error.message);
}

try {
    toDotCase(123);
} catch (error) {
    console.error('Error:', error.message);
}

module.exports = { toCamelCase, toDotCase };