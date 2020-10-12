const c_e = ["11", "11", "11", "11"].map((result,index) => {
  // console.log(result, index)
  return parseInt(result,index)
});
// console.log(c_e);


const curry = fun => arg => fun(arg);
const c_e2 = ["11", "11", "11", "11"].map(curry(parseInt));

// console.log(c_e2);


const curry2 = fun => arg2 => arg1 => fun(arg1, arg2);
const parseBinaryString = curry2(parseInt)(2)

const c_e3 = ["11", "11", "11", "11"].map(parseBinaryString)
// console.log(c_e3);


const greaterThan = curry2((l, r) => l > r)
greatherThan30 = greaterThan(30)
greatherThan30(40) // true

const lessThan = curry2((l, r) => l < r);

const checker = (...validators) => val => {
    // validators.forEach(value => console.log(value.toString()))
    return validators.reduce((isValid, vali) => {
      console.log(isValid, vali.toString(), val)
      return (vali(val) ? isValid : false)
    }, true)
}

const withInRange = checker(greaterThan(30), lessThan(50))


console.log(withInRange(40)) // true
console.log(withInRange(29)) // false
console.log(withInRange(51)) // false
