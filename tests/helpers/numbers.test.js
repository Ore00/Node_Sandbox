const chai = require("chai");
const assert = chai.assert;
const {climbStairs, longestSequence, minSteps} = require("../../controllers/helpers/numbers");

suite("Unit Tests", () => {
    suite("Helpers for Numbers", () => {
        test("given numbers 1 & 2, determine # sequences for 'n'", function (done) {
           
            let result = climbStairs(1);
            assert.equal(result, 1);
    
            result = climbStairs(2);
            assert.equal(result, 2);

            result = climbStairs(3);
            assert.equal(result, 3);

            result = climbStairs(4);
            assert.equal(result, 5);
        
            result = climbStairs(5);
            assert.equal(result, 8);

            result = climbStairs(6);
            assert.equal(result, 13);
            

            result = climbStairs(7);
            assert.equal(result, 21);

            result = climbStairs(8);
            assert.equal(result, 34);
           
            result = climbStairs(9);
            assert.equal(result, 55);
            done();
        });

        test("given a positive simple number", function (done) {
            let result = longestSequence(9);
            assert.equal(result, 2);

            result = longestSequence(20);
            assert.equal(result, 1);
            done();
        });

        test("given a positive number w/o binary gap", function (done) {
            let result = longestSequence(15);
            assert.equal(result, 0);
            done();
        });

        test("given a positive number w multiple binary gap", function (done) {
            let result = longestSequence(529);
            assert.equal(result, 4);

            result = longestSequence(1041);
            assert.equal(result, 5);
            done();
        });

        test("determine min steps given starting pos < ending pos", function (done) {
            let result = minSteps(10, 85, 30);
            assert.equal(result, 3);
            done();
        });

        test("determine min steps based on extreme pos", function (done) {
            let result = minSteps(1, 1, 3);
            assert.equal(result, 0);
            done();
        });
    });
});