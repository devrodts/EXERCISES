package leetcodes_devrod.contains_duplicate;

public class ContainsDuplicate {

    public static void main(String[] args) {

        int[] nums = {1, 2, 3, 1};
        // int[] nums2 = {1, 2, 3, 4};
        for(int i = 0; i < nums.length; i++){
            if(nums[i] == i){
                System.out.println("Duplicate found: " + nums[i]);
            } else {
                System.out.println("No duplicate found for index: " + i);
            }
            // System.out.println("Hello World " + i);
        }

    }   
}
