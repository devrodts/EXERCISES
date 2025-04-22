export const twoSum = (array, target) => {
    const map = new Map();

    for(let i = 0; i < array.length; i++){
        const complement = target - array[i];
        if(map.has(complement)){
            return [map.get(complement), i];
        }
        map.set(array[i], i);
    }
}

const array = [2, 7, 11, 15];   
const target = 9;
const result = twoSum(array, target);
console.log(result);


//With OOP
export class TwoSum{

    array = [2, 7, 11, 15];
    target = 9;

    TwoSum(array, target) {
        this.array = array;
        this.target = target;
    }

    twoSum(array, target) {
        const map = new Map();
        for(let i = 0; i < array.length; i++){
            const complement = target - array[i];
            if(map.has(complement)){
                return [map.get(complement), i];
            }
            map.set(array[i], i);

        }
        return null;
    }
}