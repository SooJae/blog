
namespace Constraint{
   export interface MyType<T> {
        name: string,
        value: T
    }
}

const dataA: Constraint.MyType<string> = {
    name: 'Data A',
    value: 'Hello world'
};
const dataB: Constraint.MyType<number> = {
    name: 'Data B',
    value: 1234
};
const dataC: Constraint.MyType<boolean> = {
    name: 'Data C',
    value: true
};
const dataD: Constraint.MyType<number[]> = {
    name: 'Data D',
    value: [1, 2, 3, 4]
};

console.log(dataA,dataB,dataC,dataD)
