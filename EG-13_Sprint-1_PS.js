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

 
//02. Generate Fibonacci Sequence Up to N Terms
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


//03. Calculate the Greatest Common Divisor (GCD)
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

// 04. Calculate the Least Common Multiple (LCM)
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


//05. Check if a Number is Prime
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

// 06. Merge Two Sorted Arrays into One Sorted Array
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
function mergeSortedArrays(arr1, arr2){
   const result = [];
    let i = 0; // Pointer for arr1
    let j = 0; // Pointer for arr2
    
    // Compare elements from both arrays and add the smaller one
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }
    
    // Add remaining elements from arr1 (if any)
    while (i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }
    
    // Add remaining elements from arr2 (if any)
    while (j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }
    
    return result;
}

// 07. Find the Median of an Unsorted Array
/**
 * @param {number[]} nums
 * @return {number}
 */
function findMedian(nums){
   // Handle empty array
    if (nums.length === 0) {
        return null;
    }
    
    // Sort the array in ascending order
    const sorted = [...nums].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    
    // If array length is odd, return the middle element
    if (sorted.length % 2 === 1) {
        return sorted[mid];
    }
    
    // If array length is even, return average of two middle elements
    return (sorted[mid - 1] + sorted[mid]) / 2;
}

//08. Find the Second Largest Number in an Array
/**
 * @param {number[]} nums
 * @return {number|null}
 */
function findSecondLargest(nums){
    // Handle edge cases: empty array or array with only one element
    if (nums.length < 2) {
        return null;
    }
    
    let largest = -Infinity;
    let secondLargest = -Infinity;
    
    for (let i = 0; i < nums.length; i++) {
        const current = nums[i];
        
        if (current > largest) {
            // New largest found, shift previous largest to second largest
            secondLargest = largest;
            largest = current;
        } else if (current > secondLargest && current < largest) {
            // Found a new second largest (distinct from largest)
            secondLargest = current;
        }
    }
    
    // If secondLargest is still -Infinity, there was no distinct second largest
    return secondLargest === -Infinity ? null : secondLargest;
}


// 09. Find Most Frequent Element (Mode) in an Array9. Find Mode of an array of numbers
/**
 * @param {Array} arr
 * @return {*}
 */
function findMode(arr){
   // Handle empty array
    if (arr.length === 0) {
        return null;
    }
    
    // Count frequency of each element
    const frequency = {};
    let maxCount = 0;
    let mode = null;
    
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        frequency[element] = (frequency[element] || 0) + 1;
        
        // Update mode if current element appears more frequently
        if (frequency[element] > maxCount) {
            maxCount = frequency[element];
            mode = element;
        }
    }
    
    return mode;
}

// 10. Natural Sorting of Strings with Embedded Numbers
/**
 * @param {string[]} arr
 * @return {string[]}
 */
function naturalSort(arr){
    return arr.slice().sort((a, b) => {
        // Split strings into segments of text and numbers
        const segmentsA = a.match(/\d+|\D+/g) || [a];
        const segmentsB = b.match(/\d+|\D+/g) || [b];
        
        // Compare each segment
        for (let i = 0; i < Math.min(segmentsA.length, segmentsB.length); i++) {
            const segA = segmentsA[i];
            const segB = segmentsB[i];
            
            // If both segments are numbers, compare numerically
            if (/^\d+$/.test(segA) && /^\d+$/.test(segB)) {
                const numA = parseInt(segA, 10);
                const numB = parseInt(segB, 10);
                if (numA !== numB) {
                    return numA - numB;
                }
            } else {
                // Otherwise, compare as strings (case-insensitive)
                const comparison = segA.localeCompare(segB, undefined, { numeric: false, sensitivity: 'base' });
                if (comparison !== 0) {
                    return comparison;
                }
            }
        }
        
        // If all segments match, the shorter string comes first
        return segmentsA.length - segmentsB.length;
    });
}


