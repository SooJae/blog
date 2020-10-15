# package.json에 ^(캐럿)은 뭘까?

유의적 버전

react-create-app으로 리개트를 설치하고 package.json를 확인해보면 다음과 같은 리액트 버전을 확인 할 수 있다.
"react": "^16.13.1",
위를 Semantic Versioning 관점으로 본다면 다음과 같다.
^MAJOR.MINOR.PATCH
이제 각각에 대해 알아봅시다. Semver에는 다음과 같이 설명하고 있습니다.
MAJOR version when you make incompatible API changes,
MINOR version when you add functionality in a backwards-compatible manner, and
PATCH version when you make backwards-compatible bug fixes.

즉 MAJOR version

```
~0.0.1 : >=0.0.1 <0.1.0
~0.1.1 : >=0.1.1 <0.2.0
~0.1 : >=0.1.0 <0.2.0
~0 : >=0.0 <1.0
```


예전 프로젝트를 보다보면 캐럿(^)이 아닌 틸드(~)로 버전이 지정되어 있는 것도 볼 수 있습니다. 틸드에 대해서도 알아봅시다.


더 틸드와 캐럿에 대한 자세한 

https://semver.org/
https://blog.outsider.ne.kr/1041
