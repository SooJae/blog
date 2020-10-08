
# A 레코드
## A(서버 IP) 레코드란?
IPv4 주소를 매칭할 때 사용하는 레코드. 하나의 Domain Name에 여러개의 IP주소를 등록할 수 있다.
예: ncloud.com 소유자는 ncloud.com 및 그 하위 도메인(a.ncloud.com, mail.ncloud.com 등)에 원하는 IP 주소를 지정할 수 있습니다.

### A(서버 IP) 레코드 추가

1. 레코드 명에 추가하려는 도메인 주소를 입력합니다.
2. TTL(Time to Live) 값은 default값을 권장합니다.
   TTL: 추가하는 레코드 정보 갱신 주기
   TTL값을 너무 낮거나 높게 설정하면 원하지 않은 결과가 노출될 수 있습니다.
3. 레코드 값에는 추가한 도메인과 연결할 호스트의 IP 주소를 입력합니다.

## NS(네임서버) 레코드
### NS(네임서버) 레코드란?
해당 zone의 응답 가능한 authoritative 네임서버를 나타내는 레코드. 소유 도메인과 하위 도메인에 대한 네임서버를 지정할 수 있습니다.     
예: ncloud.com 소유자는 해당 도메인 및 하위 도메인에 대해서 별도의 네임서버가 있다면 네임서버를 추가하여 위임할 수 있습니다.

### NS(네임서버) 레코드 추가
도메인 명에 추가하려는 도메인명을 입력합니다.
TTL(Time to Live) 값은 default값을 권장합니다.
TTL: 추가하는 레코드 정보 갱신 주기
TTL값을 너무 낮거나 높게 설정하면 원하지 않은 결과가 노출될 수 있습니다.
레코드 값에는 네임서버의 호스트 주소를 입력합니다.

## AAAA(IPv6) 레코드
### AAAA(IPv6) 레코드란?
IPv6 주소를 매칭하는 레코드.
예: ncloud.com 소유자는 ncloud.com 및 그 하위 도메인(www.ncloud.com, mail.ncloud.com 등)에 원하는 IP 주소를(IPv6) 지정할 수 있습니다.

### AAAA(IPv6) 레코드 추가
레코드 명에 추가하려는 도메인 주소를 입력합니다.
TTL(Time to Live) 값은 default값을 권장합니다.
TTL: 추가하는 레코드 정보 갱신 주기
TTL값을 너무 낮거나 높게 설정하면 원하지 않은 결과가 노출될 수 있습니다.
레코드 값에는 추가한 도메인과 연결할 호스트의 IP 주소(IPv6)를 입력합니다.

## CNAME(도메인 별명) 레코드
### CNAME(도메인 별명) 레코드란?
해당 도메인 네임의 별명(alias)을 생성하는 레코드.
   
예: www.ncloud.com에 대하여 alias.ncloud.com이라는 CNAME을 등록하는 경우
1. alias.ncloud.com 300 IN A 10.10.10.10 (alias.ncloud.com 레코드가 등록되어 있을 때)
2. www.ncloud.com 300 IN CNAME alias.ncloud.com.
3. www.ncloud.com 응답 결과

```
www.ncloud.com  300  IN  CNAME alias.ncloud.com.
alias.ncloud.com. 300  IN  A   10.10.10.10
```

### CNAME(도메인 별명) 레코드 사용 시 주의 사항
CNAME을 사용해서 다른 A 레코드로 관리하는 것보다는 별도의 A 레코드로 추가하는 것을 권장합니다.

예시
```
(A) alias.ncloud.com -> 10.10.10.10
(CNAME) www.ncloud.com -> alias.ncloud.com
```

권장
```
(A) www.ncloud.com -> 10.10.10.10
(A) www1.ncloud.com -> 10.10.10.10
```

