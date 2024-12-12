// Function 1: calculateDifference
function calculateDifference(a, b) {
    return a - b;
}
console.log("Difference:", calculateDifference(10, 5)); // Output: 5

// Function 2: isOdd
function isOdd(number) {
    return number % 2 !== 0;
}
console.log("Is 7 Odd?:", isOdd(7)); // Output: true
console.log("Is 4 Odd?:", isOdd(4)); // Output: false

// Function 3: findMin
function findMin(arr) {
    return Math.min(...arr);
}
console.log("Smallest number:", findMin([10, 3, 5, 7, 1])); // Output: 1

// Function 4: filterEvenNumbers
function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}
console.log("Even numbers:", filterEvenNumbers([10, 3, 5, 8, 2])); // Output: [10, 8, 2]

// Function 5: sortArrayDescending
function sortArrayDescending(arr) {
    return arr.slice().sort((a, b) => b - a);
}
console.log("Sorted in descending order:", sortArrayDescending([10, 3, 5, 8, 2])); // Output: [10, 8, 5, 3, 2]

// Function 6: lowercaseFirstLetter
function lowercaseFirstLetter(str) {
    return str.charAt(0).toLowerCase() + str.slice(1);
}
console.log("Lowercase first letter:", lowercaseFirstLetter("Hello")); // Output: "hello"

// Function 7: findAverage
function findAverage(arr) {
    const sum = arr.reduce((acc, num) => acc + num, 0);
    return sum / arr.length;
}
console.log("Average:", findAverage([10, 20, 30, 40])); // Output: 25

// Function 8: isLeapYear
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
console.log("Is 2024 a leap year?:", isLeapYear(2024)); // Output: true
console.log("Is 2023 a leap year?:", isLeapYear(2023)); // Output: false
