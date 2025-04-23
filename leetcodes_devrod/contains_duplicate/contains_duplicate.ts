const numbersArr: number[] = [1, 2, 3, 1];

const containsDuplicate = (nums: number[]): boolean => {
    const numSet = new Set<number>();
    for (const num of nums){
        if (numSet.has(num)) {
            return true;
        }else{
            return false;
        }
    }
    return false;
}


function testContainsDuplicate() {
    const testCases = [
        {input: [1, 2, 3, 1], expected: true},
        {input: [1, 2, 3, 4], expected: false},
    ]
    
    for (const testCase of testCases) {
        const result = containsDuplicate(testCase.input);
        if (result === testCase.expected) {
            console.log(`Test case ${JSON.stringify(testCase.input)} passed.`);
        } else {
            console.error(`Test case ${JSON.stringify(testCase.input)} failed. Expected ${testCase.expected}, but got ${result}.`);
        }
    }
}