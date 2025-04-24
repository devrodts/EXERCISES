package leetcodes_devrod.arrays.array_except_self;

public class ArrayExceptSelf {


    public static int[] productExceptSelf(int[] nums){
        int[] res = new int[nums.length];
        int n = nums.length;
        int left = 1;

        int right = 1;
        for(int i = 0; i < n; i++){
            res[i] = left;
            left *= nums[i];
        }
        for(int i = n - 1; i >= 0; i--){
            res[i] *= right;
            right *= nums[i];
        }
        return res;
    }


    //Método para calcular o produto de todos os elementos, exceto o próprio elemento, usando paralelismo, ideal para grandes arrays, Yooo! 🥷
    public static int[] productExceptSelfWithParallel(int[] nums){
        int n = nums.length;

        int[] prefix = new int[n], res = new int[n];

        prefix[0] = 1;
        for(int i = 1; i < n; i++){
            prefix[i] = prefix[i - 1] * nums[i - 1];
        }

        int suffix = 1;

        for(int i = n - 1; i >= 0; i--){
            res[i] = prefix[i] * suffix;
            suffix *= nums[i];
        }
        return res;
    }

    public static void main(String[] args) throws Exception {
        int[] nums = {1, 2, 3, 4};
        int[] result = productExceptSelf(nums);
        System.out.print("Input: " + java.util.Arrays.toString(nums) + "\nOutput: " + java.util.Arrays.toString(result));
        // Output será esse aqui ninjas: [24, 12, 8, 6]   
    }


    //Bora testar?
    public static void testArrayExceptSelf(){
        int[] nums = {1, 2, 3, 4};
        int[] expected = {24, 12, 8, 6};
        int[] result = productExceptSelf(nums);
        
        if(java.util.Arrays.equals(result, expected)){
            System.out.println("Test passed!");
        } else {
            System.out.println("Test failed. Expected: " + java.util.Arrays.toString(expected) + ", but got: " + java.util.Arrays.toString(result));
        }
    }
}
