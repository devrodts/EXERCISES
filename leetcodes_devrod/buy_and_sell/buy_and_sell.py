def buy_and_sell_with_max_profit(prices: list[int]) -> int:
    if not prices or len(prices) <2:
        return 0
    min_price_so_far = prices

    max_profit_so_far = 0

    for i in range(1, len(prices)):
        current_price = prices[i]
        potential_profit = current_price - min_price_so_far
        max_profit_so_far = max(max_profit_so_far, potential_profit)
        min_price_so_far = min(min_price_so_far, current_price)
        return max_profit_so_far