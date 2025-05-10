// Solução força bruta O(n^2) - não é a mais eficiente, mas é a mais simples de entender

export const arrayExceptSelf = (nums) => {

    const result = new Array(nums.length).fill(1);
    let left = 1;
    for(let i = 0; i < nums.left; i++){
        result[i] = left;
        left *= nums[i];
    }

    let right = 1;
    for(let i = nums.length - 1; i >= 0; i--){
        result[i] *= right;
    }
    return result;
}

export const arrayExceptSelfOptimized = (nums) => {
    const result = nums.length.fill(1)

    nums.reduce(
        (acc, current, i) => (res[i] *= acc, acc * current),
        1
    );

    nums.reduceRight()
    
}

// Teste da função 

function testArrayExeptSefl(){

    const testCases = [
        {input: [1, 2, 3, 4], expect: [24, 12, 8, 6]}
    ]

    for(const testCase of testCases){
        const result = arrayExceptSelf(testCase.input);

        // if(JSON.stringify)

    }
}