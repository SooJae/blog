이번 시간은 스코프와 스코프체인의 동작방식에 대해 알아보려고 합니다.
우선 스코프에 대한 지식이 있으면 이해하기 더 쉽습니다. 제가 정리한 스코프 게시글을 보고 와주세요.

2020/02/29 - [Front-End/JavaScript] - Javascript - 스코프 (Scope)란?

이전 게시물의 코드를 갖고 오겠습니다.
```js
const globalVar = '전역 변수';
function outerFunction() {

  const outerVar = '외부 변수';

  function innerFunction() {
    const innerVar = '내부 변수';
    console.log(`inner 함수에서 ${globalVar} 접근!`);
    console.log(`inner 함수에서 ${outerVar} 접근!`); // inner 함수에서 ${outerVar} 접근!
    console.log(`inner 함수에서 ${innerVar} 접근!`); // inner 함수에서 ${outerVar} 접근!
  }

  innerFunction();
  console.log(`outer 함수에서 ${globalVar} 접근!`); // outer 함수에서 전역 변수 접근!
  console.log(`outer 함수에서 ${outerVar} 접근!`); // outer 함수에서 외부 변수 접근!
  // console.log(`outer 함수에서 ${innerVar} 접근!`); // innerVar is not defined
}

outerFunction();
console.log(`전역에서 ${globalVar} 접근!`); // 전역에서 전역 변수 접근!
// console.log(`전역에서 ${outerVar} 접근!`); // outerVar is not defined
// console.log(`전역에서 ${innerVar} 접근!`); // innerVar is not defined
```

inner함수에서 globalVar를 사용할 경우
이전 게시글에는 스코프 체인을 위와 같은 그림으로 표현했습니다. 이번 시간에는 좀더 깊게 알아봅시다.
 자바스크립트는 어떻게 변수의 범위를 어떻게 결정하고, 어떻게 탐색을 할까요?
이를 이해하기 위해서는 자바스크립트의 렉시컬 환경(lexical environment)을 이해해야합니다.

렉시컬 환경(Lexical environment)
렉시컬 스코프 vs 렉시컬 환경
이전 게시글에서 배웠던 렉시컬 스코프와 렉시컬 환경은 다릅니다. 
렉시컬 환경은 식별자(identifier)-변수(variable) 매핑을 보유하는 구조입니다. (여기서 식별자는 변수/ 함수를 뜻하고, 변수는 객체[함수 객체, 배열 객체] 또는 기본 값에 대한 참조입니다.)
즉, 렉시컬 환경은 객체에 대한 변수와 참조가 저장되는 장소입니다.
렉시컬 스코프 : 컴파일시 결정되는 범위
렉시컬 환경 : 프로그램 실행중에 변수가 저장되는 장소

렉시컬 환경은 각 렉시컬 스코프에 대해 작성되지만, 해당 범위의 코드가 실행될 때만 작성됩니다.
또한 렉시컬 환경은 외부 렉시컬 환경에대한 참조값을 가질수도 있습니다.

lexicalEnvironment = {
    environmentRecord: {
        globalVar: '전역 변수'
    }
  outer: <null>
}
이제 자바스크립트 엔진이 렉시컬 환경을 사용해서 범위 및 범위 체인을 결정하는 방법을 알아보겠습니다. 


```js
const globalVar = '전역 변수';
function outerFunction() {

  const outerVar = '외부 변수';

  function innerFunction() {
    const innerVar = '내부 변수';
    console.log(`inner 함수에서 ${globalVar} 접근!`);
    console.log(`inner 함수에서 ${outerVar} 접근!`); // inner 함수에서 ${outerVar} 접근!
    console.log(`inner 함수에서 ${innerVar} 접근!`); // inner 함수에서 ${outerVar} 접근!
  }

  innerFunction();
  console.log(`outer 함수에서 ${globalVar} 접근!`); // outer 함수에서 전역 변수 접근!
  console.log(`outer 함수에서 ${outerVar} 접근!`); // outer 함수에서 외부 변수 접근!
  // console.log(`outer 함수에서 ${innerVar} 접근!`); // innerVar is not defined
}

outerFunction();
console.log(`전역에서 ${globalVar} 접근!`); // 전역에서 전역 변수 접근!
// console.log(`전역에서 ${outerVar} 접근!`); // outerVar is not defined
// console.log(`전역에서 ${innerVar} 접근!`); // innerVar is not defined
```
위의 스크립트가 로드 될때, 전역 스코프에 정의된 변수와 함수를 포함하는 전역 렉시컬 환경이 만들어 집니다.

globalEnvironment = {
    environmentRecord: {
        globalVar: '전역 변수'
    }
  outer: <null> // outer가 null인 이유는 전역 스코프의 외부 스코프는 없기 때문입니다.
}

outerFunctionEnvironment = {
     environmentRecord: {
        outerVar: '외부 변수'
     }
  outer:  <globalEnvironment>
}

innerFunctionEnvironment = {
    environmentRecord: {
        innerVar: '내부 변수'
    }
    outer:  <outerFunctionEnvironment>
}

순서를 보시면 다음과 같습니다.
1. innerFunctionEnvironment내의 environmentRecord에서 globalVar를 찾습니다.
2. globalVar가 없으니 outer의 참조 값 (outerFunctionEnvironment)를 반환합니다.
3. outerFunctionEnvironment내의 environmentRecord에서 globalVar를 찾습니다.
4. globalVar가 없으니 outer의 참조 값 (globalEnvironment)를 반환합니다.
5. globalEnvironment내의 environmentRecord에서 globalVar를 찾습니다.
6. globalVar가 있으니 값을 반환합니다. 

더 자세히 알고싶으신 분들은 밑의 References를 참고하시기 바랍니다. 


REFERENCES

자바스크립트 함수(3) - Lexical Environment: https://meetup.toast.com/posts/129
Understanding Scope and Scope Chain in JavaScript: https://blog.bitsrc.io/understanding-scope-and-scope-chain-in-javascript-f6637978cf53
JavaScript 식별자 찾기 대모험: https://homoefficio.github.io/2016/01/16/JavaScript-%EC%8B%9D%EB%B3%84%EC%9E%90-%EC%B0%BE%EA%B8%B0-%EB%8C%80%EB%AA%A8%ED%97%98/
