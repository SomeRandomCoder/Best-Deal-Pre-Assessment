exports.convertion = function(str){
  var step1 = str.split(', ').join(",").replace(/for /g, '');
  var step2 = step1.split(' ').join('');
  var step3 = step2.replace(/R/g, " ").split(" ").join(",").split(",");

  console.log(step3);
  return step3;
}
