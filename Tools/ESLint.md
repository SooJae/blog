## Linter의 기능
개발에서 가장 중요한 것은 유지보수라고 생각합니다.

Linter를 사용하는 이유도 결국은 유지보수를 하기 위해서입니다.
특히 느슨한 형식의 언어인 Javascript에서는 코드 오류가 자주 발생합니다.
하지만 JavaScript는 동적 분석(프로그램을 직접 실행해서 코드를 분석 <=> 프로그램을 실행하지 않고 분석하는 정적분석)을 하기 때문에 이러한 오류를 찾기위해서는 코드를 직접 실행해서 확인을 해봐야 합니다.
추가적으로 간단한 코드포맷팅 기능도 있습니다. 
ESLint와 같은 Linter를 사용하면 개발자가 JavaScript 코드를 실행하지 않고도 코딩 컨벤션에 위배되는 코드나, 안티 패턴을 자동으로 검출해줍니다.

## ESLint 설치

```bash
$ npm i -g eslint
$ npm i eslint -D
```

eslint 라이브러리를 설치가 되면 초기화를 합니다.
```bash
$ eslint --init
```

그럼 아래와 같이 단계별로 질문을 합니다.
```
? How would you like to use ESLint? … 
To check syntax only
❯ To check syntax and find problems
To check syntax, find problems, and enforce code style

// ESLint의 사용 목적은 무엇인가요?

? What type of modules does your project use? … 
❯ JavaScript modules (import/export)
CommonJS (require/exports)
None of these

// 어떤 타입의 모듈을 사용하나요?

? Which framework does your project use? … 
 React
Vue.js
❯None of these

// 어떤 프레임워크에서 사용할 것인가요? (앵귤러는 왜 없나요...)

? Does your project use TypeScript? › No / Yes

// 타입 스크립트를 사용하나요?

? Where does your code run? … (Press <space> to select, <a> to toggle all, <i> to invert selection)
✔ Browser
✔ Node

// 어떤 환경에서 코드가 동작하나요?

? What format do you want your config file to be in? … 
❯ JavaScript
YAML
JSON

// 해당 ESLint 설정을 어디에서 사용하나요? 
```

이후 .eslintrc.js 파일이 생성되며 이 파일은 ESLint에 대한 설정들이 있습니다. 
.eslintrc.js 파일을 만들기 싫다면, package.json 파일 내의 eslintConfig 부분에서도 설정할 수 있습니다. 

.eslintignore 파일을 생성하여 해당 파일, 폴더들에 대한 ESLint를 무시할 수도 있습니다.(프로젝트 내의 /node_modules/* and /bower_components/* 는 기본적으로 제외되어 있습니다.)


그럼 이제 ESLint를 적용해 봅시다.

test.js
```js
const

```

이 상황에서 커맨드 창에서 아래와 같이 입력하면 다음과 같은 메시지를 확인 할 수 있습니다.

```bash
$ eslint test.js
```

```eslint
/Users/soojae/IdeaProjects/React-Practice/learn-redux-middleware/src/test.js
2:1 error Parsing error: Unexpected token

1 | const
> 2 | 
| ^

✖ 1 problem (1 error, 0 warnings)
```

변수를 선언한 후 사용을 하지 않아도 에러를 발생시킵니다.

test.js

```js
const abc = 0;
```

$ eslint test.js
```eslint
/Users/soojae/IdeaProjects/React-Practice/learn-redux-middleware/src/test.js
1:7 error 'abc' is assigned a value but never used no-unused-vars

✖ 1 problem (1 error, 0 warnings)
```

이제 간단한 오류를 처리해주는 --fix 를 사용해봅시다.
```json
[
rules: {
"semi": "error",
}
]
```
`semi`는 세미콜론을 안 찍었을시 에러를 발생시킵니다.

eslint 적용 전
```js
const abc = 0
```

$ eslint test.js --fix

eslint 적용 후
```js
const abc = 0;
``` 


추가로 prettier도 설치해봅시다.

## prettier
Prettier는 어느 경우에 사용할까요? 사실 실 생활에서도 Pritter가 적용되어 있습니다. 
탕수육(Code)을 먹을 때 부먹이냐 찍먹이냐의 싸울 때, 결국 사주는 사람(Pritter가)의 취향으로 가게됩니다. 
코드로 본다면 한 개발자는 indent 값을 2로 주고싶은데, 또 다른 개발자는 4로 주고 싶을 경우가 있을 것입니다.
Prettier는 2016년에 등장했고, 코드 포맷터 입니다. Prettier를 사용하면 코드를 완전히 다시 작성해줍니다.(변경이 필요한 부분만 바꾸는게 아니라, 코드 전체를 새로 작성 합니다.)
코드 내용은 변하지 않고 구조적 뷰만 변경될 뿐입니다.


```bash
$ npm i -D -E prettier
```

-E는 --save-exac 의 축약어로서, Prettier에서는 이 옵션을 붙이는 것을 권장합니다. 버전이 달라지면서 스타일이 변할 수 있기 때문에, 정확한 버전으로 설치해줍니다.

이제 설정 파일인 .prettierrc 파일을 생성하고, Prettier 옵션을 https://prettier.io/docs/en/options.html 에 들어가서 알맞게 변경해줍시다. 저는 보통 아래와 같이 사용합니다.

```json
{
"arrowParens": "avoid",
"bracketSpacing": true,
"htmlWhitespaceSensitivity": "css",
"insertPragma": false,
"jsxBracketSameLine": false,
"jsxSingleQuote": false,
"printWidth": 80,
"proseWrap": "preserve",
"quoteProps": "as-needed",
"requirePragma": false,
"semi": true,
"singleQuote": true,
"tabWidth": 2,
"trailingComma": "none",
"useTabs": false,
"vueIndentScriptAndStyle": false
}
```


```js
const abc
= 0;
```

```bash
$ prettier test.js --write
```

결과
```js
const abc = 0;
```

# ESLint VS Prettier
ESLint는 코드 포맷터의 역할도 하지만, 주로 코드 에러를 잡아내고 코드 문법을 강제하는 등 코드 품질을 개선에 중점을 두었습니다.
Prettier는 코드의 최대 길이, 작은따옴표(')를 사용할 것인지 아니면 큰 따옴표(")를 사용할 것인지 등 코드의 오류는 없지만 코드가 얼마나 예쁘게 보이도록 하는지에 중점을 두었습니다. 하지만 코드의 오류를 잡아내진 못합니다.
Prettier 공식 홈페이지에는 아래와 같은 문구가 있습니다.
use Prettier for formatting and linters for catching bugs! 
즉 ESLint는 포맷팅이 있긴하지만 Prettier에 비해 포맷팅에 특화되어있지 않으므로,
코드 에러, 코드 문법에는 ESLint를 사용하고 포맷팅에는 Prettier를 사용하면 됩니다.

## ESLint + Prettier 
이제 ESLint와 Prettier를 같이 사용해봅시다.
하지만 위에서 말씀 드렸듯이, ESLint가 코드 포맷터의 역할도 하기 때문에 해당 Prettier와 충돌할 수도 있습니다.
이를 방지하기 위해서 아래의 라이브러리를 추가합니다.
`eslint-config-prettier`는 ESLint 규칙에서 Pretter와 충돌하는 것들을 끄는 역할을 합니다.

```bash
$ npm i -D eslint-config-prettier
```

eslint-plugin-prettier는 프리티어 규칙을 ESLint 규칙으로 추가하는 플러그인이다. 프리티어의 모든 규칙이 ESLint로 들어오기 때문에 ESLint만 실행하면 된다.

```bash
$ npm i -D eslint-plugin-prettier
```

```json
// .eslintrc.js
{
plugins: [
"prettier"
],
rules: {
"prettier/prettier": "error"
},
}
```

이제 ESLint만 실행해도 프리티어 포매팅 기능을 포함 할 수 있습니다.

```bash
$ eslint test.js --fix
```

## 저장소에 푸시 전 ESLint, Prettier 강제 적용 하기
매번 eslint를 실행하는 것 조차 번거로울 뿐만아니라, 같은 팀 내에서 실수로 eslint를 적용하지 않고 저장소에 푸시를 할 수도 있습니다.
그렇게 되면 깃 로그에 eslint 적용 같은 쓸데 없는 로그들이 쌓이게 됩니다.
이런 경우를 방지하기 위해 깃 푸시 전에 코드를 ESLint를 강제해 봅시다.

husky 와 lint-staged 라이브러리를 추가로 설치합니다.

```bash
$ npm i -D husky lint-staged
```
이제 팀 프로젝트를 할 때 식은 땀이 나게 만드는 명령어인 git push 할때 마지막으로 lint와 prettier를 검사하여 오류도 잡아내고 이쁘게 push가 되도록 해봅시다. 
lint와 prettier이 강제로 실행되도록 툴들을 설치해봅시다.

## husky
Git Hook을 편하게 관리해주는 툴입니다.
git의 특정 이벤트(커밋, 푸시, 풀 등)가 발생하려고 하면, 그 순간에 Hook을 해서 스크립트가 실행되도록 해주는 것이 git hook입니다.

Git Hook 에 대한 자세한 사항은 https://woowabros.github.io/tools/2017/07/12/git_hook.html 에서 확인해보시길 바랍니다. 

간단하게 사용할 용어들만 확인해봅시다.
pre-commit 커밋 메시지를 작성하기 전에 호출됨
prepare-commit-msg 커밋 메시지 생성 후 편집기 실행 전에 호출됨
commit-msg 커밋 메시지와 관련된 명령을 넣을 때 호출됨
post-commit 커밋이 완료되면 호출됨
pre-push 푸시가 실행되기 전에 호출됨

Husky도 .huskyrc, .huskyrc.json, .huskyrc.js, husky.config.js와 같은 별도의 설정 파일을 만들 수도 있습니다.
```json
"husky": {
"hooks": {
"pre-commit": "eslint --fix && prettier --write",
"pre-push": "npm test"
}
},
```

## lint-staged
husky는 모든 코드를 검사하기 때문에 비효율 적입니다. staged상태인 코드들면 검사하기 위해 lint-staged 모듈을 설치합시다. 
git에 staged 상태인 파일만 lint 해주는 도구입니다.

```json
"husky": {
    "hooks": {
      "pre-commit": "lint-staged",
      "pre-push": "npm test"
    }
  },
  "lint-staged": {
    "*.js": [
      "eslint --fix",
      "prettier --write"
    ]
  }
``` 



```js
// test.js

const abc 
= 0;
```

```git
husky > pre-commit (node v12.18.0)
✔ Preparing...
⚠ Running tasks...
  ❯ Running tasks for *.js
    ✖ eslint --fix [FAILED]
    ◼ prettier --write
↓ Skipped because of errors from tasks. [SKIPPED]
✔ Reverting to original state because of errors...
✔ Cleaning up... 

✖ eslint --fix:

/Users/soojae/IdeaProjects/Blog/Tools/Example/test.js
  1:7  error  'abc' is assigned a value but never used  no-unused-vars

✖ 1 problem (1 error, 0 warnings)

husky > pre-commit hook failed (add --no-verify to bypass)

```

변수 abc를 사용하지 않는다는 에러가 발생했으니, 변수 abc를 사용해봅시다. 

```js
const abc
  = 0;

console.log(abc)
```

다시 커밋을 하면 아래와 같은 메시지가 나옵니다.

```bash
$ git commit
husky > pre-commit (node v12.18.0)
✔ Preparing...
✔ Running tasks...
✔ Applying modifications...
✔ Cleaning up... 
[master 17e09f6] [Tools] eslint huskey lint-staged 테스트
 3 files changed, 17 insertions(+), 15 deletions(-)
```

커밋이 완료되면 test.js에 prettier가 자동적으로 적용된 것을 확인 할수 있습니다.
```js
// test.js
// prettier가 적용된 것을 확인 할 수 있습니다.
const abc = 0;

console.log(abc);
```

# ESLint vs TSLint
ESLint는 표준 자바스크립트의 표준 Linter입니다. 
1. 프로그램을 직접 실행해서 코드를 분석 ( <=> 프로그램을 실행하지 않고 분석하는 정적분석)
2. ESLint는 코드 서식에 어떤 문제가 있는지 알려주고 문제를 해결할 수있는 옵션을 제공합니다. 그런 다음 해당 옵션에서 하나를 선택할 수 있습니다. 반면에 Prettier 는 전혀 신경 쓰지 않습니다. 단순히 모든 코드를 다른 구조로 형식화합니다.
3. 반면에 Prettier의 전체 재 작성 프로세스는 개발자가 실수를하지 않도록합니다. max-len , no-mixed-spaces-and-tabs , keyword-spacing , comma-style 이들은 Prettier 에서 널리 사용되는 서식 지정 규칙입니다.
4. 위의 규칙 유형 외에도 ESLint는 no-unused-vars , no-extra-bind , no-implicit-globals , prefer-promise-reject-errors 와 같은 코드 품질 규칙도 고려 합니다 .


# Extends 
ESLint를 airbnb에서 사용하는 스타일로 해봅시다. 유명한 확장 플러그인 중 하나지만, 이 방식은 굉장히 타이트합니다. 툭하면 에러를 뱉어냅니다.
https://github.com/ParkSB/javascript-style-guide 에 들어가서 필요없는 옵션들은 꺼줍시다. 


# Preferences
https://www.huskyhoochu.com/npm-husky-the-git-hook-manager/
https://www.huskyhoochu.com/how-to-use-lint-staged/
(깃 훅)https://medium.com/@suthagar23/git-hooks-keep-the-code-quality-119e6feb511e
https://jbee.io/web/formatting-code-automatically/
https://medium.com/better-programming/ESLint-vs-prettier-57882d0fec1d
https://subicura.com/2016/07/11/coding-convention.html

https://feynubrick.github.io/2019/05/20/ESLint-prettier.html

동적 분석은 프로그램을 직접 실행해서 코드를 분석합니다. ( <=> 프로그램을 실행하지 않고 분석하는 정적분석)
