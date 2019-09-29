module.exports = function multiply(a, b) {
  
  var aArr = a.split('').reverse();
  var bArr = b.split('').reverse();
  var stack = [];
  var res = [];
  var d = 0;
  
  for (let i = 0; i < aArr.length; i++) {
    for (let j = 0; j < bArr.length; j++) {
      var m = aArr[i] * bArr[j];
      
      if(stack[i + j]) {
        stack[i + j] = stack[i + j] + m;
      } else {
        stack[i + j] = m;
      } 
    }
  }
  
  for (let i = 0; i < stack.length; i++) {
    if((stack[i] + d) < 10) {
      res[i] = stack[i] + d;
      d = 0;
    } else {
      res[i] = (stack[i] + d) % 10;
      d = Math.floor((stack[i] + d) / 10)
    }
  }
  
  if(d !== 0) {
    res.push(d)
  }
  
  return res.reverse().join('');
}
// https://medium.com/@kanby/умножение-чисел-как-строк-в-js-914bb44a5fb7