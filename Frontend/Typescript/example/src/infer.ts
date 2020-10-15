

// @ts-ignore
type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;

function fn(num: number) {
    return num.toString();
}

const a: ReturnType<typeof fn> = 'Hello';
