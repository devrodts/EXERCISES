package two_sum;
import java.util.HashMap;
import java.util.Arrays;
import java.util.Map;

class TwoSum{
    /**
     * Encontra os índices de dois números em um array que somam a um alvo específico.
     * @param nums O array de números inteiros.
     * @param target O valor alvo da soma.
     * @return Um array contendo os dois índices.
     */

     public int[] twoSum(int[] nums, int target){
        
        //Criamos o hashmap para armazenar os números e seus índices
        Map<Integer, Integer> numMap = new HashMap<>();

        for(int i = 0; i < nums.length; i++){
            int currentNumber = nums[i];

            int complement = target - currentNumber;

            if(numMap.containsKey(complement)){
                return new int[] {
                    numMap.get(complement), i
                };
            }
        }
        throw new IllegalArgumentException("No two sum solution found.");
    }

    public static void main(String[] args){
        TwoSum twoSum = new TwoSum();

        int[] numbersArr1 = {2, 7, 11, 15};
        int target1 = 9;

        System.out.println("Input: nums = " + Arrays.toString(numbersArr1) + ", target = " + target1);
        System.out.println("Output: " + Arrays.toString(twoSum.twoSum(numbersArr1, target1))); 

        int[] nums2 = {3, 2, 4};
        int target2 = 6;
        System.out.println("Input: nums = " + Arrays.toString(nums2) + ", target = " + target2);
        System.out.println("Output: " + Arrays.toString(twoSum.twoSum(nums2, target2)));

        int[] nums3 = {3, 3};
        int target3 = 6;
        System.out.println("Input: nums = " + Arrays.toString(nums3) + ", target = " + target3);
        System.out.println("Output: " + Arrays.toString(twoSum.twoSum(nums3, target3)));
    }
}