export const buyAndSellWithMaxProfit = (prices: number[]): number => {
    
    let minPrice = Infinity;
    let maxProfit = 0;

    for(let i = 0; i < prices.length; i++){
        if(prices[i] < minPrice){
            minPrice = prices[i];
        } else if(prices[i] - minPrice > maxProfit){
            maxProfit = prices[i] - minPrice;
        }
        console.log(`Day ${i + 1}: Price = ${prices[i]}, Min Price = ${minPrice}, Max Profit = ${maxProfit}`);

    }
    return maxProfit;
}