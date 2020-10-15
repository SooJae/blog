interface IAnimal {
    name: string
}
interface ICat extends IAnimal {
    meow(): string
}

class Ca implements ICat { // Error - TS2420: Class 'Cat' incorrectly implements interface 'ICat'. Property 'name' is missing in type 'Cat' but required in type 'ICat'.
    name = 'abc';
    meow() {
        return 'MEOW~'
    }
}

const aa = new Ca();
console.log(aa);
console.log(aa.meow());


// interface IFullName {
//     firstName: string,
//     lastName: string
// }
// interface IFullName {
//     middleName: string
// }
//
// const fullName: IFullName = {
//     firstName: 'Tomas',
//     middleName: 'Sean',
//     lastName: 'Connery'
// };
