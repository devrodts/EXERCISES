// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TwoSum{
    function twoSum(int256[] memory nums, int256 target) public pure returns (int256[] memory){
        int256[] memory result = new int256[](2);
        for(uint256 i = 0; i < nums.length; i++){
            for(uint256 j = i + 1; j < nums.length; j++){
                if(nums[i] + nums[j] == target){
                    result[0] = int256(i);
                    result[1] = int256(j);
                    return result;
                }
            }
        }
        return new int256[](0);
    }
}
