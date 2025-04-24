export const sum = (a: number, b: number): number => {
    return a + b;
}

interface Sum{
    a: number;
    b: number;
}

export const sumWithInterface = (sum: Sum): number => sum.a + sum.b;

export class SumClass{
    a: number;
    b: number;

    constructor(a: number, b: number){
        this.a = a;
        this.b = b;
    }

    sum(): number{
        return this.a + this.b;
    }

    static sum(a: number, b: number): number{
        return a + b;
    }

    static sumWithInterface(sum: Sum): number{
        return sum.a + sum.b;
    }
}