
// Solução "força bruta" O(n^2) - não é a mais eficiente, mas é a mais simples de entender

export const arrayExeptSelf = (nums: number[]): number[] => {
    const result: number[]  = new Array(nums.length).fill(1);
    let left = 1;
    for(let i  = 0; i < nums.length; i++){
        result[i] = left;
        left *= nums[i];
    }   
    let right = 1;
    for(let i = nums.length - 1; i >= 0; i--){
        result[i] *= right;
        right *= nums[i];
    }   
    return result;
}

// Teste da função arrayExeptSelf
function testArrayExceptSelf() {
    const testCases = [
        {input: [1, 2, 3, 4], expected: [24, 12, 8, 6]},
        {input: [5, 6, 7], expected: [42, 35, 30]},
        {input: [1], expected: [1]},
        {input: [0], expected: [0]},
    ]

    for (const testCase of testCases) {
        const result = arrayExeptSelf(testCase.input);
        if (JSON.stringify(result) === JSON.stringify(testCase.expected)) {
            console.log(`Test case ${JSON.stringify(testCase.input)} passed.`);
        } else {
            console.error(`Test case ${JSON.stringify(testCase.input)} failed. Expected ${testCase.expected}, but got ${result}.`);
        }
    }
}

// Versão otimizada O(n) - mais eficiente, mas um pouco mais complexa de entender


export const arrayExceptSelfOptimized = (nums: number[]): number[] => {

    const res: number[] = new Array(nums.length).fill(1);
    let left = 1;

    for (let i = 0; i < nums.length; i++) {
        res[i] = left;
        left *= nums[i];
    }
    let right = 1;

    for (let i = nums.length - 1; i >= 0; i--) {
        res[i] *= right;
        right *= nums[i];
    }
    return res;
}


// Teste da função arrayExceptSelfOptimized
function testArrayExceptSelfOptimized() {
    const testCases = [
        {input: [1, 2, 3, 4], expected: [24, 12, 8, 6]},
        {input: [5, 6, 7], expected: [42, 35, 30]},
        {input: [1], expected: [1]},
        {input: [0], expected: [0]},
    ]

    for (const testCase of testCases) {
        const result = arrayExceptSelfOptimized(testCase.input);
        if (JSON.stringify(result) === JSON.stringify(testCase.expected)) {
            console.log(`Test case ${JSON.stringify(testCase.input)} passed.`);
        } else {
            console.error(`Test case ${JSON.stringify(testCase.input)} failed. Expected ${testCase.expected}, but got ${result}.`);
        }
    }
}


// Versão otimizada O(n) - mais eficiente, mas um pouco mais complexa de entender
export const arrayExceptSelfOptimized2 = (nums: number[]): number[] => {
   const res:number[] = new Array(nums.length).fill(1);
   nums.reduce(
    (acc, curr, i) => (res[i] *= acc, acc * curr),
    1
    );

    nums.reduceRight(
        (acc, curr, i) => (res[i] *= acc, acc * curr),
        1
    );
    return res;
}

// Teste da função arrayExceptSelfOptimized2
export const testArrayExceptSelfOptimized2 = () => {
    const target = [
        {input: [1, 2, 3, 4], expected: [24, 12, 8, 6]},
        {input: [5, 6, 7], expected: [42, 35, 30]},
        {input: [1], expected: [1]},
        {input: [0], expected: [0]},
    ]

    target.forEach((testCase) => {
        const result  = arrayExceptSelfOptimized2(testCase.input);
        if (JSON.stringify(result) === JSON.stringify(testCase.expected)) {
            console.log(`Test case ${JSON.stringify(testCase.input)} passed.`);
        }
        else {
            console.error(`Test case ${JSON.stringify(testCase.input)} failed. Expected ${testCase.expected}, but got ${result}.`);
        }
    })
    console.log("All test cases passed.");  
    return true;
}
