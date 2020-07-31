# Container Registry

## Container Registry?
네이버 클라우드 플랫폼의 Container Registry는 Docker Registry V2 스펙의 프라이빗 Docker 컨테이너 이미지를 손쉽게 저장, 관리 및 배포할 수 있도록 도와줍니다. 개발자는 자체 컨테이너 레지스트리 구축과 인프라에 대한 고민을 줄일 수 있으며, 이에 따라 컨테이너 개발을 간소화할 수 있습니다.

## CLI환경에서 Container Registry에 어떻게 로그인할 수 있나요?
네이버 클라우드 플랫폼의 콘솔의 Container Registry 상품 메뉴에서 생성한 레지스트리 목록을 확인하실 수 있습니다. 로그인하고자 하는 레지스트리를 선택하시면, 로그인을 하기 위한 명령어를 확인하실 수 있습니다.
레지스트리에 로그인을 위해서 사용하는 아이디와 비밀번호는 인증키(Authentication Key)를 사용합니다. 인증키는 포털 > 마이페이지 > 계정 관리 > 인증키 관리에서 확인할 수 있습니다. 아이디로 Access Key ID, 비밀번호로 Secret Key를 사용해주세요.
Sub Account를 위한 인증키는, 서브 계정의 접근 유형(Access Type)에 API Gateway Access가 활성화되어 있을 경우 서브 계정 상세에서 확인하실 수 있습니다.
API Gateway Access를 가진 서브 계정은 포털 > 마이페이지 > 계정 관리 > 인증키 관리에서도 해당 서브 계정 인증키를 확인할 수 있습니다.
