type ArrayOnly<T> = T extends any[] ? T : never
type StringOrNumbers = ArrayOnly<string | number | string[] | number[]>


// const abc:StringOrNumbers = '12';
// const bbb:StringOrNumbers = [12];
// const aaa: string[] = [12];



interface Book {
    id: string
    tableOfContents: string[]
}
interface Tv {
    id: number
    diagonal: number
}
// interface ItemService {
//     getItem<T>(id: T): Book | Tv
// }

interface ItemService {
    getItem<T extends string | number>(id: T): T extends string ? Book : Tv
}

let itemService: ItemService
const book = itemService.getItem('10')
const tv = itemService.getItem(10)
const wrong = itemService.getItem(false) // 에러
