https://heropy.blog/2020/01/27/typescript/
타입스크립트 고급 문법
https://medium.com/harrythegreat/typescript-%EC%9C%A0%ED%8B%B8%EB%A6%AC%ED%8B%B0-%ED%81%B4%EB%9E%98%EC%8A%A4-%ED%8C%8C%ED%97%A4%EC%B9%98%EA%B8%B0-7ae8a786fb20

# 설치

npm init -y
npm i -D webpack webpack-cli 
npm i -D typescript ts-loader source-map-loader

# Types vs Interface

Type과 Interface의 차이가 있었지만 Typescript가 최신버젼으로 올수록 점점 더 비슷해지고 있습니다.
Interface는 객체와 같이 데이터의 모양을 나타낼때 사용됩니다.
Type은 데이터의 타입을 정의할때 사용됩니다. 예를들어 union, primitive, intersection, tuple 등등

## Declaration merging

```ts
interface Song {
  artistName: string;
};

interface Song {
  songName: string;
};

const song: Song = {
  artistName: "Freddie",
  songName: "The Chain"
};
```

Type의 경우 에러가 발생합니다.


https://blog.logrocket.com/types-vs-interfaces-in-typescript/
