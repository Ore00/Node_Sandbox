const chai = require("chai");
const assert = chai.assert;
const { symmetricDiff } = require("../../controllers/helpers/sets");

suite("Unit Tests", () => {
    suite("Symmetric Differences", () => {
        test("sets: A △ B", function (done) {
            let setA = new Set([1, 2, 3]);
            let setB = new Set([2, 3, 4]);

            let result = symmetricDiff(setA, setB);
            // assert.equal(result, true);
            assert.deepEqual(result, [1, 4])
            done();
        });

        test("sets: A △ B △ C", function (done) {
            let setA = new Set([1, 2, 3]);
            let setB = new Set([2, 3, 4]);
            let setC = new Set([2, 3]);
            let result = symmetricDiff(setA, setB, setC);

            assert.deepEqual(result, [1, 2, 3, 4]);
            done();
        });
    });
});