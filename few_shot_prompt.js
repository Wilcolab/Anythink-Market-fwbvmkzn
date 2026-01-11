function toCamelCase(str) {
    return str
        .split(/[\s_-]+/) // Split by spaces, underscores, or hyphens
        .map((word, index) => {
            if (index === 0) {
                // First word: lowercase
                return word.toLowerCase();
            }
            // Subsequent words: capitalize first letter, lowercase rest
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join('');
}

// Test cases
console.log(toCamelCase('first name'));        // firstName
console.log(toCamelCase('user_id'));           // userId
console.log(toCamelCase('SCREEN_NAME'));       // screenName
console.log(toCamelCase('mobile-number'));     // mobileNumber