 클로저를 이해하기 위한 사전 지식으로 스코프 관련 글들을 봤는데, 블로그마다 스코프에 대한 설명이 달라서 공부할수록 더 헷갈리는 상황이 왔습니다.
스코프의 개념을 잊어버릴 미래의 저를 위해 이해하기 쉽게 스코프 포스팅을 하겠습니다. (글에 오류가 있으면 알려주세요. 감사합니다.)

스코프란?
스코프란 자바스크립트의 코드의 범위입니다. 스코프는 전역 스코프와 지역 스코프로 나눌 수 있습니다.

전역 스코프(Global Scope)
자바스크립트 프로그램을 시작 후, 어떤 함수도 호출하지 않았을 때, 실행 흐름은 전역 스코프에 있습니다.
중괄호 {}의 밖을 전역 스코프라고 하고, 전역 스코프에서 선언된 것들을 전역 변수라고 합니다. 전역 변수를 많이 이용한다면 부작용이 발생합니다.

const name = '수재' 
const age = 28;

function displayName() {
  console.log(`My name is ${name}`);
}


function displayAge() {
   console.log(`I was born in ${new Date().getFullYear() - this.age}`);
}


displayName(); // My name is 수재
displayAge(); // I was born in 1992
displayName와 displayAge는 전역 변수 name, age에 의존합니다. 이렇게 되면 어떤 문제가 발생할까요?
제가 egoing님의 생활코딩 강의를 들으면서 가장 크게 깨달은 것은 '코드를 1000 줄, 10000 줄이 있다고 생각하라'입니다. 
처음에 name에 수재를 할당했고, 1000줄 뒤에 name에 준범을 할당해야 한다고 생각해봅시다

const name = '수재';
const age = 29;

function displayName() {
  console.log(`My name is ${name}`);
}

function displayAge() {
   console.log(`I was born in ${new Date().getFullYear() - this.age}`);
}

//...
//1000 Lines // name을 정의 했던 것을 잊어버렸습니다...
//...

// name에 '준범'을 정의 하려고 합니다.
const name = '준범'; // Error, thing has already been declared
위의 예시가 전역 변수의 부작용입니다. name을 정의했던 것을 잊어버리고 name을 '준범'이라고 재 정의하려고 하자 에러가 발생했습니다. 
위의 경우 const를 썼기 때문에 다행히(?) 에러가 발생했지만, var를 사용했다면 재 정의가 가능해져 에러가 발생하지 않습니다. 그렇게 되면, '수재'는 영원히 출력이 되지 않겠죠.
이를 개선하기 위해서 name1, name2... 이런 식으로 계속 변수를 정의할 수는 없겠죠?
 전역 변수를 최소한으로 적절하게 사용하는 것이 좋은 코드의 첫걸음이라 생각합니다.

지역 스코프 (Local Scope)
중괄호 {} 안을 지역 스코프라고 합니다. 전역 스코프에 선언된 변수가 전역 변수이므로, 지역 스코프에 선언된 변수는 지역 변수겠죠?
지역 스코프에는 함수 스코프, 블록 스코프 두 가지가 있습니다.

함수 스코프 (Function scope)
다음은 함수 스코프를 보겠습니다. 함수 스코프는 ES6이전(선언에 let, const는 없고 var만 사용하던 시절)까지 자바스크립트가 따르던 스코프입니다. 
함수스코프는 함수 내부에서 선언한 변수는 지역 변수이며 함수 외부에서 선언한 변수는 모두 전역 변수로 취급합니다.

var name = '이름이 없습니다.';
function displaySoojae() {
  var name = '수재';
  var age = 28;
  
  console.log(`My name is ${name}`);
  console.log(`I was born in ${new Date().getFullYear() - age}`);
}

{
  var name = '중괄호 내부에 있는 name입니다.';
}

// My name is 수재
// I was born in 1992
displaySoojae();  

console.log(name); //  중괄호 내부에 있는 name입니다.
위의 코드를 보시면 블록 스코프에 name을 정의했음에도 전역 변수로 취급되어서 console.log에 '중괄호 내부에 있는 name입니다.'가 출력된 것을 확인할 수 있습니다.

블록 스코프 (Block scope)
블록 스코프는 대부분의 프로그래밍에서 따르던 스코프입니다.
자바스크립트에서는 var의 단점(호이 스팅, var 키워드 생략, 변수 중복 허용)을 보완하기 위해 ES6부터 let과 const가 등장하면서 도입된 개념으로 모든 중괄호 {} 안에 선언된 변수는 지역 변수로 취급합니다. 아래의 코드는 전역 스코프 예시의 코드를 블록 스코프로 바꿔본 것입니다.

{
  const name = '수재';
  const age = 28;

  function displayName() {
    console.log(`My name is ${name}`);
  }

  function displayAge() {
     console.log(`I was born in ${new Date().getFullYear() - age}`);
  }
  displayName();	// My name is 수재
  displayAge();		// I'm 1992
}
//...
//1000 Lines // name을 정의 했던 것을 잊어버렸습니다...
//...
{
  const name = '준범';
  const age = 29;
  function displayName() {
    console.log(`My name is ${name}`);
  }

  function displayAge() {
     console.log(`I was born in ${new Date().getFullYear() - age}`);
  }
  
  displayName();	// My name is 준범
  displayAge();		// I'm 1991
 }
  
// console.log(name);  // name is not defined
 똑같은 name과 age를 두 번 정의했음에도 에러가 발생하지 않았습니다!. 마지막 라인을 보시면 전역 스코프에서 name을 호출할 시 에러가 발생한 것을 확인할 수 있습니다.
 즉, 블록 스코프는 각각 다른 중괄호 {} 안에서 변수, 함수를 정의하면 중괄호 안에서만 이용 가능하고 각 블록이 독립적으로 실행됩니다. (ES6의 let과 const를 키워드로 선언

했을 때만 가능합니다. var일 경우는 적용이 되지 않습니다. var일 경우 전역 스코프의 console.log의 에러가 발생하지 않고, '준범'이 출력됩니다.)
또한 함수형 스코프(var 키워드를 사용했던)와는 달리 블록스코프의 변수를 전역 변수로 취급하지 않습니다.
하지만 실무에서 블록 스코프를 이런 식으로 사용하진 않습니다. 블록 스코프에 대한 이해를 위해 위처럼 만들었을 뿐입니다.

 블록 스코프를 보다 보면 함수 스코프와 비슷하다는 생각이 듭니다. 함수 스코프의 중괄호 {}를 블록 스코프로 봐도 되지 않을까요? 그래서 저는 함수 스코프가 블록 스코프의 부분집합이라 생각하겠습니다. 


블록 스코프는 함수 스코프를 포함한 모든 중괄호에 적용된다고 볼 수 있습니다.
이제 렉시컬 스코프에 대해 알아보겠습니다.

렉시컬(lexical) 스코프( === 정적 스코프, 수사적 스코프)
자바스크립트의 스코프는 렉시컬(lexical)입니다.
렉시컬 스코프는 함수를 어디서 호출이 됐는지가 아닌 어디서 선언되었는지에 따라 결정됩니다.  


다음 코드를 보면서 렉시컬 스코프에 대해 자세히 알아보겠습니다.

const x = 3;
function f() {
    console.log(x);
    console.log(y);
};

{
    const y = 5;
    
    // ReferenceError: y is not defined
    f();
}

// x : 함수 f를 선언할 때 존재 O
// y : 함수 f를 선언할 때 존재 X
이것이 렉시컬 스코프입니다. 함수 f는 자신이 선언될 때 접근할 수 있었던 변수 x에는 호출 후에 접근할 수 있지만, 선언될 때 접근할 수 없었던 y는 y 변수의 할당 이후에 함수 f를 호출했으니 접근할 수 없습니다.

함수 선언 : function x() {}
함수 호출 : f();
여기까지 이해되셨으면 y를 없애고 x를 넣어봅시다.

const x = 3;
function f() {
    console.log(x);
};

{
    const x = 5;
    f();
}
결괏값은 어떻게 나올까요? 3입니다. 
우리는 여기서 의문이 듭니다. 함수 안의 console.log(x)가 어떻게 전역 스코프에 선언된 x를 갖고 오는 걸까요? 바로 자바스크립트의 스코프 체인 덕분입니다.

스코프 체인(Scope Chain)
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
에러가 발생하는 부분은 주석처리를 했습니다.
inner함수에서 globalVar를 사용하기까지의 여정을 다음과 같이 그려보았습니다.


inner함수에서 globalVar를 사용할 경우
inner함수에서 outerVar 찾기, outer함수에서 globalVar 찾기도 마찬가지로 생각하시면 됩니다.

이제 이 글을 처음부터 다시 읽어주세요. 스코프 개념은 유기적으로 연결되어있기 때문에, 다시 한번 보시면 이해가 잘 되실 겁니다.

글에 오류가 있으면 알려주세요. 감사합니다.

REFERENCES
자바스크립트의 스코프와 클로저 : https://meetup.toast.com/posts/86
함수의 범위(scope) : https://www.zerocho.com/category/JavaScript/post/5740531574288ebc5f2ba97e
Understanding Scope and Scope Chain in JavaScript : https://blog.bitsrc.io/understanding-scope-and-scope-chain-in-javascript-f6637978cf53



출처: https://soojae.tistory.com/22 [이수재의 개발 블로그]
