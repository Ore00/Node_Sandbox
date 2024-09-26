const chai = require("chai");
const assert = chai.assert;
const chaiHttp = require("chai-http");
const server = require("../../server");

chai.use(chaiHttp);
const requester = chai.request(server);

suite("Unit Tests", () => {
  suite("Are running", () => {
    test("true?", function (done) {
      assert.isTrue(true);
      done();
    });
  });

  suite("GET request to /assignedUsers should", function () {
    test("return randomly assign users", function (done) {
      requester.get(`/assignedUsers`).end(function (err, res) {
        if (err) done(err);
        assert.equal(res.status, 200);
        assert.isObject(res.body);
        assert.property(res.body, "assigments");
        assert.isString(res.body.assigments, "string");
        done();
      });
    });
  });
});
