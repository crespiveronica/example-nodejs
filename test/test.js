var f = require("../index.js")

var should = require("should")

describe("When testing", function() {

  it("a hello world", function() {
    f().should.equal("Hello World")
  })


  it("a dummy assert", function() {
    should.ok(true)
  })

  it("an async timeout", function(done) {
    setTimeout(function() {
      done()
    }, 200)
  })

})
