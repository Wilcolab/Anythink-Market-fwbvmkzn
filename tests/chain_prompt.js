/**
 * Converts a string to kebab-case format.
 * 
 * Transforms camelCase, PascalCase, space-separated, and mixed-format strings
 * into lowercase words separated by hyphens. Handles edge cases including
 * consecutive spaces, special characters, numbers, and leading/trailing whitespace.
 * 
 * @param {string} input - The input string to convert to kebab-case
 * @returns {string} The converted kebab-case string, or empty string for invalid inputs
 * @throws {TypeError} If input is not a string (when not null/undefined)
 * 
 * @example
 * toKebabCase('helloWorld') // Returns: 'hello-world'
 * toKebabCase('HelloWorld') // Returns: 'hello-world'
 * toKebabCase('hello world') // Returns: 'hello-world'
 * toKebabCase('hello-world') // Returns: 'hello-world'
 * toKebabCase('hello123World') // Returns: 'hello123-world'
 */
function toKebabCase(input) {
    // Input validation: check for null or undefined
    if (input === null || input === undefined) {
        return '';
    }

    // Type validation: ensure input is a string
    if (typeof input !== 'string') {
        throw new TypeError('Input must be a string');
    }

    // Trim leading and trailing whitespace
    const trimmed = input.trim();

    // Return empty string if input becomes empty after trimming
    if (trimmed.length === 0) {
        return '';
    }

    // Insert hyphens before uppercase letters that follow lowercase letters or numbers
    // This handles camelCase and PascalCase conversion
    let result = trimmed.replace(/([a-z0-9])([A-Z])/g, '$1-$2');

    // Replace consecutive spaces and special characters with single hyphens
    result = result.replace(/[\s_]+/g, '-');

    // Remove any remaining special characters except hyphens
    result = result.replace(/[^\w-]/g, '');

    // Convert to lowercase
    result = result.toLowerCase();

    // Clean up multiple consecutive hyphens that may have been created
    result = result.replace(/-+/g, '-');

    // Remove leading or trailing hyphens that may have been introduced
    result = result.replace(/^-+|-+$/g, '');

    return result;
}

module.exports = toKebabCase;