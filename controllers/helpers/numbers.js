/**
 * You are climbing a staircase. It takes n steps to reach the top.
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
 * @param {Number} n The number of stars to the tom
 * @returns {Number} How many unique ways to climb the stairs
 */
const climbStairs = (n) => {

    let next, distinctWays = [];

    for (let f = 0; f <= n; f++) {
        if (f == 0 || f == 1) {
            next = 1;
        } else {
            next = distinctWays[f - 1] + distinctWays[f - 2];
        }
        distinctWays.push(next);
    }

    return distinctWays[n];
}

/**
 * Find longest sequence of zeros in binary representation of a positive number.
 * A binary gap within a positive integer N is any maximal sequence of consecutive zeros 
 * that is surrounded by ones at both ends in the binary representation of N.
 * @param {number} N number to convert to binary
 * @returns {number} an integer representing binary gap `ones` or zero if not found
 */
const longestSequence = (n) => {
    if (n < 0) return 0;
    let b = Number(n).toString(2);
    let match, max = 0;
    const regex = /10+1/g;

    while ((match = b.match(regex)) != null) {
        if (match[0] != undefined) {
            b = b.slice(match[0].length - 1);
            if (match[0].length - 2 > max)
                max = match[0].length - 2;
        }
    }

    return max;
}

/**
 * Given three integers startPos, endPos and steps,
 * returns the minimal number of jumps 
 * from position X to a position equal to or greater than 
 * @param {Number} startPos Starting position
 * @param {Number} endingPos Desired position
 * @param {Number} steps Fixed distance
 */
const minSteps = (startPos, endingPos, steps) => {
    if (startPos == endingPos) return 0;
    if (startPos > endingPos) return 1;

    return Math.ceil((endingPos - startPos) / steps);

}

exports.climbStairs = climbStairs;
exports.longestSequence = longestSequence;
exports.minSteps = minSteps;