// function generateId(seed: number) {
//     return seed + 5
// }
// lookupEntity(generateId(10)) // 에러
// // id의 인자 타입을 number로 바꿔주면 당장은 동작하겠다만
// // generateId의 리턴 타입이 바뀌게 되면 일일이 대응해주어야 하나?
// function lookupEntity(id: string) {
//     // id값으로 엔티티를 쿼리한다
// }

function generateId(seed: number) {
    return seed + 5
}

type Id = ReturnType<typeof generateId>
lookupEntity(generateId(10)) // 이제 에러 안난다
// generateId의 리턴 타입에 따라 id의 타입도 바뀐다
function lookupEntity(id: Id) {
    // id값으로 엔티티를 쿼리한다
}
