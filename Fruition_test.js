var assert = require('assert');
var fruit = require('./Fruition.js');

describe("cheapestSeller",function(){
  it("should return the provider of the cheapest oranges",function(){
    var result = fruit.cheapestSeller({
      "woolingsworth": {
        "apples": 4,
        "bananas": 3,
        "oranges": 12
      },
      "chockers": {
        "bananas": 2,
        "apples": 5,
        "oranges": 4
      },
      "picklepay": {
        "bananas": 4,
        "oranges": 7
      },
      "shopwrong": {
        "apples": 2,
        "bananas": 3
      },
      "kwakspar": {
        "oranges": 9,
        "apples": 4
}
      });
    assert.equal(result,"chockers");
  });
});
