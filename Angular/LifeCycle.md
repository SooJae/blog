# 앵귤러 라이프 사이클
https://www.freecodecamp.org/news/angular-lifecycle-hooks/
컴포넌트를 렌더링 할때 앵귤러는 트리 모델을 만듭니다. 그리고 첫 Change Detection. 이 실행됩니다.
그 후에 constructor(){}가 실행되고 데이터가 바인딩 됩니다. 
그 후에 ngOnInit()이 실행됩니다.(처음 한번만 실행됩니다).
이 시점에서 앵귤러는 변화를 감지하진 못하지만 ngDoCheck() 함수를 호출합니다.
이 함수는 컴포넌트의 변화가 있는지 없는지 확인하고 있다면 markForCheck()함수를 이용해서 앵귤러에게 렌더링이 필요하다고 말합니다.

앵귤러에는 8단계의 라이프 사이클이 있습니다. (constructor는 타입스크립트에서 동작하므로 제외) 각 단계는 **라이프 사이클 훅 이벤트**라고 부릅니다.


## constructor()(Typescript)
constructor()는 앵귤러와 별개로 타입스크립트에서 호출하는 메서드입니다. 그냥 앵귤러의 동료라고 생각하시면 됩니다.   
constructor()에 컴포넌트에 의존성들(예: 서비스)을 주입(inject)하는 것이 가장 좋습니다. constructor()가 실행된 후에 앵귤러의 라이프 사이클이 실행됩니다.

## ngOnChanges()
constructor() 이후에 제일 처음 호출되는 라이프 사이클 훅 이벤트입니다.
자식컴포넌트에서 @Input 데코레이터를 이용하면 부모 컴포넌트에서 프로퍼티를 전달 받을 수 있습니다. 부모 컴포넌트의 프로퍼티가 변경되면 ngOnChanges가 다시 호출 됩니다.  
부모 컴포넌트에서 **동일한 값을 전달 받거나 전달 받은 값이 객체 내의 프로퍼티만 바꾼 값**일 경우 호출되지 않습니다.
ngOnChanges()는 부모 컴포넌트에서 받은 프로퍼티의 정보를 담고 있는 `SimpleChanges` 라는 파라미터를 하나 더 받습니다.  

## ngOnInit
ngOnChange()이후에 호출되고 초기에 한번만 호출됩니다.
클래스가 가지고있는 프로퍼티와 @Input을 통해 내려받은 프로퍼티가 모두 초기화가 된 이후에 호출됩니다.
주로 프로퍼티 값 설정, 서비스를 이용해 HTTP통신후 결과값을 프로퍼티에 할당하는 등 화면에 데이터가 표시되기 전 필요한 프로퍼티들을 초기화 시키는데 사용됩니다. 

# ngDoCheck
ngOnInit() 메소드 이후에 한번 실행됩니다.
변경 감지 로직 구현, 다른 컴포넌트에 대한 알고리즘을 작성할때 사용합니다.
Angular가 감지하지 못하는 변화를 감지할때 사용합니다. 예를들어 @Input에 객체 값`obj = {name: 'soojae', age: 29}`을 전달했는데, 객체 내의 프로퍼티만 바꾼 경우`this.obj.age = 30` 값 변경이 없다고 보기에 ngOnChanges에서 감지가 되지 않는데, ngDoCheck는 값 변경과 관계없이 @Input 데코레이터 프로퍼티에 값이 전달되면 호출됩니다.)
즉 그만큼 자주 실행되기 때문에 조심히 사용해야 합니다.
> OnPush 전략을 사용하고 바인딩이 바뀐게 없는데, ngDoCheck 라이프 사이클 훅이 동작한다. 이 전략이 동작하지 안흔ㄴ 건가?

## ngAfterContentInit
컴포넌트의 템플릿을 컴포넌트 뷰로 준비하거나 뷰 안에 있는 디렉티브를 준비한 이후에 실행됩니다.
이 방법은 구성요소의 모든 바인딩을 처음으로 점검할 필요가 있을 때 실행한다.
ngDoCheck()가 처음 실행된 직후에 한 번만 실행됩니다. 이 메서드는 기본적으로 자식 컴포넌트 초기화와 연결됩니다.


## ngAfterContentChecked
ngAfterContentInit()이 실행된 후에 호출됩니다.
앵귤러의 변경 감지 메커니즘에 의해 컴포넌트의 내용(content)의 변경을 확인(check)합니다. 또한 ngDoCheck() 메서드가 실행될 때마다 이어서 바로 실행됩니다.
이 메서드 또한 기본적으로 자식 컴포넌트 초기화와 연결됩니다.

## ngAfterViewInit
ngAfterContextChecked() 실행된 후에 호출됩니다.
컴포넌트 뷰가 완전히 초기화 되었을때(자식 컴포넌트 포함) 실행됩니다. 이 라이프 사이클 훅 메서드는 오직 컴포넌트에만 적용됩니다.
자식 컴포넌트까지 완전히 초기화 되었을 때 실행되는 특성으로 인해, 부모 컴포넌트에서 자식 컴포넌트에 접근을 하는(@ViewChild() 디렉티브) 메서드를 사용할때 이 라이프 사이클 메서드에 작성을 해줍니다.
화면에 적용 하는 라이브러리(echart, D3등등)또는 @ViewChild 디렉티브가 필수적이기 때문에 자주 사용합니다.

## ngAfterViewChecked
ngAfterViewInit() 실행된 후에 호출됩니다. 
앵귤러의 변경 감지 메커니즘에 컴포넌트 뷰(자식 컴포넌트 포함)를 확인(check)합니다. ngAfterContentChecked() 메서드가 실행될 때마다 이어서 실행됩니다.

## ngOnDestroy()
디렉티브나 컴포넌트가 종료되기 직전에 옵저버블 구독해제, 이벤트 핸들러를 제거해서 메모리 누수를 방지힙니다.



ngDoCheck는 앵귤러가 감지할 수 없는 상황을 위해 필요하다. 

# 언제 ngDoCheck가 동작하나?


https://indepth.dev/if-you-think-ngdocheck-means-your-component-is-being-checked-read-this-article/
https://www.freecodecamp.org/news/angular-lifecycle-hooks/
https://dzone.com/articles/angular-6-part-3-life-cycle-of-a-component
