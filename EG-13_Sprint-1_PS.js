//1. Leap Year Checker and Fibonacci Generator

/**
 * @param {number} year
 * @return {boolean}
 */
function isLeapYear(year){
    if (year % 400 === 0) {
        return true;
    }
    if (year % 100 === 0) {
        return false;
    }
    return year % 4 === 0;
}

 
//2. Fibonacci Sequence Generator
/**
 * @param {number} n
 * @return {number[]}
 */
function generateFibonacci(n){
   // Handle edge cases
    if (n <= 0) {
        return [];
    }
    if (n === 1) {
        return [0];
    }
    
    // Initialize array with first two Fibonacci numbers
    const fib = [0, 1];
    
    // Generate remaining numbers up to n
    for (let i = 2; i < n; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
    }
    
    return fib;
}


//3. Find GCD of two numbers using Euclid's algorithm
/* @param {number} a
 * @param {number} b
 * @return {number}
 */
function findGCD(a, b){
    // Euclid's algorithm: GCD(a, b) = GCD(b, a % b)
    // Continue until remainder is 0
    
    // Handle edge case: GCD(0, 0) is typically defined as 0
    if (a === 0 && b === 0) {
        return 0;
    }
    
    // Make sure we're working with non-negative numbers
    a = Math.abs(a);
    b = Math.abs(b);
    
    // Ensure a >= b for the algorithm (though it works either way)
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    
    return a;
}

// 4. Find LCM of two numbers
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
function findLCM(a, b){
    // LCM(a, b) = |a * b| / GCD(a, b)
    
    // Handle edge case: LCM of 0 and any number is 0
    if (a === 0 || b === 0) {
        return 0;
    }
    
    // Helper function to find GCD using Euclid's algorithm
    function findGCD(x, y) {
        x = Math.abs(x);
        y = Math.abs(y);
        while (y !== 0) {
            const temp = y;
            y = x % y;
            x = temp;
        }
        return x;
    }
    
    const gcd = findGCD(a, b);
    
    // Use division before multiplication to avoid potential overflow
    return Math.abs(a / gcd * b);
}


// Check if a number is prime
/**
 * @param {number} num
 * @return {boolean}
 */
function isPrime(num){
    // Handle edge cases
    if (num <= 1) {
        return false;
    }
    if (num <= 3) {
        return true;
    }
    
    // Check if divisible by 2 or 3
    if (num % 2 === 0 || num % 3 === 0) {
        return false;
    }
    
    // Check divisors up to sqrt(num)
    // All primes > 3 can be written as 6k ± 1
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) {
            return false;
        }
    }
    
    return true;
}

