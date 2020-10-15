function toArray<T>(...a: T[]): T[] {
    return a;
}

console.log(toArray<number>(1, 2,3));
console.log(toArray<string>('1', '2'));
console.log(toArray<string | number>(1, '2'));
// console.log(toArray<number>(1, '2')); // Error
