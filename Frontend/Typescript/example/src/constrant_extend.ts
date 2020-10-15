
export namespace Constraint_Extend{
    export interface MyType<T extends string | number> {
        name: string,
        value: T
    }
}

const dataA: Constraint_Extend.MyType<string> = {
    name: 'Data A',
    value: 'Hello world'
};
const dataB: Constraint_Extend.MyType<number> = {
    name: 'Data B',
    value: 1234
};
const dataC: Constraint_Extend.MyType<boolean> = { // TS2344: Type 'boolean' does not satisfy the constraint 'string | number'.
    name: 'Data C',
    value: true
};
const dataD: Constraint_Extend.MyType<number[]> = { // TS2344: Type 'number[]' does not satisfy the constraint 'string | number'.
    name: 'Data D',
    value: [1, 2, 3, 4]
};

console.log(dataA,dataB,dataC,dataD);
