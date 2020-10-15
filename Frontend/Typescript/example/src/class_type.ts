interface ICat {
  name: string
}
interface ICatConstructor {
  new (name: string): ICat;
}

class Cat implements ICat {
  constructor(public name: string) {}
}

function makeKitten(c: ICatConstructor, n: string) {
  return new c(n); // ok
}
const kitten = makeKitten(Cat, 'Lucy');
console.log(kitten);
