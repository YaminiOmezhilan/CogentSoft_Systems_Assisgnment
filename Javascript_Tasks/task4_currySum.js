function sum() {
  let total = 0;

  return function (num) {
    if (num !== undefined) {
      total += num;
      return arguments.callee;
    } else {
      return total;
    }
  };
}

console.log(sum(1)(2)(3)()); 
console.log(sum(5)(10)(15)());
console.log(sum(1)(2)(3)(4)(5)());
