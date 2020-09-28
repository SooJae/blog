ESlint란

## Linter의 기능
Linter는 어느 경우에 사용할까요? 사실 실 생활에서도 Linter가 적용되어 있습니다. 
탕수육(Code)을 먹을 때 부먹이냐 찍먹이냐의 싸울 때, 결국 사주는 사람(Linter)의 취향으로 가게됩니다. 
코드로 본다면 한 개발자는 indent 값을 2로 주고싶은데, 또 다른 개발자는 4로 주고 싶을 경우가 있을 것입니다.

개발의 모든 이유는 유지보수 때문입니다.

Lint를 사용하는 이유도 결국은 유지보수를 위함입니다.
특히 느슨한 형식의 언어인 Javascript에서는 개발자가 오류를 발생시키기 쉽습니다. 
JavaScript는 동적 분석1.을 하기 때문에 이러한 오류를 찾기위해 직접 코드 실행이 필요합니다.
ESLint를 이용해서 개발자 그룹만의 코드 스타일도 정할 수 있습니다.
ESLint와 같은 Linting 도구를 사용하면 개발자가 JavaScript 코드를 실행하지 않고도 코딩 컨벤션에 위배되는 코드나, 안티 패턴을 자동으로 검출해줍니다.
사실 필수로 사용해야 합니다.
 
eslint 설치

```bash
$ npm install -g eslint
```

```bash
$ eslint --init
```

그럼 아래와 같이 몇가지를 조사하려고 합니다.
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
❯ React
  Vue.js
  None of these

// 어떤 프레임워크에서 사용할 것인가요? (앵귤러는 왜 없나요...)

? Does your project use TypeScript? › No / Yes

// 타입 스크립트를 사용하나요?

? Where does your code run? …  (Press <space> to select, <a> to toggle all, <i> to invert selection)
✔ Browser
✔ Node

// 어떤 환경에서 코드가 동작하나요?

? What format do you want your config file to be in? … 
❯ JavaScript
  YAML
  JSON

// 해당 eslint 설정을 어디에서 사용하나요? 

? Would you like to install them now with npm? › No / Yes

// npm의 package.json에 의존성을 추가하여 설치할까요?
```

이후 .eslintrc.js 파일이 생성되며 여기서 eslint에 대한 설정을 할수 있습니다.
package.json 파일의 eslintConfig 부분에서도 설정할 수 있습니다. 


.eslintignore 파일을 생성하여 ESLint를 무시할 수도 있습니다.(/node_modules/* and /bower_components/* in the project root는 기본적으로 제외되어 있습니다.)

추가로 prettier도 설치해봅시다.


## prettier
Prettier는 2016년에 등장했고, 코드 포맷터 입니다. Prettier를 사용하면 코드를 완전히 다시 작성해줍니다.(변경이 필요한 부분만 바꾸는게 아니라, 코드 전체를 새로 작성 합니다.) 코드 내용은 변하지 않고 구조적 뷰만 변경될 뿐입니다.
JS, TS, HTML, CSS, JSON, YML, GrapQL괕 같은 언어와 Angular, Vue, React같은 프레임워크를 지원합니다. 

# ESLint VS Prettier
ESLint는 코드 포맷터의 역할도 하지만, 주로 코드 에러를 잡아내고 코드 문법을 강제하는 등 코드 품질을 개선에 중점을 두었습니다.
Prettier는 코드의 최대 길이, 작은따옴표(')를 사용할 것인지 아니면 큰 따옴표(')를 사용할 것인지 등 코드의 오류는 없지만 코드가 얼마나 예쁘게 보이도록 하는지에 중점을 두었습니다. 하지만 코드의 오류를 잡아내진 못합니다.
Prettier 공식 홈페이지에 들어가보면 아래와 같은 문구가 있습니다.
use Prettier for formatting and linters for catching bugs!
즉 포맷팅에는 Prettier를 사용하고, 버그를 잡는 것은 Lint를 사용하면 됩니다.
 
```bash
npm i -D -E prettier
```

-E는 --save-exac 의 축약어로서, Prettier에서는 이 옵션을 붙이는 것을 권장합니다. 버전이 달라지면서 스타일이 변할 수 있기 때문입니다.

이제 푸시 전에 코드를 eslint로 강제해봅시다.
다음의 도구들이 추가로 필요합니다.

```bash
$ npm i -D  husky lint-staged
```

루트 경로에 .prettierrc 파일을 만들어 줍시다.

그 후에 Prettier 옵션을 https://prettier.io/docs/en/options.html 에 들어가서 알맞게 변경해줍시다. 저는 보통 아래와 같이 사용합니다.

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

이제 팀 프로젝트를 할 때 식은 땀이 나게 만드는 명령어인 git push 할때 마지막으로 lint와 prettier를 검사하여 오류도 잡아내고 이쁘게 push가 되도록 해봅시다.  
lint와 prettier이 강제로 실행되도록 툴들을 설치해봅시다.

## husky
Git Hook을 편하게 관리해주는 툴입니다.
git의 특정 이벤트(커밋, 푸시, 풀 등)가 발생하려고 하면, 그 순간에 Hook을 해서 스크립트가 실행되도록 해주는 것이 git hook입니다.

Git Hook 에 대한 자세한 사항은 https://woowabros.github.io/tools/2017/07/12/git_hook.html 에서 확인해보시길 바랍니다.  

Husky도 .huskyrc, .huskyrc.json, .huskyrc.js, husky.config.js와 같은 별도의 설정 파일을 만들 수도 있습니다.

pre-commit 커밋 메시지를 작성하기 전에 호출됨
prepare-commit-msg 커밋 메시지 생성 후 편집기 실행 전에 호출됨
commit-msg 커밋 메시지와 관련된 명령을 넣을 때 호출됨
post-commit 커밋이 완료되면 호출됨

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
    "*.{js, jsx}": [
      "eslint --fix",
      "prettier --write",
    ]
  },
``` 

# ESLint vs TSLint
ESLint는 표준 자바스크립트의 표준 Linter입니다. 
1. 프로그램을 직접 실행해서 코드를 분석 ( <=> 프로그램을 실행하지 않고 분석하는 정적분석)
2. ESLint는 코드 서식에 어떤 문제가 있는지 알려주고 문제를 해결할 수있는 옵션을 제공합니다. 그런 다음 해당 옵션에서 하나를 선택할 수 있습니다. 반면에 Prettier 는 전혀 신경 쓰지 않습니다. 단순히 모든 코드를 다른 구조로 형식화합니다.
3. 반면에 Prettier의 전체 재 작성 프로세스는 개발자가 실수를하지 않도록합니다. max-len , no-mixed-spaces-and-tabs , keyword-spacing , comma-style 이들은 Prettier 에서 널리 사용되는 서식 지정 규칙입니다.
4. 위의 규칙 유형 외에도 ESLint는 no-unused-vars , no-extra-bind , no-implicit-globals , prefer-promise-reject-errors 와 같은 코드 품질 규칙도 고려 합니다 .


# Extends 

ESLint를 airbnb에서 사용하는 스타일로 해봅시다. 유명한 확장 플러그인 중 하나지만, 이 방식은 굉장히 타이트합니다. 툭하면 에러를 뱉어냅니다.
 에 들어가서 필요없는 옵션들은 꺼줍시다. 

https://github.com/ParkSB/javascript-style-guide


# Preferences
https://www.huskyhoochu.com/npm-husky-the-git-hook-manager/
https://www.huskyhoochu.com/how-to-use-lint-staged/
(깃 훅)https://medium.com/@suthagar23/git-hooks-keep-the-code-quality-119e6feb511e
https://jbee.io/web/formatting-code-automatically/
https://medium.com/better-programming/eslint-vs-prettier-57882d0fec1d
https://subicura.com/2016/07/11/coding-convention.html

https://feynubrick.github.io/2019/05/20/eslint-prettier.html
