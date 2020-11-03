// class Laptop {
//     public turnOn() {
//     }
// }
//
// class Programmer {
//     private laptop: Laptop;
//
//     constructor() {
//         this.laptop = new Laptop();
//     }
//
//     public programming() {
//         this.laptop.turnOn();
//     }
// }
//
// const programmer: Programmer = new Programmer();
// programmer.programming();

/**
*  의존성 주입
*/
// class Laptop {
//     public turnOn() {
//     }
// }
//
// class Programmer {
//     private laptop: Laptop;
//
//     constructor(laptop: Laptop) {
//         this.laptop = laptop;
//     }
//
//     public programming() {
//         this.laptop.turnOn();
//     }
// }
//
// const programmer: Programmer = new Programmer(new Laptop());
// programmer.programming();

/**
 * 의존 관계 역전의 원칙
 */

interface Laptop {
    turnOn() : void;
}

class Macbook implements Laptop {
    public turnOn() {
    }
}

class Gram implements Laptop {
    public turnOn() {
    }
}

class Programmer {
    private laptop: Laptop;

    constructor(laptop: Laptop) {
        this.laptop = laptop;
    }

    public programming() {
        this.laptop.turnOn();
    }
}

const programmer: Programmer = new Programmer(new Macbook());
programmer.programming();



// https://medium.com/@HoseungJang/typescript%EC%99%80-typedi%EB%A1%9C-%EC%9D%98%EC%A1%B4%EC%84%B1-%EC%A3%BC%EC%9E%85-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0-5d83ef1977f9
