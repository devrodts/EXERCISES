export const calculateAverage = (a: number, b: number): number => {
    return (a + b) / 2;
}

interface Average{
    a: number;
    b: number;
}

export const calculateAverageWithInterface = (average: Average): number => (average.a + average.b) / 2;

export class AverageClass{
    a: number;
    b: number;

    constructor(a:number, b:number){
        this.a = a;
        this.b = b;
    }

    public calculateAverage(): number{
        return (this.a + this.b) / 2;
    }
}