interface ICountries {
    KR: '대한민국',
    US: '미국',
    CP: '중국'
}
let country: keyof ICountries; // 'KR' | 'US' | 'CP'
country = 'KR'; // ok
// country = 'RU'; // Error - TS2322: Type '"RU"' is not assignable to type '"KR" | "US" | "CP"'.

interface ICountries {
    KR: '대한민국',
    US: '미국',
    CP: '중국'
}
let country2: ICountries[keyof ICountries]; // ICountries['KR' | 'US' | 'CP']
country2 = '대한민국';
// country2 = '러시아'; // Error - TS2322: Type '"러시아"' is not assignable to type '"대한민국" | "미국" | "중국"'.

console.log(country)
console.log(country2)
