const chai = require("chai");
const assert = chai.assert;
const { alternatingSums, merge, rotateValues, smallestMissing, unpairedElement, missingElement, symmetricDiff } = require("../../controllers/helpers/arrays");

suite("Unit Tests", () => {
    suite("Helpers for Alternating Sums", () => {
        test("when handling only positive numbers", function (done) {
            let nums = [50, 60, 60, 45, 70];
            let result = alternatingSums(nums);
            assert.deepEqual(result, [180, 105]);

            assert.deepEqual(alternatingSums([80]), [80, 0]);
            done();
        });

        test("when including negative numbers", function (done) {
            let nums = [-100, -80, 1, 3, 6, -15, 5, 4, -99, 1, 2, 90];
            let result = smallestMissing(nums);
            assert.equal(result, 7);
            done();
        });
    });
    suite("Helpers for Array merge", () => {
        test("merge array with larger values into the first array", function (done) {
            let array1 = [1, 2, 3, 0, 0, 0];
            let array2 = [4, 5, 6];
            let m = 3;
            let n = 3;
            let results = [1, 2, 3, 4, 5, 6];
            let result = merge(array1, m, array2, n);
            assert.deepEqual(result, results);
            done();
        });

        test("merge array into an array of size 0", function (done) {
            let array1 = [0];
            let array2 = [1];
            let m = 0;
            let n = 1;
            let results = [1];
            let result = merge(array1, m, array2, n);
            assert.deepEqual(result, results, "should return values in second array");
            done();
        });

        test("merge array with similar values into the first array", function (done) {
            let array1 = [1, 2, 3, 0, 0, 0];
            let array2 = [2, 5, 6];
            let m = 3;
            let n = 3;
            let results = [1, 2, 2, 3, 5, 6];
            let result = merge(array1, m, array2, n);
            assert.deepEqual(result, results);
            done();
        });

        test("merge empty array into the array", function (done) {
            let array1 = [1];
            let array2 = [];
            let m = 1;
            let n = 0;
            let results = [1];
            let result = merge(array1, m, array2, n);
            assert.deepEqual(result, results, "should return the first array");
            done();
        });

        test("merge array with negative values into the array", function (done) {
            let array1 = [1, 2, 3, 0, 0, 0];
            let array2 = [-1, -3, 4];
            let m = 3;
            let n = 3;
            let results = [-3, -1, 1, 2, 3, 4];
            let result = merge(array1, m, array2, n);
            assert.deepEqual(result, results, "negative values are first in final array");
            done();
        });

        test("merge array with negative values and zeros into the 1st array", function (done) {
            let array1 = [0, 0, 3, 0, 0, 0, 0, 0, 0];
            let array2 = [-1, 1, 1, 1, 2, 3];
            let m = 3;
            let n = 6;
            let results = [-1, 0, 0, 1, 1, 1, 2, 3, 3];
            let result = merge(array1, m, array2, n);
            assert.deepEqual(result, results, "negative values are first in final array");
            done();
        });

        test("merge array with values < values in second array", function (done) {
            let array1 = [2, 0];
            let array2 = [1];
            let m = 1;
            let n = 1;
            let results = [1, 2];
            let result = merge(array1, m, array2, n);
            assert.deepEqual(result, results);
            done();
        });

        test("merge array with nonnegative values < values in second array", function (done) {
            let array1 = [4, 5, 6, 0, 0, 0];
            let array2 = [1, 2, 3];
            let m = 3;
            let n = 3;
            let results = [1, 2, 3, 4, 5, 6];
            let result = merge(array1, m, array2, n);
            assert.deepEqual(result, results);
            done();
        });

        test("merge array with zeros and mixed values < values in second array", function (done) {
            let array1 = [-1, 0, 1, 1, 0, 0, 0, 0, 0];
            let array2 = [-1, 0, 2, 2, 3];
            let m = 4;
            let n = 5;
            let results = [-1, -1, 0, 0, 1, 1, 2, 2, 3];
            let result = merge(array1, m, array2, n);
            assert.deepEqual(result, results);
            done();
        });

        test("merge array with zeros and mixed values < values in second array", function (done) {
            let array1 = [-12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            let array2 = [-49, -45, -42, -41, -40, -39, -39, -39, -38, -36, -34, -34, -33, -33, -32, -31, -29, -28, -26, -26, -24, -21, -20, -20, -18, -16, -16, -14, -11, -7, -6, -5, -4, -4, -3, -3, -2, -2, -1, 0, 0, 0, 2, 2, 6, 7, 7, 8, 10, 10, 13, 13, 15, 15, 16, 17, 17, 19, 19, 20, 20, 20, 21, 21, 22, 22, 24, 24, 25, 26, 27, 29, 30, 30, 30, 35, 36, 36, 36, 37, 39, 40, 41, 42, 45, 46, 46, 46, 47, 48];
            let m = 1;
            let n = 90;
            let results = [-49, -45, -42, -41, -40, -39, -39, -39, -38, -36, -34, -34, -33, -33, -32, -31, -29, -28, -26, -26, -24, -21, -20, -20, -18, -16, -16, -14, -12, -11, -7, -6, -5, -4, -4, -3, -3, -2, -2, -1, 0, 0, 0, 2, 2, 6, 7, 7, 8, 10, 10, 13, 13, 15, 15, 16, 17, 17, 19, 19, 20, 20, 20, 21, 21, 22, 22, 24, 24, 25, 26, 27, 29, 30, 30, 30, 35, 36, 36, 36, 37, 39, 40, 41, 42, 45, 46, 46, 46, 47, 48];
            let result = merge(array1, m, array2, n);
            assert.deepEqual(result, results);
            done();
        });

        test("merge large array with zeros and mixed values  < values in second array", function (done) {
            let array1 = [-12, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            let array2 = [-49, -45, -42, -41, -40, -39, -39, -39, -38, -36, -34, -34, -33, -33, -32, -31, -29, -28, -26, -26, -24, -21, -20, -20, -18, -16, -16, -14, -11, -7, -6, -5, -4, -4, -3, -3, -2, -2, -1, 0, 0, 0, 2, 2, 6, 7, 7, 8, 10, 10, 13, 13, 15, 15, 16, 17, 17, 19, 19, 20, 20, 20, 21, 21, 22, 22, 24, 24, 25, 26, 27, 29, 30, 30, 30, 35, 36, 36, 36, 37, 39, 40, 41, 42, 45, 46, 46, 46, 47, 48];
            let m = 2;
            let n = 90;
            let results = [-49, -45, -42, -41, -40, -39, -39, -39, -38, -36, -34, -34, -33, -33, -32, -31, -29, -28, -26, -26, -24, -21, -20, -20, -18, -16, -16, -14, -12, -11, -7, -6, -5, -4, -4, -3, -3, -2, -2, -1, 0, 0, 0, 1, 2, 2, 6, 7, 7, 8, 10, 10, 13, 13, 15, 15, 16, 17, 17, 19, 19, 20, 20, 20, 21, 21, 22, 22, 24, 24, 25, 26, 27, 29, 30, 30, 30, 35, 36, 36, 36, 37, 39, 40, 41, 42, 45, 46, 46, 46, 47, 48];
            let result = merge(array1, m, array2, n);
            assert.deepEqual(result, results);
            done();
        });

    });

    suite("Helpers for Array Smallest Missing", () => {
        test("return smallest with only positive numbers", function (done) {
            let nums = [1, 3, 6, 4, 1, 2];
            let result = smallestMissing(nums);
            assert.equal(result, 5);
            done();
        });

        test("return smallest with negative numbers", function (done) {
            let nums = [-100, -80, 1, 3, 6, -15, 5, 4, -99, 1, 2, 90];
            let result = smallestMissing(nums);
            assert.equal(result, 7);
            done();
        });
    });
    suite("Helpers for Array Rotate Values", () => {
        test("returns array when number of rotations equals array size", function (done) {
            let arr = [1, 2, 3, 4];
            let rotations = 4;
            let result = rotateValues(arr, rotations);
            assert.deepEqual(arr, result);
            done();
        });

        test("returns array when array values are the same", function (done) {
            let arr = [0, 0, 0];
            let rotations = 1;
            let result = rotateValues(arr, rotations);
            assert.deepEqual(arr, result);
            done();
        });

        test("returns array with values shifted by the number of rotations", function (done) {
            let arr = [3, 8, 9, 7, 6];
            let rotations = 3;
            let result = rotateValues(arr, rotations);
            assert.deepEqual([9, 7, 6, 3, 8], result);
            done();
        });

        test("returns array with values shifted by 1 rotations", function (done) {
            let arr = [3, 8, 9, 7, 6];
            let rotations = 1;
            let result = rotateValues(arr, rotations);
            assert.deepEqual([6, 3, 8, 9, 7], result);
            done();
        });

        test("when rotation is > the array length", function (done) {
            let arr = [-1, -2, -3, -4, -5, -6];
            let rotations = 10;
            let result = rotateValues(arr, rotations);
            assert.deepEqual([-3, -4, -5, -6, -1, -2,], result);
            done();
        });
    });

    suite("Helpers for Array find unpaired element", () => {
        test("returns array when number of rotations equals array size", function (done) {
            let arr = [9, 3, 9, 3, 9, 7, 9];
            let result = unpairedElement(arr);
            assert.equal(result, 7);
            done();
        });

        test("returns single element", function (done) {
            let arr = [9];
            let result = unpairedElement(arr);
            assert.equal(result, 9);
            done();
        });

        test("returns single element", function (done) {
            let arr = [9];
            let result = unpairedElement(arr);
            assert.equal(result, 9);
            done();
        });

    });

    suite("Helpers for Array find missing element", () => {
        test("returns missing ", function (done) {
            let result = missingElement([2, 3, 1, 5]);
            assert.equal(result, 4);

            result = missingElement([]);
            assert.equal(result, 1);

            result = missingElement([2]);
            assert.equal(result, 1);

            result = missingElement([2, 4]);
            assert.equal(result, 1);
            done();
        });
    });

    suite("Symmetric Differences", () => {
        test("sets: A △ B", function (done) {
            let arrayA = [1, 2, 3];
            let arrayB = [2, 3, 4];

            let result = symmetricDiff(arrayA, arrayB);
            assert.deepEqual(result, [1, 4])
            done();
        });

        test("sets: A △ B △ C", function (done) {
            let arrayA = [1, 2, 3];
            let arrayB = [2, 3, 4];
            let arrayC = [2, 3];
            let result = symmetricDiff(arrayA, arrayB, arrayC);

            assert.deepEqual(result, [1, 2, 3, 4]);
            done();
        });
    });
});
