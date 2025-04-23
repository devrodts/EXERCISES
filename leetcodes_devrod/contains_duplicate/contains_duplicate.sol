// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;



contract ContainsDuplicate{
    function containsDuplicate(uint[] memory nums) public pure returns(bool){
        uint length = nums.length;
        if(length == 0) return false;
        for(uint i = 0; i < length; i++){
            for(uint j = i + 1; j < length; j++){
                if(nums[i] == nums[j]){
                    return true;
                }
            }
        }
        return false;
    }
}

//Contract with improved time complexity - using map meus ninjas.

contract ContainsDuplicateMap {
    mapping(uint => bool) private seen;
    function containsDuplicateWithState(uint[] memory nums) public returns(bool) {
        for (uint i = 0; i < nums.length; i++) {
            if (seen[nums[i]]) {
                seen[nums[i]] = false;
            }
        }
        
        uint length = nums.length;
        if (length <= 1) return false;
        
        for (uint i = 0; i < length; i++) {
            uint currentNum = nums[i];
            if (seen[currentNum]) return true;
            seen[currentNum] = true;
        }
        return false;
    }
}

