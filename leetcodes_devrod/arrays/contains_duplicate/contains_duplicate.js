export const containsDuplicate = function(nums) {
    const set = new Set();
    for(const num of nums){
        if(set.has(num)){
            return true;
        }
        set.add(num);
    }
    return false;
}



numbersArray = [1, 1, 2, 3, 4, 5,6,7];
export const containsDuplicate2 = function(numbersArray) {
    for(let i = 0; i < numbersArray.length; i++){
       if(numbersArray.indexOf(numbersArray[i]) !== i){
            return true;
        }
        return false;
    }
}