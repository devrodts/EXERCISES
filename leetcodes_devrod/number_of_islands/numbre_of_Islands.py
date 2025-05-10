# Count the number of islands in a 2D grid
# Given a 2D grid map of '1's (land) and '0's (water), count the number of islands.
# An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.
# You may assume all four edges of the grid are all surrounded by water.
# Example 1:
grid = [
    ['0', '0', '0', '0', '0'],
    ['0', '1', '1', '0', '0'],
    ['0', '1', '0', '1', '0'],
    ['0', '0', '0', '0', '0']
]
# Output: 2

def count_islands(grid):

    if not grid:
        return 0

    rows, cols = len(grid), len(grid[0])

    def dfs(r, c):
        if r < 0 or c < 0 or r >= rows or c >= cols or grid[r][c] == '0':
            return
        grid[r][c] = '0'
        dfs(r - 1, c)
        dfs(r + 1, c)
        dfs(r, c - 1)
        dfs(r, c + 1)
    count = 0

    for r in range(rows):
        for c in range(cols):
            if grid[r][c] == '1':
                count += 1
                dfs(r, c)

    return count
# Example usage 
count_islands(grid);
print(count_islands(grid))


