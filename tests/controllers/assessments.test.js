const chai = require("chai");
const assert = chai.assert;
const { solution } = require("../../controllers/assessments");

suite("Unit Tests", () => {
    suite("Helpers for Array find missing element", () => {
        test("find top teams ", function (done) {
            let data = [['a:Essendon', 'b:East Coast', 'c:Swans', 'd:Tigers'],
            ['a:b', 'a:c', 'a:d', 'b:a', 'b:c', 'b:d', 'c:a', 'c:b', 'c:d', 'd:a', 'd:b', 'd:c'],
            ['37:55', '44:50', '111:88', '102:42', '112:81', '81:36', '72:39', '38:64', '57:53', '46:65', '37:73', '95:62']];

            let result = solution(data[0], data[1], data[2]);
            assert.deepEqual(["East Coast", "Swans"], result);
            done();
        });
    });
});