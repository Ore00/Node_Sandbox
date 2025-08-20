/**
 * For a given array of numbers, determine the sum of the even numbers and the sum of the odd numbers
 * @param {*} arr 
 * @returns {number[]} an array of the sum of all even numbers and sum of all odd numbers
 */
const alternatingSums = (arr) => {
    const evens = arr.filter((num, inx) =>
        inx % 2 == 0
    ).reduce((a, b) => a + b, 0);
    const odds = arr.filter((num, inx) =>
        inx % 2 != 0
    ).reduce((a, b) => a + b, 0);

    return [evens, odds];
}

/**
 * For a given array of strings or numbers, determine the different string values
 * that can be arranged using all the array's values
 * @param {number|string[]} arr used to determine the various string mutations
 * @returns {number|string[]} an array of the different mutations of arr
 */
const getPremutations = (arr) => {
    const mutations = [];
    const stack = [[[], arr]];

    while (stack.length) {
        const [current, remaining] = stack.pop();

        if (remaining.length === 0) {
            mutations.push(current);
        } else {
            for (let i = 0; i < remaining.length; i++) {
                const nextPerm = current.concat(remaining[i]);
                const nextRemaining = remaining.slice(0, i).concat(remaining.slice(i + 1));
                stack.push([nextPerm, nextRemaining]);
            }
        }
    }

    return mutations;
}

/**
 * Merge the second array of numbers into the first array in-place
 * @param {number[]} nums1 The first array of numbers
 * @param {number} m The number of values in the first array
 * @param {number[]} nums2 The second array of numbers to mergin into the first
 * @param {number} n The number of values in the second array
 * @return {void}
 */
const merge = (nums1, m, nums2, n) => {

    if (n == 0) return nums1;
    let pointer = m;

    /** add values to the end if first array is empty or 
    * the first number in second array is >= last number in array 1
    */
    if (m == 0 || nums1[m - 1] <= nums2[0]) {
        for (let i = 0; i < n; i++) {
            nums1[pointer] = nums2[i];
            pointer++
        }
    } else {

        //determine placement for each value in second array when some are < or > vales of array 1

        for (let i = 0; i < n; i++) {
            //find the location for placing the number, so it's in order

            let index = nums1.findIndex(element => element >= nums2[i]);

            let lastNonZero = nums1.findLastIndex(num => num != 0) + 1;
            index = index === -1 ? lastNonZero < i ? i + 1 : lastNonZero : index;

            nums1.splice(index, 0, nums2[i]);
            nums1.pop();
        }
    }

    return nums1;
};

/**
 * given an array of numbers [1...100,000], returns 
 * the value of the missing element
 * returns 1 if the smallest element of the array isn't 1
 * returns 1 if array is empty
 * @param {Number[]} nums an array of numbers
 * @returns {Number} the missing number
 */
const missingElement = (nums) => {
    let size = nums.length;
    if (size == 0) return 1;

    nums.sort((a, b) => a - b);
    if (nums[0] != 1) return 1;

    for (let index = 0; index < size; index++) {
        // logger.info(`${index} : ${nums[index]} next ${nums[index + 1]}`);
        if (index + 1 == size || (nums[index] + 1) != nums[index + 1]) {
            return nums[index] + 1;
        }
    }
    return null;
}

/**
 * Given an array of integers, return the smallest positive integer
 * that does not occur in the array
 * @param {number[]} nums The array of numbers
 * @return {number} num Returns the smallest interger that isn't in the array
 */
const smallestMissing = (nums) => {
    let num = 1;
    nums.filter(x => x > 0)
        .sort((a, b) => a - b)
        .map((val, index, arr) => {
            if (num < arr[index]) return;

            num = arr[index] + 1;
        }
        );
    return num;
}

/**
 * 
 * @param {number[]} arr An array of integers
 * @param {number} rotations The number of rotations for each value
 * @returns {number[]} The original array values rotated by num
 */
const rotateValues = (arr, rotations) => {
    let size = arr.length;
    if (size == rotations) return arr;

    let dif = arr.filter((a, b) => a != b);
    if (dif.length == 0) return arr;
    rotations = rotations > size ? rotations % size : rotations;
    let index, shifted = new Array(size);
    for (let i = 0; i < size; i++) {
        index = i + rotations >= size ?
            (i + rotations) - size :
            (i + rotations);
        shifted[index] = arr[i];
    }

    return shifted;

}

/**
 * 
 * @param {Number|String} 
 */
const unpairedElement = (A) => {

    let size = A.length;
    if (size === 1) return A[0];

    A.sort((a, b) => a - b);

    for (let i = 0; i < size; i += 2) {
        // if at the end or if the current and next aren't the same
        if (size === i + 1 || A[i] !== A[i + 1]) {
            return A[i];
        }
    }
    return null;
}

/**
 * Find the Symmetric Difference
 * The mathematical term symmetric difference (△ or ⊕) of two sets is the set of elements 
 * which are in either of the two arrays but not in both. 
 * For example, for array A = {1, 2, 3} and B = {2, 3, 4}, A △ B = {1, 4}
 * So to evaluate an expression involving symmetric differences among three elements (A △ B △ C), you must complete one operation at a time. 
 * Thus, for array A and B above, and C = {2, 3}, A △ B △ C = (A △ B) △ C = {1, 4} △ {2, 3} = {1, 2, 3, 4}
 * @param {arguments[]} args 
 * @returns array a sorted list of unique values
 */
const symmetricDiff = (...args) => {

    let array1, array2, current = Array.from(args), results = [];

    while (current.length > 1) {
        array1 = current[0];
        array2 = current[1];

        for (const val of array1) {
            if (results.indexOf(val) == -1 && !array2.includes(val)) {
                results.push(val)
            }
        }
        for (const val of array2) {
            if (results.indexOf(val) == -1 && !array1.includes(val)) {
                results.push(val)
            }
        }
        current.shift();
        current.shift();
        current.unshift(results);
        results = [];
    }
    return current.flat().sort((a, b) => a - b);
}


exports.alternatingSums = alternatingSums;
exports.getPremutations = getPremutations;
exports.merge = merge;
exports.missingElement = missingElement;
exports.rotateValues = rotateValues;
exports.smallestMissing = smallestMissing;
exports.symmetricDiff = symmetricDiff;
exports.unpairedElement = unpairedElement;
