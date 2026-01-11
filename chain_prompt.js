/**
 * Converts a string to kebab-case format
 * @param {string} input - The string to convert
 * @returns {string} - The kebab-cased string
 * @throws {TypeError} - If input is not a string
 */
function toKebabCase(input) {
    // Step 1: Input validation - ensure the input is a string
    if (typeof input !== 'string') {
        throw new TypeError(`Expected a string, but received ${typeof input}`);
    }

    // Step 2: Trim leading and trailing whitespace
    let result = input.trim();

    // Step 3: Replace underscores with spaces for uniform processing
    result = result.replace(/_/g, ' ');

    // Step 4: Insert spaces before uppercase letters in camelCase
    // This handles cases like "myVariableName" -> "my Variable Name"
    result = result.replace(/([a-z])([A-Z])/g, '$1 $2');

    // Step 5: Convert to lowercase
    result = result.toLowerCase();

    // Step 6: Replace multiple consecutive spaces with a single space
    result = result.replace(/\s+/g, ' ');

    // Step 7: Replace all spaces with hyphens
    result = result.replace(/\s/g, '-');

    // Step 8: Remove any leading or trailing hyphens
    result = result.replace(/^-+|-+$/g, '');

    return result;
}

// Example usage demonstrating all cases
console.log('=== toKebabCase Examples ===\n');

// Basic cases
console.log(`Input: "Hello World"`);
console.log(`Output: "${toKebabCase('Hello World')}"`);
console.log();

// Multiple spaces
console.log(`Input: "hello   world"`);
console.log(`Output: "${toKebabCase('hello   world')}"`);
console.log();

// Underscores
console.log(`Input: "hello_world_test"`);
console.log(`Output: "${toKebabCase('hello_world_test')}"`);
console.log();

// camelCase
console.log(`Input: "myVariableName"`);
console.log(`Output: "${toKebabCase('myVariableName')}"`);
console.log();

// Mixed case with underscores and spaces
console.log(`Input: "my_Variable  Name"`);
console.log(`Output: "${toKebabCase('my_Variable  Name')}"`);
console.log();

// Leading and trailing whitespace
console.log(`Input: "  hello world  "`);
console.log(`Output: "${toKebabCase('  hello world  ')}"`);
console.log();

// Edge case: already kebab-case
console.log(`Input: "already-kebab-case"`);
console.log(`Output: "${toKebabCase('already-kebab-case')}"`);
console.log();

// Error handling examples
try {
    toKebabCase(null);
} catch (error) {
    console.log(`Error with null input: ${error.message}`);
}

try {
    toKebabCase(123);
} catch (error) {
    console.log(`Error with number input: ${error.message}`);
}

try {
    toKebabCase({});
} catch (error) {
    console.log(`Error with object input: ${error.message}`);
}