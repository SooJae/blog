최근에 나는 리액트를 배우기 시작했다. 나를 포함한 많은 사람들이 우리가 잘 알고있는 npm이 아닌 npx를 보고 혼란스러워 했다.

우리중 일부는 그것이 이상하다고 생각했지만, 별 생각이 없었고, 또 다른 사람들은 오타라고 생각하고 npm을 npx로 "고쳐서" 어려움을 겪었다.

몇번 더 이런 상황을 겪게되니 이것에 대해 설명할 가치가 있다고 생각했다. 그래서 이 기사르 쓰게되었다. 나와 같이 npx에 대해 오해하고 있었던 모든 사람들을 위해서.

 ```
npm이 아니라 npx가 맞아! 오타가 아니야!
```

# NPM
아마 우리가 알고있듯이, npm은 **의존성(dependency)** 과 **패키지 관리(package management)** 를 자동으로 해주기 위한 Node.js의 패키지 매니저이다.

그것은 우리가 프로젝트를 위한 모든 의존성 패키지를 package.json 파일에 지정할 수 있다. 그리고 언제든지 누구라도 그 의존성 패키지들을 설치해야 할때, 단순히 **npm install** 만 타이핑하면 된다!
  
그것은 또한 versioning을 제공한다. versioning이란 우리 프로젝트에 의존하는 의존성 패키지들의 버전을 지정할 수 있게 해주는 것을 말한다.
그래서 대부분의 경우, 패키지의 버전 업데이트로 인해 우리의 프로젝트가 깨지는 것을 방지하거나, 우리가 선호하는 버전을 이용할 수 있게 해준다.
  
#NPX
그와 반대로 npx는 **Node 패키지들을 실행하는 도구**다. 그리고 그것은 npm 5.2버전부터 npm에 포함되어있다.
npx는 다음과 같이 동작한다.

```
1. npx는 우선 기본적으로, 실행할 패키지가 실행 가능한 경로에 있는지 확인한다. (예를 들면, 우리의 프로젝트내에서 확인한다.)
2. 만약에 있다면, 그것을 실행한다.
3. 아니라면 패키지가 설치가 되지 않았다는 것으로 판단하여, npx가 가장 최신 버전의 패키지를 설치하고 실행한다.
```

위에 설명한 행동은 npx의 기본적인 설정이다. flags를 설정하면 사용자의 정의에 맞게 변경할 수 있다.

예를 들면, 만약에 **npx some-package --no-install** 을 실행시키면 이는 npx가 some-package가 기존에 설치되어있지 않았더라도, 단지 some-package를 실행시키라는 뜻이다.

좀더 npx flags응 보고싶다면 여기로 가라. 

# Example 
예를들어 우리의 패키지가 my-package고, 이 패키지를 실행시키고 싶다고 생각해보자.

글쎄, npx가 없이 패키지를 실행하려면, 우리는 지역 경로(local path)로부터 my-package를 실행해야할 것이다. 다음과 같이.

```bash
./node_modules/.bin/my-package
```  

또는 package.json 파일의 scripts 부분에 작성하는 방법도 있다. 다음과 같이.
```json
{
  "name": "something",
  "version": "1.0.0",
  "scripts": {
    "my-package": "./node_modules/.bin/my-package"
  }
}
```

그리고 npm run package 로 실행하면 된다.

npx를 이용하면 우리는 단순히 npx my-package 만 타이핑 하면 된다.

# 결론

따라서 npm !== npm 이라는 것이고, 이 짧은 글이 당신의 npx에 대한 오해를 정리하는데 도움이 되었기를 희망한다.

만약 다른 질문이 있으면 언제든지 댓글로 질문하면 된다.

해피코딩! 😊

https://morioh.com/p/877e8eccd6a2