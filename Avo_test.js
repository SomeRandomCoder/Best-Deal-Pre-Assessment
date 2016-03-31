var assert=require('assert');
var Avo = require('./Avo.js');

describe("convertion", function(){
  it("should convert the string into an array of just numbers", function(){
    var result = Avo.convertion("1 for R3, 2 for R7, 3 for R10, 5 for R14.50");
    assert.deepEqual(result, [ '1', '3', '2', '7', '3', '10', '5', '14.50' ]
);
  });
});
