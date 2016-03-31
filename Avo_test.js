var assert=require('assert');
var Avo = require('./Avo.js');

describe("convertion", function(){
  it("should convert the string into an array of just numbers", function(){
    var result = Avo.convertion("1 for R3, 2 for R7, 3 for R10, 5 for R14.50");
    assert.deepEqual(result, [ '1', '3', '2', '7', '3', '10', '5', '14.50' ]
);
  });
});


describe("mapping", function(){
  it("should return the deals in a map within an array", function(){
    var result = Avo.mapping([ '1', '3', '2', '7', '3', '10', '5', '14.50' ]);
    assert.deepEqual(result,
[ { Deal: 1, quantity: 1, price: 3 },
  { Deal: 2, quantity: 2, price: 7 },
  { Deal: 3, quantity: 3, price: 10 },
  { Deal: 4, quantity: 5, price: 14.5 } ]);
  })

});

describe("pricePerAvo", function(){
  it("should return the price price per Avo in each deal", function(){
    var result = Avo.pricePerAvo(
      [ { Deal: 1, quantity: 1, price: 3 },
        { Deal: 2, quantity: 2, price: 7 },
        { Deal: 3, quantity: 3, price: 10 },
        { Deal: 4, quantity: 5, price: 14.5 } ]

    );
    assert.deepEqual(result,
[ { Deal: 1, pricePerAvo: '3.00' },
  { Deal: 2, pricePerAvo: '3.50' },
  { Deal: 3, pricePerAvo: '3.33' },
  { Deal: 4, pricePerAvo: '2.90' } ]);
  })
});

describe("cheapestDeal", function(){
  it("should return the cheapestDeal", function(){
    var result = Avo.cheapestDeal(
    [ { Deal: 1, pricePerAvo: '3.00' },
      { Deal: 2, pricePerAvo: '3.50' },
      { Deal: 3, pricePerAvo: '3.33' },
      { Deal: 4, pricePerAvo: '2.90' } ]);
      assert.deepEqual(result, {Deal: 4, pricePerAvo: '2.90'});
  })
});

describe("expensiveDeal", function(){
  it('should return the most expensive deal', function(){
    var result= Avo.expensiveDeal(
      [ { Deal: 1, pricePerAvo: '3.00' },
        { Deal: 2, pricePerAvo: '3.50' },
        { Deal: 3, pricePerAvo: '3.33' },
        { Deal: 4, pricePerAvo: '2.90' } ]
      );
      assert.deepEqual(result, { Deal: 2, pricePerAvo: '3.50' });
  })
});

describe("average", function(){
  it("should return the average throughout all deals", function(){
    var result = Avo.average(
      [ { Deal: 1, quantity: 1, price: 3 },
        { Deal: 2, quantity: 2, price: 7 },
        { Deal: 3, quantity: 3, price: 10 },
        { Deal: 4, quantity: 5, price: 14.5 } ]
      );
      assert.deepEqual(result, "3.14");
  })
});
