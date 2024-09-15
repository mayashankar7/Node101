//Print statement
console.log("Hello World!")
//error and warning
console.error("error")
console.warn("warning")

let myString = "developer";
let myNewString = myString[0].toUpperCase() + myString.slice(1);
console.log(myNewString);


/**
 * Generates a random number between min (inclusive) and max (inclusive).
 *
 * @param {number} min - The minimum value of the range.
 * @param {number} max - The maximum value of the range.
 * @returns {number} A random number between min and max.
 */
function getRandomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Example usage:
let randomNum = getRandomNumberInRange(2, 10);
console.log(randomNum); // Outputs a random number between 1 and 10);