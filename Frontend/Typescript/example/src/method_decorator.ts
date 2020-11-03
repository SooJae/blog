class Greeterr {
    greeting: string;

    constructor(message: string) {
        this.greeting = message;
    }

    @enumerable(false)
    greet(){
        return "hello, " + this.greeting;
    }
}

console.log(new Greeterr('aaa').greet());

function enumerable(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.enumerable = value;
    };
}

