// const curry = func => arg1 => arg2 => func(arg1, arg2);

function curry(func) {

  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function(...args2) {
        return curried.apply(this, args.concat(args2));
      }
    }
  };

}

const sum = (a, b) => a + b;
const op = curry(sum);
// console.log(op(1,2));

const log = date => importance => message =>
  console.log(`[${date.getHours()}:${date.getMinutes()}] [${importance}] ${message}`);

// log(new Date(),"DEBUG","bbb")


function curryEx(func) {

  return function curried(...args) {
    if (args.length >= func.length) {
      console.log(args.length, func.length)
      return func.apply(this, args);
    } else {
      return function(...args2) {
        return curried.apply(this, args.concat(args2));
      }
    }
  };

}

function sumEx(a, b, c) {
  return a + b + c;
}

let curriedSum = curryEx(sumEx);

console.log( curriedSum(1, 2) ); // 6, still callable normally
console.log( curriedSum(1)(2,3) ); // 6, currying of 1st arg
console.log( curriedSum(1)(2)(3) ); // 6, full currying
