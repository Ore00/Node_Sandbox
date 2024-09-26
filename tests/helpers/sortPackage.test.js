const chai = require("chai");
const assert = chai.assert;
const { sort } = require("../../helpers/sortPackages");

suite("Unit Tests", () => {
    suite("Sorting Packages", () => {
        test("Stack is special when too heavy", function (done) {
            let width = 20,
                height = 20,
                length = 20,
                mass = 200;
            assert.equal(sort(width, height, length, mass), "SPECIAL");
            done();
        });

        test("Stack is rejected when heavy and volume exceeds the max", function (done) {
            let width = 500,
                height = 500,
                length = 500,
                mass = 20;
            assert.equal(sort(width, height, length, mass), "REJECTED");
            done();
        });

        test("Stack is special when not heavy and volume exceeds the max", function (done) {
            let width = 500,
                height = 500,
                length = 500,
                mass = 10;
            assert.equal(sort(width, height, length, mass), "SPECIAL");
            done();
        });

        test("Stack is special (bulky) when length exceeds the max", function (done) {
            let width = 50,
                height = 50,
                length = 200,
                mass = 10;
            assert.equal(sort(width, height, length, mass), "SPECIAL");
            done();
        });

        test("Stack is special (bulky) when height exceeds the max", function (done) {
            let width = 50,
                height = 250,
                length = 50,
                mass = 10;
            assert.equal(sort(width, height, length, mass), "SPECIAL");
            done();
        });

        test("Stack is special (bulky) when width exceeds the max", function (done) {
            let width = 250,
                height = 50,
                length = 50,
                mass = 10;
            assert.equal(sort(width, height, length, mass), "SPECIAL");
            done();
        });

        test("Stack is rejected when bulky and heavy", function (done) {
            let width = 250,
                height = 50,
                length = 50,
                mass = 250;
            assert.equal(sort(width, height, length, mass), "REJECTED");
            done();
        });

        test("Stack is standard when not bulky and not heavy", function (done) {
            let width = 50,
                height = 50,
                length = 50,
                mass = 15;
            assert.equal(sort(width, height, length, mass), "STANDARD");
            done();
        });



        test("Stack is rejected when either value <= 0", function (done) {
            let width = -1, height = 50, length = 50, mass = 15;
            assert.equal(sort(width, height, length, mass), "REJECTED");
            done();
        });

        test.only("Stack is rejected when either value undefined", function (done) {
            let width = 2, height = 50, length = 15, mass = 15;

            assert.equal(sort(width, height, length), "REJECTED");
            assert.equal(sort(width, height, undefined, mass), "REJECTED");
            assert.equal(sort("", height,length, mass), "REJECTED");
            done();
        });
    });
});
