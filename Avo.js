exports.convertion = function(str){
  var step1 = str.replace(/for /g, '').split(', ').join(",");
  var step2 = step1.split(' ').join('');
  var step3 = step2.replace(/R/g, " ").split(" ").join(",").split(",");
var array = step3;
  console.log(step3);
  return step3;
};

exports.mapping = function(array){
var quantity = [];
var price =[];
var map =[];

for(var i = 0; i< array.length; i++){
  if(i % 2 === 0){
    quantity.push(array[i]);
  }
  else if(i % 2 !=0){
    price.push(array[i]);
  };
}
  for(var j = 0; j< quantity.length; j++){
    map.push({
      Deal: j +1,
      quantity: Number(quantity[j]),
      price: Number(price[j])
    })
  }
console.log(map);
return map;
};
