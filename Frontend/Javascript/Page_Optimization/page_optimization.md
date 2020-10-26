## 페이지 최적화
오늘은 페이지 최적화에 대해 알아보겠습니다. 페이지 최적화는 웹 서비스에서 중요한 개념이자, 이후에 포스팅 할 SSR(Servr Side Rendering)과 SSG(Static Site Generator)의 차이점을 설명하는데 중요한 개념이라고 볼 수 있습니다.

 ## 페이지 최적화를 해야하는 이유?
사용자가 사이트를 방문한 후, 아무런 요청을 실행하지 않고 떠나는 비율을 **이탈률**이라고 합니다.

https://www.thinkwithgoogle.com/marketing-strategies/app-and-mobile/mobile-page-speed-new-industry-benchmarks/
![bounce](./bounce.png)

위의 링크를 보시면 알 수 있듯이, 페이지 로딩속도에 대한 이탈률을 보면 로딩 시간이 3초가 걸리면 32%, 5초면 90%, 6초면 106%, 10초면 123%라고 합니다.
2018년도 자료이니, 2020년도인 지금은 로딩속도에 대한 이탈률이 더 증가했다고 보시면 됩니다.
아무리 잘 만든 페이지라도, 사용자가 이용하지 않으면 말짱 도루묵 이겠죠? 이런 이탈률을 줄이기 위해 페이지 최적화가 필요합니다.


## 페이지 속도 측정에 가장 중요한 4가지 값
![Page_Speed_Mess-Stationen](./Page_Speed_Mess-Stationen.jpg)

### TTFB(Time to First Byte) 
사용자가 웹 사이트를 호출하면 웹 서버에서 수신한 첫번째 바이트가 도착하는 시간입니다.
즉, HTTP 요청에 걸리는 시간 + 서버의 요청 처리 시간 + 서버에서 클라이언트까지의 응답시간이라고 보시면 됩니다.
TTFB 속도는 서버의 프로세스와 연관되어 있습니다. 

최적화 방법 :
1. 호스팅 업체 변경
2. CDN 사용
3. 서버 코드 경량화 
 
### FCP(First Contentful Paint)
TTFB 이후에 콘텐츠(HTML 코드, 스타일, 이미지 등)가 표시될 때까지의 시간입니다.
이 시점은 사용자가 이 웹사이트가 실제로 동작한다고 인식하도록 해주기 때문에 중요합니다. (사용자 이탈률이 줄어듭니다.)
Pagespeed Insights(페이지 속도를 측정해주는 구글 툴)에서는 TTFB 측정은 건너뛰고 FCP 측정을 첫번째로 합니다. 이는 개발자를 위한 것이며, Pagespeed Insight는 FCP를 활용하여 OnPage 최적화(제목 태그, 콘텐츠, 내부 링크 및 URL 최적화)를 위한 제안을 해줍니다. 

최적화 방법:
데이터 압축, HTTP/2 사용, 리로드할 필요없는 컨텐츠를 캐싱, 코드 경량화 & 스플리팅, 라이브러리 정리

FMP(First Meaningful Paint): 사용자에게 의미 있는 콘텐츠가 그려지기 까지의 시간입니다. 하지만 이벤트(화면 스크롤, 클릭 등)는 동작하지 않습니다.
사용자는 이 시점에서 페이지가 완전히 로드가 되었다고 인식합니다. 그러므로 FMP의 최적화는 좀 더 중요합니다.

최적화 방법:
이미지 최적화, 사진이 많은 웹사이트일때는 LazyLoading (예: Twitter, Instagram등 스크롤을 내리면 추가 페이지 로딩)

### TTI(Time To Interactive) 
자바스크립트의 초기 실행이 완료되어. 페이지가 상호작용 가능하게 될 때까지의 시간 (이벤트 발생 등).
대부분의 페이지 속도 테스트는 이 값을 기초로 사용합니다.

최적화 방법: FCP와 FMP를 최적화

![render_terms](./render_terms.png)

여기서 가장 중요한 시점은 FMP입니다. 로딩이 끝날때까지 흰 화면을 보여주기 보다는 의미있는 화면을 보여줘야 하겠죠? 사용자 기준에서 성능이 좋다고 느껴지기 위해서는 FMP시간을 단축시켜야 합니다.


페이지 로딩 최적화에 방법과 자세한 설명은 https://ui.toast.com/fe-guide/ko_PERFORMANCE/ 에서 확인해보시길 바랍니다.
다음은 렌더링의 종류와 차이점에 대해 포스팅 하겠습니다.  

글에 오류가 있으면 알려주세요 감사합니다.


## REFERENCES

https://en.ryte.com/magazine/measure-page-speed
https://ui.toast.com/fe-guide/ko_PERFORMANCE/
https://marshall-ku.com/web/log/ttfb-%EB%8C%80%ED%8F%AD-%EB%8B%A8%EC%B6%95-%EC%84%B1%EA%B3%B5
https://web.dev/user-centric-performance-metrics/
