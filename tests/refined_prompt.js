/**
 * Collection of string case conversion utility functions
 * 
 * Provides functions to convert strings between different naming conventions
 * (camelCase, dot.case, etc.). All functions handle various delimiters including
 * spaces, hyphens, underscores, and dots.
 * 
 * @module stringCaseConverters
 * @version 1.0.0
 * 
 * @example
 * const { toCamelCase, toDotCase } = require('./stringCaseConverters');
 * 
 * toCamelCase('hello-world'); // 'helloWorld'
 * toDotCase('hello_world');   // 'hello.world'
 */

/**
 * Converts text to camelCase format
 * 
 * Transforms a string into camelCase by splitting on multiple delimiters
 * (spaces, hyphens, underscores, dots) and capitalizing the first letter
 * of each word except the first. Handles edge cases like consecutive delimiters,
 * mixed case input, and numeric characters.
 * 
 * @param {string} text - The input string to convert
 * @returns {string} The converted camelCase string
 * @throws {TypeError} If input is null or undefined
 * 
 * @example
 * toCamelCase('hello-world')           // 'helloWorld'
 * toCamelCase('hello_world_foo')       // 'helloWorldFoo'
 * toCamelCase('hello.world test')      // 'helloWorldTest'
 * toCamelCase('HelloWorld')            // 'helloWorld'
 * toCamelCase('hello--world__test')    // 'helloWorldTest'
 * toCamelCase('  spaced  string  ')    // 'spacedString'
 * toCamelCase('a')                     // 'a'
 * toCamelCase('test123value')          // 'test123value'
 * toCamelCase('hello-123-world')       // 'hello123World'
 * 
 * @see {@link toDotCase} for converting to dot.case format
 */

/**
 * Converts text to dot.case format
 * 
 * Transforms a string into dot.case by splitting on multiple delimiters
 * (spaces, hyphens, underscores, dots) and joining words with dots in lowercase.
 * Handles consecutive delimiters, mixed case input, and numeric characters.
 * Useful for configuration keys, property paths, and dot-notation naming.
 * 
 * @param {string} text - The input string to convert
 * @returns {string} The converted dot.case string, or empty string if input is empty
 * @throws {TypeError} If input is null, undefined, or not a string
 * 
 * @example
 * toDotCase('hello-world')           // 'hello.world'
 * toDotCase('hello_world_foo')       // 'hello.world.foo'
 * toDotCase('hello world test')      // 'hello.world.test'
 * toDotCase('HelloWorld')            // 'hello.world'
 * toDotCase('hello--world__test')    // 'hello.world.test'
 * toDotCase('  spaced  string  ')    // 'spaced.string'
 * toDotCase('a')                     // 'a'
 * toDotCase('test123value')          // 'test123value'
 * toDotCase('hello-123-world')       // 'hello.123.world'
 * 
 * @see {@link toCamelCase} for converting to camelCase format
 */
