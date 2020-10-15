interface IItem {
    [itemIndex: number]: any // Index signature
}
let item: IItem = ['a', 'b', 'c']; // Indexable type
console.log(item[0]); // 'a' is string.
console.log(item[1]); // 'b' is string.
// console.log(item['0']);


interface IUser {
    [userProp: string]: string | boolean
}
let user: IUser = {
    name: 'Neo',
    email: 'thesecon@gmail.com',
    isValid: true,
    0: false
};
console.log(user.name); // 'Neo' is string.
console.log(user.email); // 'thesecon@gmail.com' is string.
console.log(user.isValid); // true is boolean.
console.log(user[0]); // false is boolean
console.log(user[1]); // undefined
console.log(user['0']); // false is boolean
