exports.fruitsJSON = function(){
 var fruitsJSON =
 {
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

  "pickle pay": {
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
};
return fruitsJSON;
};

exports.cheapestSeller=function(fruitsJSON){
  var orangeSellers =[];

  for(var shop in fruitsJSON){
    if(fruitsJSON[shop].hasOwnProperty("oranges")){
      orangeSellers.push({
        Shop: shop,
        price: fruitsJSON[shop].oranges
      });

var oranges = [];
  for(var x = 0; x< orangeSellers.length; x++){
    oranges.push(orangeSellers[x].price);
    }
  }
}

  var min = Math.min.apply(Math, oranges);

  for(var y =0; y < orangeSellers.length; y++){
    if(oranges[y] == min){
      console.log(orangeSellers[y].shop + ": " + orangeSellers[y].price);
      return orangeSellers[y].shop;
    }
  }
};
