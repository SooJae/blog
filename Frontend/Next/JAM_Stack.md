
번역
https://www.sitepoint.com/react-higher-order-components/
 
# 잼(JAM)스택과

NextJS를 공부하다가 JAM 스택이라는 용어가 등장해서 이에 대해 자세히 알아보기위해 이 글을 포스팅합니다.

흔히들 이야기하는 스택들이 있습니다. 램(LAMP)스택, 엘크(ELK)스택, 민(MEAN) 스택
LAMP 스택: Linux, Apache, MySQL, PHP
ELK 스택: ElasticSearch, Logstash, Kibana
MEAN 스택: MongoDB, ExpressJS, Angular, NodeJS

그리고 2018년도에 잼(JAM)스택이 등장했습니다. JAM 스택은 2018년 Netlify (https://www.netlify.com/)
JAM 스택: Javascript, APIs, Markup
클라이언트 부분은 Javascript에서 전부 담당하고
데이터베이스, 서버 등 백엔드 부분을 APIs가 담당합니다.
NextJS, NuxtJS, Hugo등 정적사이트 생성기(앵귤러는 없네요...) Static Site Generator(SSG)를 이용하 미리 Markup을 생성합니다.
여기서 정적사이트 생성기에 대해 좀더 알아보겠습니다.

API 란?

단순히 말해서 API는 사용자가 사용하려는 인터페이스의 내부 코드가 어떻게 되어있고 어떻게 동작하는지를 알 필요없이, 해당 기능을 사용할 수 있게 해줍니다.
예를 들어 페이스북에 게시글을 올리고 싶을때, Facebook API를 사용하면 코드가 어떻게 동작되는지를 알 필요없이 Facebook 에서 제공해주는 API 만으로 게시글을 올릴 수 있습니다.
API는 

또한 모든 언어, 프로토콜, 환경에 상관없이 사용할 수 있습니다.

## SSR vs SSG
SSR은 **요청 마다** HTML 페이지를 생성합니다.
SSG는 **빌드 시**에 HTML 페이지를 생성하고 요청이 발생할 때마다 해당 페이지를 재 사용합니다. 


그럼 JAM 스택에 장점을 알아봅시다.

### 더 나온 성능
Static Site Generator(SSG)로 빌드 중에 미리 페이지를 생성하고, CDN을 이용하여 FP(사용자가 첫 번째 pixel을 볼 수 있는 시간) 시간을 최소화 합니다.

### 보안성
백엔드를 API에서 담당하기때문에 프로세스를 통한 공격 노출의 영역이 감소합니다.

### 비용
개발의 복잡성이 줄어드므로 비용이 감소합니다.


## Static Site Generator(SSG)

SSG는 

여기에서 https://www.netlify.com/with/nextjs/#deploy JAM 스택을 사용해볼 수 있습니다.

https://aws.amazon.com/ko/blogs/korea/amazon-s3-amazon-cloudfront-a-match-made-in-the-cloud/
https://docs.microsoft.com/ko-kr/azure/cdn/cdn-overview


REFERENCE
https://developers.google.com/web/updates/2019/02/rendering-on-the-web
https://jamstack.org/
https://snipcart.com/blog/jamstack
