package leetcodes_devrod.buy_and_sell;

public class BuyAndSell {
    

    public static int maxProfit(int[] prices){
        if(prices == null || prices.length < 2){
            return 0;
        }

        int minPrice = prices[0];
        int maxProfit = 0;
        
        for(int i = 1; i < prices.length; i++){
            if(prices[i] < minPrice){
                minPrice = prices[i];
            } else {
                int profit = prices[i] - minPrice;
                if(profit > maxProfit){
                    maxProfit = profit;
                }
            }
        }
        return maxProfit;
    }

    public static void main(String[] args) {
        int[] prices = {7, 1, 5, 3, 6, 4};
        System.out.println("Input: " + java.util.Arrays.toString(prices));
        System.out.println("Output: " + maxProfit(prices));
    }
}
